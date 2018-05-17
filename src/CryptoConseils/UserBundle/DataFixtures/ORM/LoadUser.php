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
        $listNames = array('Valentin', 'Aurélien', 'Guillaume', 'Alexandre');

        foreach ($listNames as $name) {
            $user = $userManager->createUser();
            $user->setUsername($name);
            $user->setPlainPassword($name);
            if ($user->getUsername() == 'Valentin') {
                $user->setRoles(array('ROLE_ADMIN'));
                $user->setEmail('valentin.lenfant@hotmail.com');
            } else {
                $user->setRoles(array('ROLE_USER'));
                $user->setEmail($user->getUsername() . '@test.fr');
            }
            $user->setEnabled(1);
            $manager->persist($user);
        }
        $manager->flush();
    }
}