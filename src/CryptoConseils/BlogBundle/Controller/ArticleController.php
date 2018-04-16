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
use CryptoConseils\BlogBundle\Antispam\CryptoConseilsAntispam;
use CryptoConseils\BlogBundle\Entity\Article;
use CryptoConseils\BlogBundle\Entity\Image;
use CryptoConseils\BlogBundle\Entity\Category;
use CryptoConseils\BlogBundle\Entity\Comment;

class ArticleController extends Controller
{
    public function indexAction($page)
    {
        if ($page < 1) {
            throw new NotFoundHttpException("Page " .$page. " inexistante.");
        }

        //Nombre d'articles par page
        $nbPerPage = 3;

        $listArticles = $this->getDoctrine()->getManager()->getRepository('CryptoConseilsBlogBundle:Article')->getArticles($page, $nbPerPage);

        $nbPages = ceil(count($listArticles) / $nbPerPage);

        if ($page > $nbPages) {
            throw $this->createNotFoundException("La page " .$page. " n'existe pas.");
        }

        return $this->render('CryptoConseilsBlogBundle:Article:index.html.twig', array(
            'listArticles' => $listArticles,
            'nbPages' => $nbPages,
            'page' => $page,
        ));
    }

    public function viewAction($id)
    {
        $em = $this->getDoctrine()->getManager();
        $article = $em->getRepository("CryptoConseilsBlogBundle:Article")->find($id);

        if (null === $article) {
            throw new NotFoundHttpException("L'article d'id" .$id. "n'existe pas");
        }

        $listComments = $em->getRepository('CryptoConseilsBlogBundle:Comment')->findBy(array('article' => $article));

        return $this->render('CryptoConseilsBlogBundle:Article:view.html.twig', array(
            'article' => $article,
            'listComments' => $listComments
        ));
    }

    public function addAction(Request $request)
    {
        // Création de l'entité Article
//        $article = new Article();
//        $article->setTitle("Forte hausse du Bitcoin ces derniers jours !");
//        $article->setAuthor('Valentin');
//        $article->setContent('Le Bitcoin a été déclaré halal.');
//
//        $image = new Image();
//        $image->setUrl("https://image.noelshack.com/fichiers/2018/15/3/1523455498-arton1230.png");
//        $image->setAlt("Banière Bitcoin");
//
//        $comment1 = new comment();
//        $comment1->setAuthor('Satoshi Nakamoto');
//        $comment1->setContent("J'ai crée le Bitcoin !");
//
//        $comment2 = new comment();
//        $comment2->setAuthor('Vitalik Butterin');
//        $comment2->setContent("J'ai crée l'Ethereum !");
//
//        $comment1->setArticle($article);
//        $comment2->setArticle($article);
//
//        $article->setImage($image);
//
//        // Récupération de l'EntityManager
//        $em = $this->getDoctrine()->getManager();
//        // On persiste l'entité
//        $em->persist($article);
//        $em->persist($comment1);
//        $em->persist($comment2);
//        // Flush des persistence précédentes
//        $em->flush();
//
//
//        if ($request->isMethod('POST')) {
//            $request->getSession()->getFlashBag()->add('notice', 'Article crée');
//            return $this->redirectToRoute('cryptoconseils_blog_view', array($article => getId()));
//        }
//        return $this->render('CryptoConseilsBlogBundle:Article:add.html.twig', array('article' => $article));

//        $em = $this->getDoctrine()->getManager();
//
//        if($request->isMethod('POST')) {
//            $request->getSession()->getFlashBag()->add('notice', 'Article créé !');
//            return $this->redirectToRoute('cryptoconseils_blog_view', array('id' => $article->getId()));
//        }
//
//        return $this->render('CryptoConseilsBlogBundle:Article:add.html.twig');

    }

    public function editAction($id, Request $request)
    {
//        if ($request->isMethod('POST')) {
//            $request->getSession()->getFlashBag()->add('notice', 'Article modifié');
//            return $this->redirectToRoute('cryptoconseils_blog_view', array('id' => 5));
//        }
//        $article = array(
//            'title' => 'Est-ce que le Bitcoin est toujours roi ?',
//            'id' => $id,
//            'author' => 'Valentin LENFANT',
//            'content' => 'Le Bitcoin a vu sa dominance passer de 90% à 45%, soit une diminution de 50%. Est-il toujours le roi des crypto-monnaies ?',
//            'date' => new \Datetime()
//        );
//
//        return $this->render('CryptoConseilsBlogBundle:Article:edit.html.twig', array(
//            'article' => $article
//        ));

        $em = $this->getDoctrine()->getManager();

        $article = $em->getRepository('CryptoConseilsBlogBundle:Article')->find($id);

        if (null === $article) {
            throw new NotFoundHttpException("L'article d'id " .$id. " n'existe pas.");
        }

        if($request->isMethod('POST')) {
            $request->getSession()->getFlashBag()->add('notice', 'Article modifié');

            return $this->redirectToRoute('cryptoconseils_blog_view', array('id' => $article->getId()));
        }

        return $this->render('CryptoConseilsBlogBundle:Article:edit.html.twig', array('article' => $article));

    }

    public function deleteAction($id)
    {
        $em = $this->getDoctrine()->getManager();

        $article = $em->getRepository('CryptoConseilsBlogBundle:Article')->find($id);

        if (null === $article) {
            throw new NotFoundHttpException("L'article d'id " .$id. " n'existe pas.");
        }

        foreach ($article->getCategories() as $category) {
            $article->removeCategory($category);
        }

        $em->flush();

        return $this->render('CryptoConseilsBlogBundle:Article:delete.html.twig');
    }

    public function menuAction($limit)
    {
        $em = $this->getDoctrine()->getManager();

        $listArticles = $em->getRepository('CryptoConseilsBlogBundle:Article')->findBy(
            array(),
            array('date' => 'desc'),
            $limit,
            0
        );

        return $this->render('CryptoConseilsBlogBundle:Article:menu.html.twig', array(
            'listArticles' => $listArticles));
    }
}