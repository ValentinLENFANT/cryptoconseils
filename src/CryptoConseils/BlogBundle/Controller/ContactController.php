<?php
/**
 * Created by PhpStorm.
 * User: Valentin LENFANT
 * Date: 08/07/2018
 * Time: 14:05
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

class ContactController extends FOSRestController
{
    public function newAction(Request $request)
    {
        $data = $request->getContent();
        $contact = json_decode($data, true);

        $message = \Swift_Message::newInstance()
            ->setSubject($contact['sujet'])
            ->setFrom($contact['email'])
            ->setTo('cryptoconseilsfr@gmail.com')
            ->setContentType("text/html; charset=UTF-8")
            ->setBody(
                $this->renderView(
                    'CryptoConseilsBlogBundle:Emails:contact.html.twig',
                    array(
                        'prenom' => $contact['prenom'],
                        'nom' => $contact['nom'],
                        'content' => $contact['message'],
                        'email' => $contact['email'],
                        'sujet' => $contact['sujet']
                    ))
            );
        $this->get('mailer')->send($message);
        return new JsonResponse("Message de contact envoyé avec succés", 200);
    }
}