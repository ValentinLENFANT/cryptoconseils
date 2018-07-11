<?php
/**
 * Created by PhpStorm.
 * User: KFMJ2601
 * Date: 12/03/2018
 * Time: 16:05
 */

namespace CryptoConseils\BlogBundle\Controller;

use CryptoConseils\BlogBundle\Form\EditCommentType;
use Symfony\Component\HttpFoundation\Request;
use CryptoConseils\BlogBundle\Entity\Comment;
use Symfony\Component\HttpFoundation\JsonResponse;
use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Response;
use \PDO;

class CommentController extends FOSRestController
{
    public function menuAction($limit)
    {
        $em = $this->getDoctrine()->getManager();

        $listArticles = $em->getRepository('CryptoConseilsBlogBundle:Article')->findBy(
            array(),
            array('date' => 'desc'),
            $limit,
            0
        );

        return $this->render('CryptoConseilsBlogBundle:Article:menu.html.twig', array(
            'listArticles' => $listArticles));
    }


    /////////////// FONCTIONS CRUD DE L'API REST ///////////////

    public function indexAction() // [GET] /comments
    {
        $comments = $this->getDoctrine()->getRepository('CryptoConseilsBlogBundle:Comment')->findByCommentPublished(1);
        $data = $this->get('jms_serializer')->serialize($comments, 'json');
        $response = new Response($data);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }


    public function showAction(Comment $article_id) // [GET] /comments/8
    {
        $comments = $this->getDoctrine()->getRepository('CryptoConseilsBlogBundle:Comment')->findByIdAndCommentPublished(1, $article_id);
        $data = $this->get('jms_serializer')->serialize($comments, 'json');
        $response = new Response($data);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }


    public function newAction(Request $request) // [POST] /comments/new
    {
        if (null === $currentUserUsername = $this->getUser()) {
            return new JsonResponse(array('error' => 'Access denied! You need to login before comment'), 403);
        } else {
            $currentUserUsername = $currentUserUsername->getUsername();
            $userId = $this->getUser()->getId();
            $em = $this->getDoctrine()->getManager();
            $data = $request->getContent();

            $comment = $this->get('jms_serializer')->deserialize($data, 'CryptoConseils\BlogBundle\Entity\Comment', 'json');
            $article = $em->getRepository("CryptoConseilsBlogBundle:Article")->find($comment->getArticleId());

            $comment->setArticle($article);
            $comment->setAuthor($currentUserUsername);
            $comment->setDate(new \DateTime('now'));
            $comment->setUserId($userId);
            $comment->setPublished(true);

            // Analyse si les conditions sur les champs sont respectées //
            $errors = $this->get('validator')->validate($comment);
            if (count($errors)) {
                return new Response($errors, 400);
            }
            // Fin d'analyse //

            $em->persist($comment);
            $em->flush();
            $comment = $this->get('jms_serializer')->serialize($comment, 'json');
            return new JsonResponse(json_decode($comment), 200);
        }
    }

    public function editPublishedAction($id, Request $request) // [PUT] /comments/edit/enabled/{id}
    {
        $data = $request->getContent();
        $published = json_decode($data)->published;
        try {
            $bdd = new PDO('mysql:host=' . $this->container->getParameter('database_host') . ';dbname=' . $this->container->getParameter('database_name') . ';charset=utf8', $this->container->getParameter('database_user'), $this->container->getParameter('database_password'));
        } catch (Exception $e) {
            die('Erreur : ' . $e->getMessage());
        }
        $req = $bdd->prepare('UPDATE comment SET published = :published WHERE id = :id');
        $req->execute(array(
            'published' => $published,
            'id' => $id
        ));

        if ($published) {
            return new JsonResponse('Le commentaire a bien été activé', 200);
        } else {
            return new JsonResponse('Le commentaire a bien été désactivé', 200);
        }

    }


    public function editAction($id, Request $request) // [PUT] /comments/8 (ROLE_ADMIN ONLY AND USER HIMSELF)
    {
        $comment = $this->getDoctrine()->getRepository("CryptoConseilsBlogBundle:Comment")->find($id);

        if (null === $comment) {
            return new JsonResponse(array('error' => 'Comment not found'), 404);
        }

        $commentUsername = $comment->getAuthor();


        // If user is not admin
        if (false === $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {

            if (null === $currentUserUsername = $this->getUser()) {
                return new JsonResponse(array('error' => 'Access denied! You need to login'), 403);
            } else {
                if ($currentUserUsername->getUsername() === $commentUsername) {
                    $data = json_decode($request->getContent(), true);
                    $form = $this->createForm(EditCommentType::class, $comment);
                    $form->submit($data);


                    // Analyse si les conditions sur les champs sont respectées //
                    $data_errors = $request->getContent();
                    $category_errors = $this->get('jms_serializer')->deserialize($data_errors, 'CryptoConseils\BlogBundle\Entity\Comment', 'json');
                    $errors = $this->get('validator')->validate($category_errors);
                    if (count($errors)) {
                        return new Response($errors, 400);
                    } // Fin d'analyse //


                    $comment->setAuthor($commentUsername);
                    $comment->setDate(new \DateTime('now'));

                    $em = $this->getDoctrine()->getManager();
                    $em->persist($comment);
                    $em->flush();
                    $comment = $this->get('jms_serializer')->serialize($comment, 'json');
                    return new JsonResponse(json_decode($comment), 200);
                } else {
                    return new JsonResponse(array('error' => 'Access denied! This comment is not yours'), 403);
                }
            }
        } else {
            $data = json_decode($request->getContent(), true);
            $form = $this->createForm(EditCommentType::class, $comment);
            $form->submit($data);


            // Analyse si les conditions sur les champs sont respectées //
            $data_errors = $request->getContent();
            $category_errors = $this->get('jms_serializer')->deserialize($data_errors, 'CryptoConseils\BlogBundle\Entity\Comment', 'json');
            $errors = $this->get('validator')->validate($category_errors);

            if (count($errors)) {
                return new Response($errors, 400);
            } // Fin d'analyse //

            $comment->setDate(new \DateTime('now'));
            $comment->setAuthor($commentUsername);

            $em = $this->getDoctrine()->getManager();
            $em->persist($comment);
            $em->flush();
            $comment = $this->get('jms_serializer')->serialize($comment, 'json');
            return new JsonResponse(json_decode($comment), 200);
        }
    }


    public function deleteAction($id) // [DELETE] /comments/8 (ROLE_ADMIN ONLY)
    {
        // If user is not admin
        if (false === $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            return new JsonResponse("Access_denied, ADMIN authentication required", 403);
        } else {
            $comment = $this->getDoctrine()->getRepository('CryptoConseilsBlogBundle:Comment')->find($id);

            if (null === $comment) {
                return new JsonResponse(array('error' => 'Comment not found'), 404);
            }

            $em = $this->getDoctrine()->getManager();
            $em->remove($comment);
            $em->flush();

            return new JsonResponse(array('success' => 'Comment deleted'), 200);
        }
    }
}