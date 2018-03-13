<?php
/**
 * Created by PhpStorm.
 * User: KFMJ2601
 * Date: 12/03/2018
 * Time: 16:05
 */

namespace CryptoConseils\BlogBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class BlogController extends Controller
{
    public function indexAction($page)
    {
        if($page <1) {
           throw new NotFoundHttpException('La page ' .$page. ' est inexistante');
        }

        return $this->render('CryptoConseilsBlogBundle:Blog:index.html.twig');
    }

    public function viewAction($id)
    {
        return $this->render('CryptoConseilsBlogBundle:Blog:view.html.twig', array('id' => $id));
    }

    public function addAction(Request $request)
    {
        if($request->isMethod('POST')) {
            $request->getSession()->getFlashBag()->add('notice', 'Article crée');
            return $this->redirectToRoute('cryptoconseils_blog_view', array('id' => 1));
        }
        return $this->render('CryptoConseilsBlogBundle:Blog:add.html.twig');
    }

    public function editAction($id, Request $request)
    {
        if($request->isMethod('POST')) {
            $request->getSession()->getFlashBag()->add('notice', 'Article modifié');
            return $this->redirectToRoute('cryptoconseils_blog_view', array('id' => 5));
        }
        return $this->render('CryptoConseilsBlogBundle:Blog:edit.html.twig');
    }

    public function deleteAction($id)
    {
        return $this->render('CryptoConseilsBlogBundle:Blog:delete.html.twig');
    }
}