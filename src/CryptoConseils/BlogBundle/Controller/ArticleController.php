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
use CryptoConseils\BlogBundle\Entity\Article;

class ArticleController extends Controller
{
    public function indexAction()
    {
        return $this->render('CryptoConseilsBlogBundle:Article:index.html.twig', array('listArticles' => array()));
    }

    public function viewAction($id)
    {
        $repository = $this->getDoctrine()->getManager()->getRepository('CryptoConseilsBlogBundle:Article');
        $article = $repository->find($id);

        if (null === $article) {
            throw new NotFoundHttpException("L'article d'id" .$id. "n'existe pas");
        }

        return $this->render('CryptoConseilsBlogBundle:Article:view.html.twig', array(
            'article' => $article
        ));
    }

    public function addAction(Request $request)
    {
        // Création de l'entité
        $article = new Article();
        $article->setTitle('Est-ce que le Bitcoin est toujours roi ?');
        $article->setAuthor('Valentin');
        $article->setContent('Le Bitcoin a vu sa dominance passer de 90% à 45%, soit une diminution de 50%. Est-il toujours le roi des crypto-monnaies ?');

        // Récupération de l'EntityManager
        $em = $this->getDoctrine()->getManager();
        // On persiste l'entité
        $em->persist($article);
        // Flush des persistence précédentes
        $em->flush();


        if ($request->isMethod('POST')) {
            $request->getSession()->getFlashBag()->add('notice', 'Article crée');
            return $this->redirectToRoute('cryptoconseils_blog_view', array($article => getId()));
        }
        return $this->render('CryptoConseilsBlogBundle:Article:add.html.twig', array('article' => $article));
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

        return $this->render('CryptoConseilsBlogBundle:Article:edit.html.twig', array(
            'article' => $article
        ));
    }

    public function deleteAction($id)
    {
        return $this->render('CryptoConseilsBlogBundle:Article:delete.html.twig');
    }

    public function menuAction($limit)
    {
        $listArticles = array(
            array('id' => 2, 'title' => 'Est-ce que le Bitcoin est toujours roi ?'),
            array('id' => 5, 'title' => 'Est-ce bientôt la fin du bear market ?'),
            array('id' => 9, 'title' => 'Quel avenir pour les crypto-monnaies ?')
        );

        return $this->render('CryptoConseilsBlogBundle:Article:menu.html.twig', array(
            'listArticles' => $listArticles
        ));
    }
}