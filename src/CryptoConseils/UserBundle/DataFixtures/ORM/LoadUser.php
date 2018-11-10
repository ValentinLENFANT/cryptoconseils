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
        $listNames = array('Valentin LENFANT');

        foreach ($listNames as $name) {
            $user = $userManager->createUser();
            $user->setUsername($name);
            $user->setPlainPassword('V.L256327');
            $user->setRoles(array('ROLE_ADMIN'));
            $user->setEmail('valentin.lenfant@hotmail.com');
            $user->setEnabled(1);
            $user->setPremiumLevel(5);
            $user->setIsEmailValidated(1);
            $user->setImageLink('https://lh3.googleusercontent.com/oszDAkLihkI-SaV66QerlvLgdCZaKOlVvcQ-vAA9FFkPfVr711flTBhKlIws6_PbtbVvPcSaX_ZJ4PPlQWIu7s_mIAHPhJQX7KssSbJr0Z85a3b7w7uO1LlfKJaiw00Ue4FS31OUZp1NktyWASSh9j4GMOEJKwfnWrf3B2jumVlIPE4dZXkoJ-t6LTSLklg5qeU55S3jurXhsNfOhNILOvhJ1GlktbdsAvo51yeiNNtmV2CC1IxSqPIjabNjXUpLGPHDTbkAlgijG1lCu6rF6bAIG-xx147hGmuTxKq1hKD6s3denPLciAzO38eLD9HYCihXJ2Dm-bPnVLXoY0wF1nm3z0clIUm8uYPjFsfdZ7O9xbB70slH07VGT3-KZT9LCMoOhgBdTvmuITLwrwY81RvF-0e5X9GEcXZHrkOH6c6b-EK2iO-kniYBAUK6sHLNS1rwVQQzH-FHSK_-hBhwCqJPt1KymO9UTXhZxzhHsoQUSiXUeVPLEVwcJ5m2x1jPwqeMlPy0uxT7waroFR69g9aSt5dzymCzbLM01m8e4LlNv_h0rngGi0gPTuNG8bj_46WaBZum3v6cYsSsn6NQoBTrLd1Hbx14sPYXmhGWJoKqG0oDZguVYvKxLmAM9XsPxzIeQjPnavlEnZaTlxgrnt08JjQsZYoZ-RsA8LcruV4=w125-h117-no');
            $manager->persist($user);

        }
        $manager->flush();
    }
}
