<?php
// src/CryptoConseils/BlogBundle/DataFixtures/ORM/LoadImage.php

namespace CryptoConseils\BlogBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use CryptoConseils\BlogBundle\Entity\Image;

class LoadImage implements FixtureInterface
{
    // Dans l'argument de la méthode load, l'objet $manager est l'EntityManager
    public function load(ObjectManager $manager)
    {
        // Liste des noms de catégorie à ajouter
        $urls = array(
            'https://image.noelshack.com/fichiers/2018/15/3/1523455498-arton1230.png',
            'https://image.noelshack.com/fichiers/2018/15/7/1523801975-1-bnxhrv0vqcqjqpze6escsq.jpeg',
            'https://image.noelshack.com/fichiers/2018/15/7/1523801975-downtrend.png',
            'https://image.noelshack.com/fichiers/2018/15/7/1523801975-ethereum-1024x1024.jpg',
            'https://image.noelshack.com/fichiers/2018/15/7/1523801975-hauerbearmarket-20607638.jpeg'
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

            // On la persiste
            $manager->persist($image);
        }

        // On déclenche l'enregistrement de toutes les catégories
        $manager->flush();
    }
}