<?php
/**
 * Created by PhpStorm.
 * User: KFMJ2601
 * Date: 12/03/2018
 * Time: 16:05
 */

namespace CryptoConseils\BlogBundle\Controller;

use CryptoConseils\BlogBundle\Form\EditImageType;
use Symfony\Component\HttpFoundation\Request;
use CryptoConseils\BlogBundle\Entity\Image;
use Symfony\Component\HttpFoundation\JsonResponse;
use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Response;

class ImageController extends FOSRestController
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

    public function indexAction() // [GET] /images
    {
        $images = $this->getDoctrine()->getRepository('CryptoConseilsBlogBundle:Image')->findAll();
        $data = $this->get('jms_serializer')->serialize($images, 'json');

        $response = new Response($data);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }


    public function showAction(Image $id) // [GET] /images/8
    {
        $data = $this->get('jms_serializer')->serialize($id, 'json');

        $response = new Response($data);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }


    public function newAction(Request $request) // [POST] /images/new (ROLE_ADMIN ONLY)
    {
        // If user is not admin
        if (false === $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            return new JsonResponse(array('error' => 'Access denied! Authentication with ADMIN roles required'), 403);
        }else{
            $data = $request->getContent();
            $image = $this->get('jms_serializer')->deserialize($data, 'CryptoConseils\BlogBundle\Entity\Image', 'json');


            // Analyse si les conditions sur les champs sont respectées //
            $errors = $this->get('validator')->validate($image);

            if (count($errors)) {
                return new Response($errors, 400);
            }
            // Fin d'analyse //


            $em = $this->getDoctrine()->getManager();
            $em->persist($image);
            $em->flush();

            $image = $this->get('jms_serializer')->serialize($image, 'json');
            return new JsonResponse(json_decode($image), 200);
        }
    }


    public function editAction($id, Request $request) // [PUT] /images/8 (ROLE_ADMIN ONLY)
    {
        // If user is not admin
        if (false === $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            return new JsonResponse(array('error' => 'Access denied! Authentication with ADMIN roles required'), 403);
        }else{
            $image = $this->getDoctrine()->getRepository('CryptoConseilsBlogBundle:Image')->find($id);

            if (null === $image) {
                return new JsonResponse(array('error' => 'Image not found'), 404);
            }

            $url = $image->getUrl();
            $alt = $image->getAlt();

            $data = json_decode($request->getContent(), true);


            // If json data is empty
            if(empty($data)){
                return new JsonResponse(array('error' => 'No data sent to modify this image'), 403);
            }

            // If url is NULL
            if (!isset($data['url'])) {
                $image->setUrl($url);
            }else{
                $image->setUrl($data['url']);
            }

            // If alt is NULL
            if (!isset($data['alt'])) {
                $image->setAlt($alt);
            }else{
                $image->setAlt($data['alt']);
            }





            $form = $this->createForm(EditImageType::class, $image);
            $form->submit($data);


            // Analyse si les conditions sur les champs sont respectées //
            $data_errors = $request->getContent();
            $image_errors = $this->get('jms_serializer')->deserialize($data_errors, 'CryptoConseils\BlogBundle\Entity\Image', 'json');

            $errors = $this->get('validator')->validate($image_errors);

            if (count($errors)) {
                return new Response($errors, 400);
            }
            // Fin d'analyse //


            $em = $this->getDoctrine()->getManager();
            $em->persist($image);
            $em->flush();

            $image = $this->get('jms_serializer')->serialize($image, 'json');
            return new JsonResponse(json_decode($image), 200);
        }
    }


    public function deleteAction($id) // [DELETE] /images/8 (ROLE_ADMIN ONLY)
    {
        // If user is not admin
        if (false === $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            return new JsonResponse(array('error' => 'Access denied! Authentication with ADMIN roles required'), 403);
        }else{
            $image = $this->getDoctrine()->getRepository('CryptoConseilsBlogBundle:Image')->find($id);

            if (null === $image) {
                return new JsonResponse(array('error' => 'Image not found'), 404);
            }

            $em = $this->getDoctrine()->getManager();
            $em->remove($image);
            $em->flush();

            return new JsonResponse(array('success' => 'Image deleted'), 200);
        }
    }
}