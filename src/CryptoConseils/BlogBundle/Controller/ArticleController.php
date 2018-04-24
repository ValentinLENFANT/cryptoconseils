<?php
/**
 * Created by PhpStorm.
 * User: KFMJ2601
 * Date: 12/03/2018
 * Time: 16:05
 */

namespace CryptoConseils\BlogBundle\Controller;

use CryptoConseils\BlogBundle\Form\EditArticleType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use CryptoConseils\BlogBundle\Entity\Article;
use CryptoConseils\BlogBundle\Form\ArticleType;

class ArticleController extends Controller
{
    public function indexAction($page)
    {
        if ($page < 1) {
            throw new NotFoundHttpException("Page " . $page . " inexistante.");
        }

        //Nombre d'articles par page
        $nbPerPage = 3;

        $listArticles = $this->getDoctrine()->getManager()->getRepository('CryptoConseilsBlogBundle:Article')->getArticles($page, $nbPerPage);

        $nbPages = ceil(count($listArticles) / $nbPerPage);

        if ($page > $nbPages) {
            throw $this->createNotFoundException("La page " . $page . " n'existe pas.");
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
            throw new NotFoundHttpException("L'article d'id" . $id . "n'existe pas");
        }

        $listComments = $em->getRepository('CryptoConseilsBlogBundle:Comment')->findBy(array('article' => $article));

        return $this->render('CryptoConseilsBlogBundle:Article:view.html.twig', array(
            'article' => $article,
            'listComments' => $listComments
        ));
    }

    public function addAction(Request $request)
    {
        $article = new Article();

        // Création du form builder
        //$form = $this->get('form.factory')->create(ArticleType::class, $article);
        $form = $this->createForm(ArticleType::class, $article);

        if ($request->isMethod('POST') && $form->handleRequest($request)->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($article);
            $em->flush();

            $request->getSession()->getFlashBag()->add('notice', 'Annonce bien enregistrée');

            return $this->redirectToRoute('cryptoconseils_blog_view', array('id' => $article->getId()));
        }

        return $this->render('CryptoConseilsBlogBundle:Article:add.html.twig',
            array('form' => $form->createView()));
    }

    public function editAction($id, Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $article = $em->getRepository('CryptoConseilsBlogBundle:Article')->find($id);

        $form = $this->createForm(EditArticleType::class, $article);

        if (null === $article) {
            throw new NotFoundHttpException("L'article d'id " . $id . " n'existe pas.");
        }

        if ($request->isMethod('POST') && $form->handleRequest($request)->isValid()) {
            $em->persist($article);
            $em->flush();
            $request->getSession()->getFlashBag()->add('notice', 'Article modifié');

            return $this->redirectToRoute('cryptoconseils_blog_view', array('id' => $article->getId()));
        }

        return $this->render('CryptoConseilsBlogBundle:Article:edit.html.twig',
            array('article' => $article, 'form' => $form->createView()));

    }

    public function deleteAction(Request $request, $id)
    {
        $em = $this->getDoctrine()->getManager();

        $article = $em->getRepository('CryptoConseilsBlogBundle:Article')->find($id);

        if (null === $article) {
            throw new NotFoundHttpException("L'article d'id " . $id . " n'existe pas.");
        }

        $form = $this->get('form.factory')->create();
        if($request->isMethod('POST') && $form->handleRequest($request)->isValid()) {
            $em->remove($article);
            $em->flush();

            $request->getSession()->getFlashBag()->add('info', "L'annonce a bien été supprimée.");

            return $this->redirectToRoute('cryptoconseils_blog_home');
        }

        return $this->render('CryptoConseilsBlogBundle:Article:delete.html.twig', array(
            'article' => $article,
            'form' => $form->createView(),
        ));
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