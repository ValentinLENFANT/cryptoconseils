<?php
//// src/CryptoConseils/BlogBundle/DataFixtures/ORM/LoadArticle.php
//
//namespace CryptoConseils\BlogBundle\DataFixtures\ORM;
//
//use Doctrine\Common\DataFixtures\FixtureInterface;
//use Doctrine\Common\Persistence\ObjectManager;
//use CryptoConseils\BlogBundle\Entity\Article;
//
//class LoadArticle implements FixtureInterface
//{
//    // Dans l'argument de la méthode load, l'objet $manager est l'EntityManager
//    public function load(ObjectManager $manager)
//    {
//        // Liste des noms de catégorie à ajouter
//        $names = array(
//            'Crypto-monnaie',
//            'Bitcoin',
//            'Ethereum',
//            'Altcoins',
//            'News'
//        );
//
//        foreach ($names as $name) {
//            // On crée la catégorie
//            $category = new Category();
//            $category->setName($name);
//
//            // On la persiste
//            $manager->persist($category);
//        }
//
//        // On déclenche l'enregistrement de toutes les catégories
//        $manager->flush();
//    }
//}