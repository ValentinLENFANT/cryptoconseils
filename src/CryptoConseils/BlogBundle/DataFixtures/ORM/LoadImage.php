<?php
// src/CryptoConseils/BlogBundle/DataFixtures/ORM/LoadImage.php

namespace CryptoConseils\BlogBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Validator\Constraints\Date;
use Symfony\Component\VarDumper\Cloner\Data;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use CryptoConseils\BlogBundle\Entity\Image;

class LoadImage extends AbstractFixture implements OrderedFixtureInterface
{
    // Dans l'argument de la méthode load, l'objet $manager est l'EntityManager
    public function load(ObjectManager $manager)
    {
        // Liste des noms de catégorie à ajouter
        $urls = array(
            'jpg',
            'jpeg',
            'jpg',
            'png',
            'jpg'
        );

        $alts = array(
            'Bitcoin banner',
            'Cryptocurrencies banner',
            'Downtrend banner',
            'Ethereum banner',
            'BearMarket banner'
        );

            for ($i=0; $i<count($urls); $i++) {
                // On crée la catégorie
                $image = new Image();
                $image->setUrl($urls[$i]);
                $image->setAlt($alts[$i]);
                $this->addReference('image'.$i, $image);

                // On la persiste
                $manager->persist($image);
            }

        // On déclenche l'enregistrement de toutes les catégories
        $manager->flush();
    }

    public function getOrder()
    {
        return 1;
    }
}