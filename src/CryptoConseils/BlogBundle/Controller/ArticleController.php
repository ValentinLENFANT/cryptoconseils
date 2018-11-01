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
        if (null === $this->getUser()) {
            $articles = $this->getDoctrine()->getRepository('CryptoConseilsBlogBundle:Article')->findByArticlePublishedAndPremium(1, 0);
            $data = $this->get('jms_serializer')->serialize($articles, 'json');

            $response = new Response($data);
            $response->headers->set('Content-Type', 'application/json');

            if (null == $articles) {
                return new JsonResponse(array('error' => 'No articles found for your premium level'), 404);
            }

            return $response;
        }

        $currentUserLevel = $this->getUser()->getPremiumLevel();
        $articles = $this->getDoctrine()->getRepository('CryptoConseilsBlogBundle:Article')->findByArticlePublishedAndPremium(1, $currentUserLevel);

        $data = $this->get('jms_serializer')->serialize($articles, 'json');

        $response = new Response($data);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    public function allArticlesAction() // [GET] /articles
    {
        $articles = $this->getDoctrine()->getRepository('CryptoConseilsBlogBundle:Article')->findAll();
        $data = $this->get('jms_serializer')->serialize($articles, 'json');

        $response = new Response($data);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }


    public function showAction(Article $id) // [GET] /articles/8
    {
        if ($id->getPublished() == 1) {
            if ($id->getPremium() > 0) //si l'article n'est pas de niveau 0 il faut obligatoirement être au moins connecté
            {
                if (null === $this->getUser()) { //On vérifie si l'utilisateur est connecté
                    return new JsonResponse(array('error' => 'Access denied! You need to login'), 403);
                }
                $currentUserLevel = $this->getUser()->getPremiumLevel(); //On récupère le niveau de l'utilisateur

                if ($currentUserLevel >= $id->getPremium() || $id->getPremium() == 0) {
                    $data = $this->get('jms_serializer')->serialize($id, 'json');

                    $response = new Response($data);
                    $response->headers->set('Content-Type', 'application/json');

                    return $response;
                } else {
                    return new JsonResponse(array(
                      'error' => "Access denied ! Vous n'êtes pas à un niveau premium assez élevé",
                      'userPremiumLevel' => $currentUserLevel,
                      'articlePremiumLevel' => $id->getPremium()
                    ), 403);
                }
            } else {
                $data = $this->get('jms_serializer')->serialize($id, 'json');

                $response = new Response($data);
                $response->headers->set('Content-Type', 'application/json');

                return $response;
            }
        } else {
            return new JsonResponse(array('error' => "L'article auquel vous tenté d'accéder à été supprimé."), 404);
        }
    }


    public function show_by_categoryAction($category) // [GET] /articles/Airdrop
    {
        if (null === $this->getUser()) {
            $articles = $this->getDoctrine()->getRepository('CryptoConseilsBlogBundle:Article')->findByArticleCategory($category, 0);
            $data = $this->get('jms_serializer')->serialize($articles, 'json');

            $response = new Response($data);
            $response->headers->set('Content-Type', 'application/json');

            if (null == $articles) {
                return new JsonResponse(array('error' => 'No articles found for your premium level'), 404);
            }

            return $response;
        } else {

            $currentUserLevel = $this->getUser()->getPremiumLevel();

            $articles = $this->getDoctrine()->getRepository('CryptoConseilsBlogBundle:Article')->findByArticleCategory($category, $currentUserLevel);
            $data = $this->get('jms_serializer')->serialize($articles, 'json');

            $response = new Response($data);
            $response->headers->set('Content-Type', 'application/json');

            if (null == $articles) {
                return new JsonResponse(array('error' => 'No articles found for this category'), 404);
            }

            return $response;
        }
    }

    public function show_by_newestAction($number) // [GET] /articles/newest/3
    {
        if (null === $this->getUser()) {
            $articles = $this->getDoctrine()->getRepository('CryptoConseilsBlogBundle:Article')->findByArticleNewest(0, $number);
            $data = $this->get('jms_serializer')->serialize($articles, 'json');

            $response = new Response($data);
            $response->headers->set('Content-Type', 'application/json');

            if (null == $articles) {
                return new JsonResponse(array('error' => 'No articles found for your premium level'), 404);
            }

            return $response;
        }

        $currentUserLevel = $this->getUser()->getPremiumLevel();
        $articles = $this->getDoctrine()->getRepository('CryptoConseilsBlogBundle:Article')->findByArticleNewest($currentUserLevel, $number);

        $data = $this->get('jms_serializer')->serialize($articles, 'json');

        $response = new Response($data);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
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
            if (null === $article->getImageLink()) {
                return new JsonResponse(array('error' => 'image link required'), 403);
            }
//            else {
//                $image = $em->getRepository("CryptoConseilsBlogBundle:Image")->find($article->getImageId());
//                $article->setImage($image);
//            }

            // If title is NULL
            if (null === $article->getTitle()) {
                return new JsonResponse(array('error' => 'title required'), 403);
            }

            // If content is NULL
            if (null === $article->getContent()) {
                return new JsonResponse(array('error' => 'content required'), 403);
            }

            // If premium is NULL
            if (null === $article->getPremium()) {
                return new JsonResponse(array('error' => 'Premium number required'), 403);
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
            $content = $article->getContent();
            $title = $article->getTitle();
            $premium = $article->getpremium();
            $published = $article->getpublished();

            $data = json_decode($request->getContent(), true);

            // If json data is empty
            if (empty($data)) {
                return new JsonResponse(array('error' => 'No data sent to modify this article'), 403);
            }

            // If content is NULL
            if (!isset($data['content'])) {
                $article->setContent($content);
            } else {
                $article->setContent($data['content']);
            }

            // If title is NULL
            if (!isset($data['title'])) {
                $article->setTitle($title);
            } else {
                $article->setTitle($data['title']);
            }

            // If premium is NULL
            if (!isset($data['premium'])) {
                $article->setPremium($premium);
            } else {
                $article->setPremium($data['premium']);
            }

            // If image_id is NULL
//            if (!isset($data['image_id'])) {
//                $image = $em->getRepository("CryptoConseilsBlogBundle:Image")->find($article->getImageId());
//                $article->setImage($image);
//            } else {
//                $image = $em->getRepository("CryptoConseilsBlogBundle:Image")->find($data['image_id']);
//                $article->setImage($image);
//            }

            // If image_id is NULL
            if (!isset($data['published'])) {

                $article->setpublished($published);
            } else {

                $article->setpublished($data['published']);
            }

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
            $article->setPublished(0);
            $em->persist($article);
            $em->flush();

            return new JsonResponse(array('success' => 'Article deleted'), 200);
        }
    }
}
