<?php
/**
 * Created by PhpStorm.
 * User: KFMJ2601
 * Date: 12/03/2018
 * Time: 16:05
 */

namespace CryptoConseils\BlogBundle\Controller;

use CryptoConseils\BlogBundle\Form\EditArticleType;
use Symfony\Component\HttpFoundation\Request;
use CryptoConseils\BlogBundle\Entity\Article;
use Symfony\Component\HttpFoundation\JsonResponse;
use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Response;

class ArticleController extends FOSRestController
{


   /* public function indexAction($page)
    {
        if ($page < 1) {
            throw new NotFoundHttpException("Page " . $page . " inexistante.");
        }

        //Nombre d'articles par page
        $nbPerPage = 3;

        $listArticles = $this->getDoctrine()->getManager()->getRepository('CryptoConseilsBlogBundle:Article')->getArticles($page, $nbPerPage);

        $nbPages = ceil(count($listArticles) / $nbPerPage);

        if ($page > $nbPages) {
            throw $this->createNotFoundException("La page " . $page . " n'existe pas.");
        }

        return $this->render('CryptoConseilsBlogBundle:Article:index.html.twig', array(
            'listArticles' => $listArticles,
            'nbPages' => $nbPages,
            'page' => $page,
        ));
    }
   */

   /* public function viewAction($id)
    {
        $em = $this->getDoctrine()->getManager();
        $article = $em->getRepository("CryptoConseilsBlogBundle:Article")->find($id);

        if (null === $article) {
            throw new NotFoundHttpException("L'article d'id" . $id . "n'existe pas");
        }

        $listComments = $em->getRepository('CryptoConseilsBlogBundle:Comment')->findBy(array('article' => $article));

        return $this->render('CryptoConseilsBlogBundle:Article:view.html.twig', array(
            'article' => $article,
            'listComments' => $listComments
        ));
    }*/

    /**
     * @Security("has_role('ROLE_AUTEUR')")
     */
    /*public function addAction(Request $request)
    {
        //Si l'on n'avait pas utilisé l'annontation au-dessus il aurait fallu mettre ces lignes de code
//        if (!$this->get('security.authorization_checker')->isGranted('ROLE_AUTEUR')) {
//            throw new AccessDeniedException('Accès limité aux auteurs.');
//        }

        $article = new Article();

        // Création du form builder
        //$form = $this->get('form.factory')->create(ArticleType::class, $article);
        $form = $this->createForm(ArticleType::class, $article);

        if ($request->isMethod('POST') && $form->handleRequest($request)->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($article);
            $em->flush();

            $request->getSession()->getFlashBag()->add('notice', 'Annonce bien enregistrée');

            return $this->redirectToRoute('cryptoconseils_blog_view', array('id' => $article->getId()));
        }

        return $this->render('CryptoConseilsBlogBundle:Article:add.html.twig',
            array('form' => $form->createView()));
    }*/

    /*public function editAction($id, Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $article = $em->getRepository('CryptoConseilsBlogBundle:Article')->find($id);

        $form = $this->createForm(EditArticleType::class, $article);

        if (null === $article) {
            throw new NotFoundHttpException("L'article d'id " . $id . " n'existe pas.");
        }

        if ($request->isMethod('POST') && $form->handleRequest($request)->isValid()) {
            $em->persist($article);
            $em->flush();
            $request->getSession()->getFlashBag()->add('notice', 'Article modifié');

            return $this->redirectToRoute('cryptoconseils_blog_view', array('id' => $article->getId()));
        }

        return $this->render('CryptoConseilsBlogBundle:Article:edit.html.twig',
            array('article' => $article, 'form' => $form->createView()));

    }*/

   /* public function deleteAction(Request $request, $id)
    {
        $em = $this->getDoctrine()->getManager();

        $article = $em->getRepository('CryptoConseilsBlogBundle:Article')->find($id);

        if (null === $article) {
            throw new NotFoundHttpException("L'article d'id " . $id . " n'existe pas.");
        }

        $form = $this->get('form.factory')->create();
        if($request->isMethod('POST') && $form->handleRequest($request)->isValid()) {
            $em->remove($article);
            $em->flush();

            $request->getSession()->getFlashBag()->add('info', "L'annonce a bien été supprimée.");

            return $this->redirectToRoute('cryptoconseils_blog_home');
        }

        return $this->render('CryptoConseilsBlogBundle:Article:delete.html.twig', array(
            'article' => $article,
            'form' => $form->createView(),
        ));
    }*/

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

    public function indexAction() // [GET] /blog/articles
    {
        $articles = $this->getDoctrine()->getRepository('CryptoConseilsBlogBundle:Article')->findAll();
        $data = $this->get('jms_serializer')->serialize($articles, 'json');

        $response = new Response($data);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }


    public function showAction(Article $id) // [GET] /blog/articles/8
    {
        $data = $this->get('jms_serializer')->serialize($id, 'json');

        $response = new Response($data);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }


    public function newAction(Request $request) // [POST] /blog/articles/new
    {
        $data = $request->getContent();
        $article = $this->get('jms_serializer')->deserialize($data, 'CryptoConseils\BlogBundle\Entity\Article', 'json');


        // Analyse si les conditions sur les champs sont respectées //
        $errors = $this->get('validator')->validate($article);

        if (count($errors)) {
            return new Response($errors, 400);
        }
        // Fin d'analyse //


        $em = $this->getDoctrine()->getManager();
        $em->persist($article);
        $em->flush();

        return new JsonResponse(json_decode($data), 200);
    }


    public function editAction($id, Request $request) // [PUT] /blog/articles/8
    {
        $article = $this->getDoctrine()->getRepository('CryptoConseilsBlogBundle:Article')->find($id);

        if (null === $article) {
            return new Response("Article not found", 404);
        }

        $data = json_decode($request->getContent(), true);
        $form = $this->createForm(EditArticleType::class, $article);
        $form->submit($data);


        // Analyse si les conditions sur les champs sont respectées //
        $data_errors = $request->getContent();
        $article_errors = $this->get('jms_serializer')->deserialize($data_errors, 'CryptoConseils\BlogBundle\Entity\Article', 'json');

        $errors = $this->get('validator')->validate($article_errors);

        if (count($errors)) {
            return new Response($errors, 400);
        }
        // Fin d'analyse //


        $em = $this->getDoctrine()->getManager();
        $em->persist($article);
        $em->flush();

        return new JsonResponse($data, 200);
    }


    public function deleteAction($id) // [DELETE] /blog/articles/8
    {
        $article = $this->getDoctrine()->getRepository('CryptoConseilsBlogBundle:Article')->find($id);

        if (null === $article) {
            return new JsonResponse("Article not found", 404);
        }

            $em = $this->getDoctrine()->getManager();
            $em->remove($article);
            $em->flush();

        return new JsonResponse("The delete was successful.", 200);
    }
}