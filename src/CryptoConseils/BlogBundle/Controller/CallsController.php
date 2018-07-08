<?php
/**
 * Created by PhpStorm.
 * User: Valentin LENFANT
 * Date: 05/07/2018
 * Time: 19:51
 */

namespace CryptoConseils\BlogBundle\Controller;

use CryptoConseils\BlogBundle\Form\EditArticleType;
use CryptoConseils\UserBundle\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\DependencyInjection\Tests\Compiler\J;
use Symfony\Component\Finder\Exception\AccessDeniedException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use CryptoConseils\BlogBundle\Entity\Calls;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\Validator\ConstraintViolationList;
use Symfony\Component\HttpFoundation\Response;
use CryptoConseils\BlogBundle\Repository\CallsRepository;
use \PDO;

class CallsController extends FOSRestController
{
    public function newAction(Request $request) // [POST] /call/new/  (ROLE_ADMIN ONLY)
    {
        // If user is not admin
        if (false === $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            return new JsonResponse(array('error' => 'Access denied! Authentication with ADMIN roles required'), 403);
        } else {
            $data = $request->getContent();
            $data = json_decode($data);

            if (null === $data->cryptocurrencyPair) {
                return new JsonResponse(array('error' => 'Cryptocurrency pair is required'), 403);
            }

            if (null === $data->cryptocurrencyName) {
                return new JsonResponse(array('error' => 'Cryptocurrency name is required'), 403);
            }

            if (null === $data->author) {
                return new JsonResponse(array('error' => 'Author name is required'), 403);
            }

            if (null === $data->content) {
                return new JsonResponse(array('error' => 'Content of the call is required'), 403);
            }

            if (null === $data->buyPrice) {
                return new JsonResponse(array('error' => 'Buy price is required'), 403);
            }

            if (null === $data->sellPrice) {
                return new JsonResponse(array('error' => 'Sell price is required'), 403);
            }

            if (null === $data->scoring) {
                return new JsonResponse(array('error' => 'Scoring is required'), 403);
            }

            $call = $this->get('jms_serializer')->deserialize(json_encode($data), 'CryptoConseils\BlogBundle\Entity\Calls', 'json');

            $call->setCryptocurrencyPair($data->cryptocurrencyPair);
            $call->setCryptocurrencyName($data->cryptocurrencyName);
            $call->setAuthor($data->author);
            $call->setContent($data->content);
            $call->setBuyPrice($data->buyPrice);
            $call->setSellPrice($data->sellPrice);
            $call->setScoring($data->scoring);
            $call->setDate(new \DateTime('now'));


            // Analyse si les conditions sur les champs sont respectées //
            $errors = $this->get('validator')->validate($call);

            if (count($errors)) {
                return new Response($errors, 400);
            } // Fin d'analyse //


            $em = $this->getDoctrine()->getManager();
            $em->persist($call);
            $em->flush();
            $call = $this->get('jms_serializer')->serialize($call, 'json');
            return new JsonResponse(json_decode($call), 200);
        }
    }

    public function allCallsAction() // [GET] call/
    {
        if (false === $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            return new JsonResponse(array('error' => 'Access denied! Authentication with ADMIN roles required'), 403);
        } else {
            try {
                $bdd = new PDO('mysql:host='.$this->container->getParameter('database_host').';dbname='.$this->container->getParameter('database_name').';charset=utf8', $this->container->getParameter('database_user'), $this->container->getParameter('database_password'));
            } catch (Exception $e) {
                die('Erreur : ' . $e->getMessage());
            }
            $reponse = $bdd->query('SELECT * FROM calls');
            while ($donnees = $reponse->fetch()) {
                    $calls[] = ['id' => $donnees['id'],
                        'author' => $donnees['author'],
                        'date' => $donnees['date'],
                        'cryptocurrencyPair' => $donnees['cryptocurrencyPair'],
                        'cryptocurrencyName' => $donnees['cryptocurrencyName'],
                        'content' => $donnees['content'],
                        'buyPrice' => $donnees['buyPrice'],
                        'sellPrice' => $donnees['sellPrice'],
                        'scoring' => $donnees['scoring']];
            }
            $data = $this->get('jms_serializer')->serialize($calls, 'json');

            $response = new Response($data);
            $response->headers->set('Content-Type', 'application/json');

            return $response;
        }
    }

    public function callAction(Request $request, $id) // [GET] /call/{id}
    {
        $user = $this->getUser();
        if ($user->getPremiumLevel() < 4)
        {
            return new JsonResponse(array('error' => 'You can not get the article. You do not have the premium level needed.'), 403);
        }
//        if (false === $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
//            return new JsonResponse(array('error' => 'Access denied! Authentication with ADMIN roles required'), 403);
//        } else {
            try {
                $bdd = new PDO('mysql:host='.$this->container->getParameter('database_host').';dbname='.$this->container->getParameter('database_name').';charset=utf8', $this->container->getParameter('database_user'), $this->container->getParameter('database_password'));
            } catch (Exception $e) {
                die('Erreur : ' . $e->getMessage());
            }
            $data = $request->getContent();
            $data = json_decode($data);
            $response = $bdd->query('SELECT * FROM calls WHERE id='.$id);

            while ($donnees = $response->fetch()) {
                $call[] = ['id' => $donnees['id'],
                    'author' => $donnees['author'],
                    'date' => $donnees['date'],
                    'cryptocurrencyPair' => $donnees['cryptocurrencyPair'],
                    'cryptocurrencyName' => $donnees['cryptocurrencyName'],
                    'content' => $donnees['content'],
                    'buyPrice' => $donnees['buyPrice'],
                    'sellPrice' => $donnees['sellPrice'],
                    'scoring' => $donnees['scoring']];
            }
            if(!isset($call))
            {
                return new JsonResponse(array('error' => 'The call does not exist'), 404);
            }
            $data = $this->get('jms_serializer')->serialize($call, 'json');

            $response = new Response($data);
            $response->headers->set('Content-Type', 'application/json');

            return $response;
//        }
    }

    public function deleteAction($id) // [DELETE] /call/delete/{id} (ROLE_ADMIN ONLY)
    {
        // If user is not admin
        if (false === $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            return new JsonResponse(array('error' => 'Access denied! Authentication with ADMIN roles required'), 403);
        } else {
            try {
                $bdd = new PDO('mysql:host=' . $this->container->getParameter('database_host') . ';dbname=' . $this->container->getParameter('database_name') . ';charset=utf8', $this->container->getParameter('database_user'), $this->container->getParameter('database_password'));
            } catch (Exception $e) {
                die('Erreur : ' . $e->getMessage());
            }

            $response = $bdd->exec('DELETE FROM calls WHERE id=' . $id);

            if (0 === $response) {
                return new JsonResponse(array('error' => 'Call not found'), 404);
            }

            return new JsonResponse(array('success' => 'Call deleted'), 200);
        }
    }
}