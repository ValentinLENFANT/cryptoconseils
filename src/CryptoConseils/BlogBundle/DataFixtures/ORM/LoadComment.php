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
            $this->getReference('article7'),
            $this->getReference('article8'),
            $this->getReference('article9'),
            $this->getReference('article10'),
            $this->getReference('article11'),
            $this->getReference('article12'),
            $this->getReference('article13'),
            $this->getReference('article14'),
            $this->getReference('article15'),
            $this->getReference('article16'),
            $this->getReference('article17'),
            $this->getReference('article18'),
            $this->getReference('article19'),
            $this->getReference('article20'),
            $this->getReference('article21')
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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at euismod augue. Suspendisse faucibus tristique.",
            'Vive le Bicoin !',
            'Je préfère les altcoins',
            'Je suis Satoshi Nakamoto',
            'Hey Jacquie ! Dis bonjour à Michel de ma part !',
            'On dit merci qui ?',
            "Le bear market n'est pas encore fini :("
        );

        $date = new \Datetime();

        for ($i=0; $i<count($articles_id); $i++) {
            // On crée la catégorie
            $comment = new comment();
            $comment->setArticle($articles_id[$i]);
            $authorName = rand(0,4);
            $user_id = $authorName;
            $comment->setAuthor($author[$authorName]);
            $comment->setContent($content[rand(0,13)]);
            $comment->setDate($date);
            $comment->setUserId($user_id+1);
            $comment->setPublished(true);
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