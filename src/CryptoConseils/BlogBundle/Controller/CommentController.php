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

    public function indexAction() // [GET] /blog/comments
    {
        $comments = $this->getDoctrine()->getRepository('CryptoConseilsBlogBundle:Comment')->findAll();
        $data = $this->get('jms_serializer')->serialize($comments, 'json');

        $response = new Response($data);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    public function showAction(Comment $id) // [GET] /blog/comments/8
    {
        $data = $this->get('jms_serializer')->serialize($id, 'json');

        $response = new Response($data);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }


    public function newAction(Request $request) // [POST] /blog/comments/new
    {
        $em = $this->getDoctrine()->getManager();

        $data = $request->getContent();


        $comment = $this->get('jms_serializer')->deserialize($data, 'CryptoConseils\BlogBundle\Entity\Comment', 'json');

        $article = $em->getRepository("CryptoConseilsBlogBundle:Article")->find($comment->getArticleId());

        $comment->setArticle($article);


        // Analyse si les conditions sur les champs sont respectées //
        $errors = $this->get('validator')->validate($comment);

        if (count($errors)) {
            return new Response($errors, 400);
        }
        // Fin d'analyse //


        $em->persist($comment);

        $em->flush();

        return new JsonResponse(json_decode($data), 200);

    }


    public function editAction($id, Request $request) // [PUT] /blog/comments/8
    {
        $comment = $this->getDoctrine()->getRepository("CryptoConseilsBlogBundle:Comment")->find($id);

        if (null === $comment) {
            return new Response("Comment not found", 404);
        }

        $data = json_decode($request->getContent(), true);
        $form = $this->createForm(EditCommentType::class, $comment);
        $form->submit($data);


        // Analyse si les conditions sur les champs sont respectées //
        $data_errors = $request->getContent();
        $category_errors = $this->get('jms_serializer')->deserialize($data_errors, 'CryptoConseils\BlogBundle\Entity\Comment', 'json');

        $errors = $this->get('validator')->validate($category_errors);

        if (count($errors)) {
            return new Response($errors, 400);
        }
        // Fin d'analyse //


        $em = $this->getDoctrine()->getManager();
        $em->persist($comment);
        $em->flush();

        return new JsonResponse($data, 200);
    }


    public function deleteAction($id) // [DELETE] /blog/comments/8
    {
        $comment = $this->getDoctrine()->getRepository('CryptoConseilsBlogBundle:Comment')->find($id);

        if (null === $comment) {
            return new JsonResponse("Comment not found", 404);
        }

        $em = $this->getDoctrine()->getManager();
        $em->remove($comment);
        $em->flush();

        return new JsonResponse("The delete was successful.", 200);
    }

}