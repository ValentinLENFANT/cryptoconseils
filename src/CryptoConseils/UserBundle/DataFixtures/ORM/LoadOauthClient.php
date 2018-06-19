<?php
// src/CryptoConseils/UserBundle/DataFixtures/ORM/LoadOauthClient.php

namespace CryptoConseils\UserBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Validator\Constraints\Date;
use Symfony\Component\VarDumper\Cloner\Data;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use CryptoConseils\UserBundle\Entity\Client;

class LoadImage extends AbstractFixture implements OrderedFixtureInterface
{
    // Dans l'argument de la méthode load, l'objet $manager est l'EntityManager
    public function load(ObjectManager $manager)
    {
        $random_id = "3bcbxd9e24g0gk4swg0kwgcwg4o8k8g4g888kwc44gcc0gwwk4";
        $secret = "4ok2x70rlfokc8g0wws8c8kwcokw80k44sg48goc0ok4w0so0k";
        $grant_types = array('password');

        $client = new Client();
        $client->setRandomId($random_id);
        $client->setSecret($secret);
        $client->setAllowedGrantTypes($grant_types);


        $manager->persist($client);
        $manager->flush();
    }

    public function getOrder()
    {
        return 1;
    }
}