<?php

namespace CryptoConseils\UserBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use CryptoConseils\UserBundle\Entity\User;

class LoadUser implements FixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $listNames = array('Valentin', 'Aurélien', 'Guillaume', 'Alexandre');

        foreach ($listNames as $name) {
            $user = new User;
            $user->setUsername($name);
            $user->setPassword($name);
            $user->setSalt('');
            if ($user->getUsername() == 'Valentin') {
                $user->setRoles(array('ROLE_ADMIN'));
            } else {
                $user->setRoles(array('ROLE_USER'));
            }
            $manager->persist($user);
        }
        $manager->flush();
    }
}