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
        $fileExtension = '.jpg';

        $filePath = '/cryptoconseils-frontend/public/images/articles';

        $fileName = [
          'default-user'
          'blog-article-1',
          'blog-article-2',
          'blog-article-3',
          'blog-article-4',
          'blog-article-5',
          'blog-article-6',
          'blog-article-7',
          'blog-article-8'
        ];

            for ($i=0; $i<count($fileName); $i++) {
                // On crée la catégorie
                $image = new Image();
                $image->setFileExtension($fileExtension);
                $image->setFilePath($filePath);
                $image->setFileName($fileName[$i].$fileExtension);
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
