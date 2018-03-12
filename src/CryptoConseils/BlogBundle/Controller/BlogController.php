<?php
/**
 * Created by PhpStorm.
 * User: KFMJ2601
 * Date: 12/03/2018
 * Time: 16:05
 */

namespace CryptoConseils\BlogBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class BlogController extends Controller
{
    public function indexAction()
    {
        $content = $this->get('templating')->render('CryptoConseilsBlogBundle:Blog:index.html.twig', array('nom' => 'Valentin'));
        return new Response($content);
    }
}