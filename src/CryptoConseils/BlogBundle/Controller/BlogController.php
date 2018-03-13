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
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class BlogController extends Controller
{
    public function indexAction()
    {
        $content = $this->get('templating')->render('CryptoConseilsBlogBundle:Blog:index.html.twig', array('nom' => 'Valentin'));
        return new Response($content);
    }

    public function viewAction($id)
    {
        $url = $this->get('router')->generate('cryptoconseils_blog_view', array('id' => $id), UrlGeneratorInterface::ABSOLUTE_URL);
        return new Response("Affichage de l'article d'id : " .$id. " d'URL " .$url);
    }

    public function addAction()
    {
        //todo
    }

    public function editAction($id)
    {
        //todo
    }

    public function deleteAction($id)
    {
        //todo
    }
}