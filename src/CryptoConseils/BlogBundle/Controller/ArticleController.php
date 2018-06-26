<?php
/**
 * Created by PhpStorm.
 * User: KFMJ2601
 * Date: 12/03/2018
 * Time: 16:05
 */

namespace CryptoConseils\BlogBundle\Controller;

use CryptoConseils\BlogBundle\Form\EditArticleType;
use CryptoConseils\UserBundle\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Finder\Exception\AccessDeniedException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use CryptoConseils\BlogBundle\Entity\Article;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\Validator\ConstraintViolationList;
use Symfony\Component\HttpFoundation\Response;

class ArticleController extends FOSRestController
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

    public function indexAction() // [GET] /articles
    {
        $articles = $this->getDoctrine()->getRepository('CryptoConseilsBlogBundle:Article')->findAll();
        $data = $this->get('jms_serializer')->serialize($articles, 'json');

        $response = new Response($data);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }


    public function showAction(Article $id) // [GET] /articles/8
    {
        $user = new User();
        $user = $this->getUser();
        if ($user['premiumLevel'] >= $id->getPremium() || $id->getPremium() == 0) {
            $data = $this->get('jms_serializer')->serialize($id, 'json');

            $response = new Response($data);
            $response->headers->set('Content-Type', 'application/json');

            return $response;
        } else {
            return new JsonResponse(array('error' => "Access denied ! Vous n'êtes pas à un niveau premium assez élevé"));
        }
    }


    public function newAction(Request $request) // [POST] /articles/new  (ROLE_ADMIN ONLY)
    {
        // If user is not admin
        if (false === $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            return new JsonResponse(array('error' => 'Access denied! Authentication with ADMIN roles required'), 403);
        } else {
            $currentUserUsername = $this->getUser()->getUsername();
            $em = $this->getDoctrine()->getManager();
            $data = $request->getContent();
            $categories = json_decode($data, true);
            $article = $this->get('jms_serializer')->deserialize($data, 'CryptoConseils\BlogBundle\Entity\Article', 'json');

            // If image_id is NULL
            if (null === $article->getImageId()) {
                return new JsonResponse(array('error' => 'image_id required'), 403);
            } else {
                $image = $em->getRepository("CryptoConseilsBlogBundle:Image")->find($article->getImageId());
                $article->setImage($image);
            }

            if (isset($categories['category_id'])) {
                $categories = $categories['category_id'];

                foreach ($categories as $category) {
                    $category_id = $em->getRepository("CryptoConseilsBlogBundle:Category")->find($category);
                    $article->AddCategory($category_id);
                }
            }

            $article->setAuthor($currentUserUsername);
            $article->setDate(new \DateTime('now'));


            // Analyse si les conditions sur les champs sont respectées //
            $errors = $this->get('validator')->validate($article);

            if (count($errors)) {
                return new Response($errors, 400);
            } // Fin d'analyse //


            $em = $this->getDoctrine()->getManager();
            $em->persist($article);
            $em->flush();
            $article = $this->get('jms_serializer')->serialize($article, 'json');
            return new JsonResponse(json_decode($article), 200);
        }
    }


    public function editAction($id, Request $request) // [PUT] /articles/8 (ROLE_ADMIN ONLY)
    {
        // If user is not admin
        if (false === $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            return new JsonResponse(array('error' => 'Access denied! Authentication with ADMIN roles required'), 403);
        } else {
            $em = $this->getDoctrine()->getManager();
            $article = $this->getDoctrine()->getRepository('CryptoConseilsBlogBundle:Article')->find($id);

            if (null === $article) {
                return new JsonResponse(array('error' => 'Article not found'), 404);
            }

            $username = $article->getAuthor();
            $date_publication = $article->getDate();
            $article->setAuthor($username);
            $article->setDate($date_publication);

            $data = json_decode($request->getContent(), true);

            if (isset($data['category_id'])) {
                // On boucle sur les catégories du post pour les supprimer
                foreach ($article->getCategories() as $category) {
                    $article->removeCategory($category);
                }

                $categories = $data['category_id'];

                foreach ($categories as $category) {
                    $category_id = $em->getRepository("CryptoConseilsBlogBundle:Category")->find($category);
                    $article->AddCategory($category_id);
                }
            }

            $form = $this->createForm(EditArticleType::class, $article);
            $form->submit($data);


            // Analyse si les conditions sur les champs sont respectées //
            $data_errors = $request->getContent();
            $article_errors = $this->get('jms_serializer')->deserialize($data_errors, 'CryptoConseils\BlogBundle\Entity\Article', 'json');
            $errors = $this->get('validator')->validate($article_errors);

            if (count($errors)) {
                return new Response($errors, 400);
            } // Fin d'analyse //


            $em->persist($article);
            $em->flush();
            $article = $this->get('jms_serializer')->serialize($article, 'json');
            return new JsonResponse(json_decode($article), 200);
        }
    }


    public function deleteAction($id) // [DELETE] /articles/8 (ROLE_ADMIN ONLY)
    {
        // If user is not admin
        if (false === $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            return new JsonResponse(array('error' => 'Access denied! Authentication with ADMIN roles required'), 403);
        } else {
            $article = $this->getDoctrine()->getRepository('CryptoConseilsBlogBundle:Article')->find($id);

            if (null === $article) {
                return new JsonResponse(array('error' => 'Article not found'), 404);
            }

            $em = $this->getDoctrine()->getManager();
            $em->remove($article);
            $em->flush();

            return new JsonResponse(array('success' => 'Article deleted'), 200);
        }
    }
}