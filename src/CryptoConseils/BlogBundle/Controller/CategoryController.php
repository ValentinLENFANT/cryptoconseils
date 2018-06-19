<?php
/**
 * Created by PhpStorm.
 * User: KFMJ2601
 * Date: 12/03/2018
 * Time: 16:05
 */

namespace CryptoConseils\BlogBundle\Controller;

use CryptoConseils\BlogBundle\Form\EditCategoryType;
use Symfony\Component\HttpFoundation\Request;
use CryptoConseils\BlogBundle\Entity\Category;
use Symfony\Component\HttpFoundation\JsonResponse;
use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Response;

class CategoryController extends FOSRestController
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

    public function indexAction() // [GET] /categories
    {
        $categories = $this->getDoctrine()->getRepository('CryptoConseilsBlogBundle:Category')->findAll();
        $data = $this->get('jms_serializer')->serialize($categories, 'json');

        $response = new Response($data);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }


    public function showAction(Category $id) // [GET] /categories/8
    {
        $data = $this->get('jms_serializer')->serialize($id, 'json');

        $response = new Response($data);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }


    public function newAction(Request $request) // [POST] /categories/new (ROLE_ADMIN ONLY)
    {
        // If user is not admin
        if (false === $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            return new JsonResponse("Access_denied, ADMIN authentication required", 403);
        }else{
            $data = $request->getContent();
            $category = $this->get('jms_serializer')->deserialize($data, 'CryptoConseils\BlogBundle\Entity\Category', 'json');


            // Analyse si les conditions sur les champs sont respectées //
            $errors = $this->get('validator')->validate($category);

            if (count($errors)) {
                return new Response($errors, 400);
            }
            // Fin d'analyse //


            $em = $this->getDoctrine()->getManager();
            $em->persist($category);
            $em->flush();
            $category = $this->get('jms_serializer')->serialize($category, 'json');
            return new JsonResponse(json_decode($category), 200);
        }
    }


    public function editAction($id, Request $request) // [PUT] /categories/8 (ROLE_ADMIN ONLY)
    {
        // If user is not admin
        if (false === $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            return new JsonResponse("Access_denied, ADMIN authentication required", 403);
        }else{
            $category = $this->getDoctrine()->getRepository('CryptoConseilsBlogBundle:Category')->find($id);

            if (null === $category) {
                return new Response("Category not found", 404);
            }

            $data = json_decode($request->getContent(), true);
            $form = $this->createForm(EditCategoryType::class, $category);
            $form->submit($data);


            // Analyse si les conditions sur les champs sont respectées //
            $data_errors = $request->getContent();
            $category_errors = $this->get('jms_serializer')->deserialize($data_errors, 'CryptoConseils\BlogBundle\Entity\Category', 'json');

            $errors = $this->get('validator')->validate($category_errors);

            if (count($errors)) {
                return new Response($errors, 400);
            }
            // Fin d'analyse //


            $em = $this->getDoctrine()->getManager();
            $em->persist($category);
            $em->flush();

            $category = $this->get('jms_serializer')->serialize($category, 'json');
            return new JsonResponse(json_decode($category), 200);
        }
    }

    public function deleteAction($id) // [DELETE] /categories/8 (ROLE_ADMIN ONLY)
    {
        // If user is not admin
        if (false === $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            return new JsonResponse("Access_denied, ADMIN authentication required", 403);
        }else{
            $category = $this->getDoctrine()->getRepository('CryptoConseilsBlogBundle:Category')->find($id);

            if (null === $category) {
                return new JsonResponse("Article not found", 404);
            }

            $em = $this->getDoctrine()->getManager();
            $em->remove($category);
            $em->flush();

            return new JsonResponse("The delete was successful.", 200);
        }
    }

}