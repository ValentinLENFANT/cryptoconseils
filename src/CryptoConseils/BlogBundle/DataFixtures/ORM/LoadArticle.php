<?php
// src/CryptoConseils/BlogBundle/DataFixtures/ORM/LoadArticle.php

namespace CryptoConseils\BlogBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\Persistence\ObjectManager;
use CryptoConseils\BlogBundle\Entity\Article;
use Symfony\Component\Validator\Constraints\Date;
use Symfony\Component\VarDumper\Cloner\Data;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;

class LoadArticle extends AbstractFixture implements OrderedFixtureInterface
{
    // Dans l'argument de la méthode load, l'objet $manager est l'EntityManager
    public function load(ObjectManager $manager)
    {
        // Liste des noms de catégorie à ajouter
        $images_id = array(
            $this->getReference('image0'),
            $this->getReference('image1'),
            $this->getReference('image2'),
            $this->getReference('image3'),
            $this->getReference('image4')
        );

        $titles = array(
            'Le Bitcoin est-il toujours le roi de toutes les crypto-monnaies ?',
            'Etat des lieux du marché des crypto-monnaies',
            'Chute spectaculaire des cours : les crypto-monnaies survivront-elles ?',
            'Ethereum et Smart Contracts : que sont-ils ?',
            'Le bear market dure depuis maintenant 3 mois...'
        );

        $author = 'Valentin';

        $contents = array(
            'Le Bitcoin a vu sa dominance passer de 90% à 33% en quelques années.',
            'Le marché des crypto-monnaies se porte relativement bien malgré quelques facteurs inquiétants',
            'Le marché a connu une diminution de sa capitalisation totale de 65% en un mois',
            'Les smart contracts sont une des pierres angulaires de la crypto-monnaie Ethereum',
            'Le bear market dont la définition correspond à un marché à forte tendance baissière est présent depuis maintenant 3 mois'
        );

        $date = new \Datetime();

        $published = 1;

        for ($i=0; $i<count($images_id); $i++) {
            // On crée la catégorie
            $article = new article();
            $article->setImage($images_id[$i]);
            $article->setTitle($titles[$i]);
            $article->setAuthor($author);
            $article->setContent($contents[$i]);
            $article->setDate($date);
            $article->setPublished($published);
            $article->setPremium(rand(1,5));

            // On la persiste
            $manager->persist($article);
        }

        // On déclenche l'enregistrement de toutes les catégories
        $manager->flush();
    }

    public function getOrder()
    {
        return 3;
    }
}