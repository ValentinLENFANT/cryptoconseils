<?php
/**
 * Created by PhpStorm.
 * User: KFMJ2601
 * Date: 30/04/2018
 * Time: 11:38
 */

namespace CryptoConseils\UserBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class SecurityController extends Controller
{
    public function loginAction(Request $request)
    {
        if ($this->get('security.authorization_checker')->isGranted('IS_AUTHENTICATED_REMEMBERED')) {
            return $this->redirectToRoute('cryptoconseils_blog_home');
        }

        $authenticationUtils = $this->get('security.authentication_utils');

        return $this->render('CryptoConseilsUserBundle:Security:login.html.twig', array(
            'last_username' => $authenticationUtils->getLastUsername(),
            'error' => $authenticationUtils->getLastAuthenticationError(),
        ));
    }
}