<?php
// src/CryptoConseils/BlogBundle/DataFixtures/ORM/LoadComment.php

namespace CryptoConseils\BlogBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\Persistence\ObjectManager;
use CryptoConseils\BlogBundle\Entity\Comment;
use CryptoConseils\BlogBundle\Entity\Article;
use Symfony\Component\Validator\Constraints\Date;
use Symfony\Component\Validator\Constraints\DateTime;
use Symfony\Component\VarDumper\Cloner\Data;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;


class LoadComment extends AbstractFixture implements OrderedFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $articles_id = array(
            $this->getReference('article0'),
            $this->getReference('article1'),
            $this->getReference('article2'),
            $this->getReference('article3'),
            $this->getReference('article4'),
            $this->getReference('article5'),
            $this->getReference('article6'),
            $this->getReference('article7')
        );

        $author = array(
            "Valentin",
            "Alexandre",
            "Guillaume",
            "Aurélien",
            "Satoshi Nakamoto"
        );

        $content = array(
            "Wow, super article ! Très instructif.",
            "Je suis tout à fait d'accord sur le fond, les crypto-monnaies ont un bel avenir devant elles.",
            "Bravo ! Continuez comme ça les gars.",
            "Hmm, je ne suis pas tout à fait d'accord avec le second paragraphe.",
            "Ce site est le meilleur que je n'ai jamais vu !",
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at euismod augue. Suspendisse faucibus tristique."
        );

        $date = new \Datetime();

        for ($i=0; $i<count($articles_id); $i++) {
            // On crée la catégorie
            $comment = new comment();
            $comment->setArticle($articles_id[$i]);
            $comment->setAuthor($author[rand(0,3)]);
            $comment->setContent($content[rand(0,4)]);
            $comment->setDate($date);
            // On la persiste
            $manager->persist($comment);
        }

        // On déclenche l'enregistrement de toutes les catégories
        $manager->flush();
    }
    public function getOrder()
    {
        return 4;
    }
}