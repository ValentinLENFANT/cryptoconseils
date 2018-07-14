<?php
/**
 * Created by PhpStorm.
 * User: Valentin LENFANT
 * Date: 12/07/2018
 * Time: 11:03
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

class AirdropController extends FOSRestController
{
    public function newAction(Request $request) // [POST] /airdrop/new/  (ROLE_ADMIN ONLY)
    {
        // If user is not admin
        if (false === $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            return new JsonResponse(array('error' => 'Access denied! Authentication with ADMIN roles required'), 403);
        } else {
            $data = $request->getContent();
            $data = json_decode($data);

            if (null === $data->author) {
                return new JsonResponse(array('error' => 'Author name is required'), 403);
            }

            if (null === $data->type) {
                return new JsonResponse(array('error' => 'Type of the airdrop is required'), 403);
            }

            if (null === $data->cryptocurrencyName) {
                return new JsonResponse(array('error' => 'The cryptocurrency name is required'), 403);
            }

            if (null === $data->content) {
                return new JsonResponse(array('error' => 'Content of the airdrop is required'), 403);
            }

            if (null === $data->reward) {
                return new JsonResponse(array('error' => 'Reward cannot be null.'), 403);
            }

            if (null === $data->imageId) {
                return new JsonResponse(array('error' => 'Image_id cannot be null.'), 403);
            }

            $airdrop = $this->get('jms_serializer')->deserialize(json_encode($data), 'CryptoConseils\BlogBundle\Entity\Airdrop', 'json');

            $airdrop->setAuthor($data->author);
            if (isset($data->beginDate)) {
                $airdrop->setBeginDate($data->beginDate);
            } else {
                $airdrop->setBeginDate(new \DateTime());
            }
            if (isset($data->endDate)) {
                $airdrop->setBeginDate($data->endDate);
            } else {
                $airdrop->setEndDate(new \DateTime());
            }
            $airdrop->setType($data->type);
            $airdrop->setCryptocurrencyName($data->cryptocurrencyName);
            $airdrop->setContent($data->content);
            if (null === $data->isAirdropFree) {
                $airdrop->setIsAirdropFree(0);
            } else {
                $airdrop->setIsAirdropFree($data->isAirdropFree);
            }
            $airdrop->setReward($data->reward);
            $airdrop->setImageId($data->imageId);


            // Analyse si les conditions sur les champs sont respectées //
            $errors = $this->get('validator')->validate($airdrop);

            if (count($errors)) {
                return new Response($errors, 400);
            } // Fin d'analyse //

            $em = $this->getDoctrine()->getManager();
            $em->persist($airdrop);
            $em->flush();
            $airdrop = $this->get('jms_serializer')->serialize($airdrop, 'json');
            return new JsonResponse(json_decode($airdrop), 200);
        }
    }

    public function allAirdropsAction() // [GET] airdrop/all
    {
        try {
            $bdd = new PDO('mysql:host=' . $this->container->getParameter('database_host') . ';dbname=' . $this->container->getParameter('database_name') . ';charset=utf8', $this->container->getParameter('database_user'), $this->container->getParameter('database_password'));
        } catch (Exception $e) {
            die('Erreur : ' . $e->getMessage());
        }



          $reponse = $bdd->query('SELECT * FROM airdrop');
          while ($donnees = $reponse->fetch()) {
              $airdrops[] = ['id' => $donnees['id'],
                  'author' => $donnees['author'],
                  'beginDate' => $donnees['beginDate'],
                  'endDate' => $donnees['endDate'],
                  'type' => $donnees['type'],
                  'cryptocurrencyName' => $donnees['cryptocurrencyName'],
                  'content' => $donnees['content'],
                  'isAirdropFree' => $donnees['isAirdropFree'],
                  'reward' => $donnees['reward'],
                  'imageId' => $donnees['imageId']
              ];
          }

          for ($i = 0; $i < count($airdrops); $i++) {
              $date = $airdrops[$i]['beginDate'];
              $date = explode(' ', $date);
              $date = $date[0] . 'T' . $date[1] . '+02:00';
              $airdrops[$i]['beginDate'] = $date;
          }
          for ($i = 0; $i < count($airdrops); $i++) {
              $date = $airdrops[$i]['endDate'];
              $date = explode(' ', $date);
              $date = $date[0] . 'T' . $date[1] . '+02:00';
              $airdrops[$i]['endDate'] = $date;
          }

          $data = $this->get('jms_serializer')->serialize($airdrops, 'json');
          $response = new Response($data);
          $response->headers->set('Content-Type', 'application/json');

          return $response;
      
    }

    public function airdropAction(Request $request, $id) // [GET] /airdrop/{id}
    {
        try {
            $bdd = new PDO('mysql:host=' . $this->container->getParameter('database_host') . ';dbname=' . $this->container->getParameter('database_name') . ';charset=utf8', $this->container->getParameter('database_user'), $this->container->getParameter('database_password'));
        } catch (Exception $e) {
            die('Erreur : ' . $e->getMessage());
        }
        $user = $this->getUser();

        if (!isset($user) || $user->getPremiumLevel() < 2) {
            $data = $request->getContent();
            $data = json_decode($data);
            $response = $bdd->query('SELECT * FROM airdrop WHERE id=' . $id);

            while ($donnees = $response->fetch()) {
                $airdrop[] = ['id' => $donnees['id'],
                    'author' => $donnees['author'],
                    'beginDate' => $donnees['beginDate'],
                    'endDate' => $donnees['endDate'],
                    'type' => $donnees['type'],
                    'cryptocurrencyName' => $donnees['cryptocurrencyName'],
                    'content' => $donnees['content'],
                    'isAirdropFree' => $donnees['isAirdropFree'],
                    'reward' => $donnees['reward'],
                  'imageId' => $donnees['imageId']
                ];
            }
            if (!isset($airdrop)) {
                return new JsonResponse(array('error' => 'The call does not exist'), 404);
            }
            if ($donnees['isAirdropFree'] != 1) {
                return new JsonResponse(array('error' => 'You can not get the airdrop. You do not have the premium level needed.'), 403);
            }

            for ($i = 0; $i < count($airdrop); $i++) {
                $date = $airdrop[$i]['beginDate'];
                $date = explode(' ', $date);
                $date = $date[0] . 'T' . $date[1] . '+02:00';
                $airdrop[$i]['beginDate'] = $date;
            }
            for ($i = 0; $i < count($airdrop); $i++) {
                $date = $airdrop[$i]['endDate'];
                $date = explode(' ', $date);
                $date = $date[0] . 'T' . $date[1] . '+02:00';
                $airdrop[$i]['endDate'] = $date;
            }

            $data = $this->get('jms_serializer')->serialize($airdrop, 'json');
            $response = new Response($data);
            $response->headers->set('Content-Type', 'application/json');

            return $response;
        }

        $data = $request->getContent();
        $data = json_decode($data);
        $response = $bdd->query('SELECT * FROM airdrop WHERE id=' . $id);

        while ($donnees = $response->fetch()) {
            $airdrop[] = ['id' => $donnees['id'],
                'author' => $donnees['author'],
                'beginDate' => $donnees['beginDate'],
                'endDate' => $donnees['endDate'],
                'type' => $donnees['type'],
                'cryptocurrencyName' => $donnees['cryptocurrencyName'],
                'content' => $donnees['content'],
                'isAirdropFree' => $donnees['isAirdropFree'],
                'reward' => $donnees['reward'],
              'imageId' => $donnees['imageId']];
        }
        if (!isset($airdrop)) {
            return new JsonResponse(array('error' => 'The call does not exist'), 404);
        }

        for ($i = 0; $i < count($airdrop); $i++) {
            $date = $airdrop[$i]['beginDate'];
            $date = explode(' ', $date);
            $date = $date[0] . 'T' . $date[1] . '+02:00';
            $airdrop[$i]['beginDate'] = $date;
        }
        for ($i = 0; $i < count($airdrop); $i++) {
            $date = $airdrop[$i]['endDate'];
            $date = explode(' ', $date);
            $date = $date[0] . 'T' . $date[1] . '+02:00';
            $airdrop[$i]['endDate'] = $date;
        }

        $data = $this->get('jms_serializer')->serialize($airdrop, 'json');
        $response = new Response($data);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}