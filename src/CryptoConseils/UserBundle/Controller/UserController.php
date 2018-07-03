<?php

/**
 * Created by PhpStorm.
 * User: alex
 * Date: 14/06/18
 * Time: 21:47
 */

namespace CryptoConseils\UserBundle\Controller;

use CryptoConseils\BlogBundle\Entity\Comment;
use CryptoConseils\UserBundle\Entity\User;
use CryptoConseils\UserBundle\Form\EditUserType;
use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use \PDO;


class UserController extends FOSRestController
{

    public function indexAction() // [GET] /users (ROLE_ADMIN ONLY)
    {
        // If user is not admin
        if (false === $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            return new JsonResponse(array('error' => 'Access denied! Authentication with ADMIN roles required'), 403);
        } else {
            $users = $this->getDoctrine()->getRepository('CryptoConseilsUserBundle:User')->findAll();
            $data = $this->get('jms_serializer')->serialize($users, 'json');

            $response = new Response($data);
            $response->headers->set('Content-Type', 'application/json');

            return $response;
        }
    }


    public function showAction(User $id) // [GET] /users/Alexandre (ROLE_ADMIN AND USER HIMSELF ONLY)
    {
        $userId = $this->getDoctrine()->getRepository("CryptoConseilsUserBundle:User")->find($id)->getUsername();

        if (null === $currentUserId = $this->getUser()) {
            return new JsonResponse(array('error' => 'Access denied! You need to login'), 403);
        }

        $currentUserId = $currentUserId->getUsername();


        // If user is not admin
        if (false === $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            // If the user logged in request himself
            if ($userId == $currentUserId) {
                $data = $this->get('jms_serializer')->serialize($id, 'json');

                $response = new Response($data);
                $response->headers->set('Content-Type', 'application/json');

                return $response;
            } else {
                return new JsonResponse(array('error' => 'Access denied! This user is not you'), 403);
            }
        } else {
            $data = $this->get('jms_serializer')->serialize($id, 'json');

            $response = new Response($data);
            $response->headers->set('Content-Type', 'application/json');

            return $response;
        }
    }

