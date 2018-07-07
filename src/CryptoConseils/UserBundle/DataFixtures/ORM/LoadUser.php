<?php

namespace CryptoConseils\UserBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use CryptoConseils\UserBundle\Entity\User;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

class LoadUser implements FixtureInterface, ContainerAwareInterface
{

    public function setContainer(ContainerInterface $container = null)
    {
        $this->container = $container;
    }

    public function load(ObjectManager $manager)
    {

        $userManager = $this->container->get('fos_user.user_manager');
        $listNames = array('Valentin', 'Aurélien', 'Guillaume', 'Alexandre', 'Satoshi', 'Nakamoto', 'Vitalik', 'Brandon', 'George', 'David', 'Paul');

        foreach ($listNames as $name) {
            $user = $userManager->createUser();
            $user->setUsername($name);
            $user->setPlainPassword($name);
            $user->setRoles(array('ROLE_ADMIN'));
            strtolower($user->setEmail($user->getUsername() . '@hotmail.fr'));
            $user->setEnabled(1);
            $user->setPremiumLevel(rand(1,5));
            $user->setIsEmailValidated(1);
            $manager->persist($user);
        }
        $manager->flush();
    }
}