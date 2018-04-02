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
    public function indexAction()
    {
        return $this->render('CryptoConseilsBlogBundle:Blog:index.html.twig', array('listAdverts' => array()));
    }

    public function viewAction($id)
    {
        $article = array(
            'title' => 'Est-ce que le Bitcoin est toujours roi ?',
            'id' => $id,
            'author' => 'Valentin LENFANT',
            'content' => 'Le Bitcoin a vu sa dominance passer de 90% à 45%, soit une diminution de 50%. Est-il toujours le roi des crypto-monnaies ?',
            'date' => new \Datetime()
        );

        return $this->render('CryptoConseilsBlogBundle:Blog:view.html.twig', array(
            'article' => $article
        ));
    }

    public function addAction(Request $request)
    {
        if ($request->isMethod('POST')) {
            $request->getSession()->getFlashBag()->add('notice', 'Article crée');
            return $this->redirectToRoute('cryptoconseils_blog_view', array('id' => 1));
        }
        return $this->render('CryptoConseilsBlogBundle:Blog:add.html.twig');
    }

    public function editAction($id, Request $request)
    {
        if ($request->isMethod('POST')) {
            $request->getSession()->getFlashBag()->add('notice', 'Article modifié');
            return $this->redirectToRoute('cryptoconseils_blog_view', array('id' => 5));
        }
        $article = array(
            'title' => 'Est-ce que le Bitcoin est toujours roi ?',
            'id' => $id,
            'author' => 'Valentin LENFANT',
            'content' => 'Le Bitcoin a vu sa dominance passer de 90% à 45%, soit une diminution de 50%. Est-il toujours le roi des crypto-monnaies ?',
            'date' => new \Datetime()
        );

        return $this->render('CryptoConseilsBlogBundle:Blog:edit.html.twig', array(
            'article' => $article
        ));
    }

    public function deleteAction($id)
    {
        return $this->render('CryptoConseilsBlogBundle:Blog:delete.html.twig');
    }

    public function menuAction($limit)
    {
        $listArticles = array(
            array('id' => 2, 'title' => 'Est-ce que le Bitcoin est toujours roi ?'),
            array('id' => 5, 'title' => 'Est-ce bientôt la fin du bear market ?'),
            array('id' => 9, 'title' => 'Quel avenir pour les crypto-monnaies ?')
        );

        return $this->render('CryptoConseilsBlogBundle:Blog:menu.html.twig', array(
            'listArticles' => $listArticles
        ));
    }
}