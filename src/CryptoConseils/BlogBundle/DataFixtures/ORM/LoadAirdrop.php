<?php
/**
 * Created by PhpStorm.
 * User: Valentin LENFANT
 * Date: 12/07/2018
 * Time: 11:04
 */

namespace CryptoConseils\BlogBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\Persistence\ObjectManager;
use CryptoConseils\BlogBundle\Entity\Airdrop;
use Symfony\Component\Validator\Constraints\Date;
use Symfony\Component\VarDumper\Cloner\Data;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;

class LoadAirdrop extends AbstractFixture
{
    public function load(ObjectManager $manager)
    {
        $author = array(
            "Valentin",
            "Alexandre",
            "Guillaume",
            "Aurélien"
        );

        $cryptocurrencyName = array(
            "Bitcoin",
            "Ethereum",
            "Ripple",
            "Neo",
            "Tron",
            "EOS"
        );

        $content = array(
            "Il est rare de voir un airdrop de Bitcoin. Nous vous recommandons vivement d'y participer.",
            "De même que pour le Bitcoin, l'Ethereum réalise rarement des airdrops. Participez y car nous prévoyons une hausse fulgurante d'ici à la fin de l'année. !",
            "Il est toujours bon de remplir ses bags de Ripple afin de pouvoir aller sur le terrain de jeu des whales.",
            "Tu es l'élu, Neo. Plus sérieusement, Neo a montré sa robustesse, même pendant cette période de forte instabilité. Nous vous recommandons vivement de participer à l'airdrop.",
            "Qui voudrait du Tron ? Probablement vous car malgré les nombreux déboirs de cette crypto-monnaie cette dernière a su maintenir le cap.",
            "Malgré les supposées vulnérabilités de la monnaie phare de 2018 cet airdrop pourrait bien redonner de bonnes couleurs vertes à EOS."
        );

        $type = array(
            "BitcoinTalk",
            "Wallet",
            "Snapshot",
            "Enregistrement",
            "Autre"
        );

        $reward = array(
            "1 BTC",
            "10 ETH",
            "200 XRP",
            "10 NEO",
            "200 TRX",
            "140 EOS",
        );

        $beginDate = new \Datetime();

        $endDate = new \DateTime();

        for ($i = 0; $i < count($cryptocurrencyName); $i++) {
            // On crée la catégorie
            $airdrop = new airdrop();
            $airdrop->setAuthor($author[rand(0, 3)]);
            $airdrop->setCryptocurrencyName($cryptocurrencyName[$i]);
            $airdrop->setContent($content[$i]);
            $airdrop->setType($type[rand(0, 4)]);
            $airdrop->setBeginDate($beginDate);
            $airdrop->setEndDate($endDate);
            $airdrop->setIsAirdropFree(rand(0,1));
            $airdrop->setReward($reward[$i]);
            $airdrop->setImageId(rand(1,7));

            // On la persiste
            $manager->persist($airdrop);
        }

        // On déclenche l'enregistrement de toutes les catégories
        $manager->flush();
    }
}