    public function showUserCommentsByUsernameAction($username) // [GET] /users/comments/username/{username}
    {
        try {
            $bdd = new PDO('mysql:host=localhost;dbname=cryptoconseils;charset=utf8', 'root', '');
        } catch (Exception $e) {
            die('Erreur : ' . $e->getMessage());
        }
        $reponse = $bdd->query('SELECT * FROM comment');
        $comments = array();
        while ($donnees = $reponse->fetch()) {
            if ($donnees['author'] == $username) {
                $comments[] = ['id' => $donnees['id'],
                    'article_id' => $donnees['article_id'],
                    'author' => $donnees['author'],
                    'content' => $donnees['content'],
                    'date' => $donnees['date'],
                    'user_id' => $donnees['user_id']];
            }
        }
        $data = $this->get('jms_serializer')->serialize($comments, 'json');

        $response = new Response($data);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    public function showUserCommentsByIdAction($id) // [GET] /users/comments/id/{id}
    {
        try {
            $bdd = new PDO('mysql:host=localhost;dbname=cryptoconseils;charset=utf8', 'root', '');
        } catch (Exception $e) {
            die('Erreur : ' . $e->getMessage());
        }
        $reponse = $bdd->query('SELECT * FROM comment');
        $comments = array();
        while ($donnees = $reponse->fetch()) {
            if ($donnees['user_id'] == $id) {
                $comments[] = ['id' => $donnees['id'],
                    'article_id' => $donnees['article_id'],
                    'author' => $donnees['author'],
                    'content' => $donnees['content'],
                    'date' => $donnees['date'],
                    'user_id' => $donnees['user_id']];
            }
        }
        $data = $this->get('jms_serializer')->serialize($comments, 'json');

        $response = new Response($data);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
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

        $password = password_hash($user->getPassword(), PASSWORD_BCRYPT);
        $user->setPassword($password);
        $user->setPremiumLevel(1);
        $user->setEnabled(true);


        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();

        return new JsonResponse(json_decode($data), 200);
    }


    public function editAction(User $id, Request $request) // [PUT] /users/8
    {
        $users = $this->getDoctrine()->getRepository('CryptoConseilsUserBundle:User')->find($id);

        if (null === $users) {
            return new JsonResponse(array('error' => 'User not found'), 404);
        }

        $userId = $this->getDoctrine()->getRepository("CryptoConseilsUserBundle:User")->find($id)->getUsername();

        if (null === $currentUserId = $this->getUser()) {
            return new JsonResponse(array('error' => 'Access denied! You need to login'), 403);
        }

        $currentUserId = $currentUserId->getUsername();
        $email = $users->getEmail();
        $enabled = $users->isEnabled();
        $password = $users->getPassword();
        $premium = $users->getPremiumLevel();

        // If user is not admin
        if (false === $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            // If the user logged in request himself
            if ($userId == $currentUserId) {

                $data = json_decode($request->getContent(), true);


                // If json data is empty
                if (empty($data)) {
                    return new JsonResponse(array('error' => 'No data sent to modify this article'), 403);
                }

                // If username is NULL
                if (!isset($data['username'])) {
                    $users->setUsername($userId);
                } else {
                    $users->setUsername($data['username']);
                }

                // If email is NULL
                if (!isset($data['email'])) {
                    $users->setEmail($email);
                } else {
                    $users->setEmail($data['email']);
                }

                // If enabled is NULL
                if (!isset($data['enabled'])) {
                    $users->setEnabled($enabled);
                } else {
                    $users->setEnabled($data['enabled']);
                }

                // If password is NULL
                if (!isset($data['password'])) {
                    $users->setPassword($password);
                } else {
                    $users->setPassword(password_hash($data['password'], PASSWORD_BCRYPT));
                }

                // If premium is NULL
                if (!isset($data['premiumLevel'])) {
                    $users->setPremiumLevel($premium);
                } else {
                    $users->setPremiumLevel($data['premiumLevel']);
                }


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
            } else {
                return new JsonResponse(array('error' => 'Access denied! This user is not you'), 403);
            }
        } else {
            $data = json_decode($request->getContent(), true);


            // If json data is empty
            if (empty($data)) {
                return new JsonResponse(array('error' => 'No data sent to modify this article'), 403);
            }

            // If username is NULL
            if (!isset($data['username'])) {
                $users->setUsername($userId);
            } else {
                $users->setUsername($data['username']);
            }

            // If email is NULL
            if (!isset($data['email'])) {
                $users->setEmail($email);
            } else {
                $users->setEmail($data['email']);
            }

            // If enabled is NULL
            if (!isset($data['enabled'])) {
                $users->setEnabled($enabled);
            } else {
                $users->setEnabled($data['enabled']);
            }

            // If password is NULL
            if (!isset($data['password'])) {
                $users->setPassword($password);
            } else {
                $users->setPassword(password_hash($data['password'], PASSWORD_BCRYPT));
            }

            // If premium is NULL
            if (!isset($data['premiumLevel'])) {
                $users->setPremiumLevel($premium);
            } else {
                $users->setPremiumLevel($data['premiumLevel']);
            }


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


    public function deleteAction(User $id) // [DELETE] /users/8 (ROLE_ADMIN ONLY)
    {
        // If user is not admin
        if (false === $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            return new JsonResponse(array('error' => 'Access denied! Authentication with ADMIN roles required'), 403);
        } else {
            $users = $this->getDoctrine()->getRepository('CryptoConseilsUserBundle:User')->find($id);

            if (null === $users) {
                return new JsonResponse(array('error' => 'User not found'), 404);
            }

            $em = $this->getDoctrine()->getManager();
            $em->remove($users);
            $em->flush();

            return new JsonResponse(array('success' => 'User deleted'), 200);
        }
    }
}