<?php

/**
 * Created by PhpStorm.
 * User: alex
 * Date: 14/06/18
 * Time: 21:47
 */
namespace CryptoConseils\UserBundle\Controller;

use CryptoConseils\UserBundle\Entity\User;
use CryptoConseils\UserBundle\Form\EditUserType;
use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;


class UserController extends FOSRestController
{

    public function indexAction() // [GET] /users (ROLE_ADMIN ONLY)
    {
        // If user is not admin
        if (false === $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            return new JsonResponse("Access_denied, ADMIN authentication required", 403);
        }else{
            $users = $this->getDoctrine()->getRepository('CryptoConseilsUserBundle:User')->findAll();
            $data = $this->get('jms_serializer')->serialize($users, 'json');

            $response = new Response($data);
            $response->headers->set('Content-Type', 'application/json');

            return $response;
        }
    }


    public function showAction(User $id) // [GET] /users/8 (ROLE_ADMIN AND USER HIMSELF ONLY)
    {
        $userId = $this->getDoctrine()->getRepository("CryptoConseilsUserBundle:User")->find($id)->getId();

        if (null === $currentUserId = $this->getUser()) {
            return new Response("Access_denied, you need to log in", 403);
        }

        $currentUserId = $currentUserId->getId();


        // If user is not admin
        if (false === $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            // If the user logged in request himself
            if ($userId == $currentUserId){
                $data = $this->get('jms_serializer')->serialize($id, 'json');

                $response = new Response($data);
                $response->headers->set('Content-Type', 'application/json');

                return $response;
            }else{
                return new JsonResponse("Access_denied, this is not you", 403);
            }
        }else{
            $data = $this->get('jms_serializer')->serialize($id, 'json');

            $response = new Response($data);
            $response->headers->set('Content-Type', 'application/json');

            return $response;
        }
    }


    public function newAction(Request $request) // [POST] /users/new
    {
        $data = $request->getContent();
        $user = $this->get('jms_serializer')->deserialize($data, 'CryptoConseils\UserBundle\Entity\User', 'json');


        // Analyse si les conditions sur les champs sont respectées //
        $errors = $this->get('validator')->validate($user);

        if (count($errors)) {
            return new Response($errors, 400);
        }
        // Fin d'analyse //


        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();

        return new JsonResponse(json_decode($data), 200);
    }


    public function editAction($id, Request $request) // [PUT] /users/8
    {
        $users = $this->getDoctrine()->getRepository('CryptoConseilsUserBundle:User')->find($id);

        if (null === $users) {
            return new Response("User not found", 404);
        }

        $userId = $this->getDoctrine()->getRepository("CryptoConseilsUserBundle:User")->find($id)->getId();

        if (null === $currentUserId = $this->getUser()) {
            return new Response("Access_denied, you need to log in", 403);
        }

        $currentUserId = $currentUserId->getId();

        // If user is not admin
        if (false === $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            // If the user logged in request himself
            if ($userId == $currentUserId){

                $data = json_decode($request->getContent(), true);
                $form = $this->createForm(EditUserType::class, $users);
                $form->submit($data);


                // Analyse si les conditions sur les champs sont respectées //
                $data_errors = $request->getContent();
                $users_errors = $this->get('jms_serializer')->deserialize($data_errors, 'CryptoConseils\UserBundle\Entity\User', 'json');

                $errors = $this->get('validator')->validate($users_errors);

                if (count($errors)) {
                    return new Response($errors, 400);
                }
                // Fin d'analyse //


                $em = $this->getDoctrine()->getManager();
                $em->persist($users);
                $em->flush();

                return new JsonResponse($data, 200);
            }else{
                return new JsonResponse("Access_denied, this is not you", 403);
            }
        }else{
            $data = json_decode($request->getContent(), true);
            $form = $this->createForm(EditUserType::class, $users);
            $form->submit($data);


            // Analyse si les conditions sur les champs sont respectées //
            $data_errors = $request->getContent();
            $users_errors = $this->get('jms_serializer')->deserialize($data_errors, 'CryptoConseils\UserBundle\Entity\User', 'json');

            $errors = $this->get('validator')->validate($users_errors);

            if (count($errors)) {
                return new Response($errors, 400);
            }
            // Fin d'analyse //


            $em = $this->getDoctrine()->getManager();
            $em->persist($users);
            $em->flush();

            return new JsonResponse($data, 200);
        }
    }


    public function deleteAction($id) // [DELETE] /users/8 (ROLE_ADMIN ONLY)
    {
        // If user is not admin
        if (false === $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            return new JsonResponse("Access_denied, ADMIN authentication required", 403);
        }else{
            $users = $this->getDoctrine()->getRepository('CryptoConseilsUserBundle:User')->find($id);

            if (null === $users) {
                return new JsonResponse("User not found", 404);
            }

            $em = $this->getDoctrine()->getManager();
            $em->remove($users);
            $em->flush();

            return new JsonResponse("The delete was successful.", 200);
        }
    }
}