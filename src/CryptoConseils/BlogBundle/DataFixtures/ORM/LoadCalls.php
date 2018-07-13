<?php
/**
 * Created by PhpStorm.
 * User: Valentin LENFANT
 * Date: 08/07/2018
 * Time: 12:23
 */

namespace CryptoConseils\BlogBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\Persistence\ObjectManager;
use CryptoConseils\BlogBundle\Entity\Calls;
use Symfony\Component\Validator\Constraints\Date;
use Symfony\Component\VarDumper\Cloner\Data;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;


class LoadCalls extends AbstractFixture
{
    public function load(ObjectManager $manager)
    {
        $author = array(
            "Valentin",
            "Alexandre",
            "Guillaume",
            "Aurélien"
        );

        $cryptocurrencyPair = array(
            "BTCUSD",
            "BTCETH",
            "LOCETH",
            "XRPBTC",
            "TRXBTC",
            "EOSBTC"
        );

        $cryptocurrencyName = array(
            "Bitcoin/Dollar",
            "Bitcoin/Ethereum",
            "Ethereum/Lockchain",
            "Bitcoin/Ripple",
            "Bitcoin/Tron",
            "Ethereum/Flik",
            "Bitcoin/EOS"
        );

        $content = array(
            "On constate actuellement un très bon point d'entrée pour le Bitcoin. Acheter maintenant semble être une bonne idée.",
            "L'Ethereum, suite à sa très forte perte de valeur, peut être acheté bas pour une revente sûre à un prix beaucoup plus élevé d'ici à la fin de l'année",
            "Margin trading conseillé sur cette paire. Les variations sont importantes mais des profits de l'ordre de 10% sont à attendre.",
            "Ripple, l'éternel outsider centralisé pourrait avoir un bon point d'entrée en raison de l'explosion récente du volume.",
            "Tron, l'éternel terrain de jeu des whales est idéal pour du margin trading.",
            "EOS, malgré les supposées vulnérabilités, reste toujours un investissement judicieux."
        );

        $buyPrice = array(
            "6000",
            "400",
            "0.05",
            "0.0002",
            "0.003",
            "4.5"
        );

        $sellPrice = array(
            "6700",
            "550",
            "0.1",
            "0.0004",
            "0.004",
            "12"
        );

        $scoring = array(
            "70",
            "93",
            "81",
            "75",
            "79",
            "88"
        );

        $date = new \Datetime();

        for ($i = 0; $i < count($cryptocurrencyPair); $i++) {
            // On crée la catégorie
            $call = new calls();
            $call->setAuthor($author[rand(0, 3)]);
            $call->setDate($date);
            $call->setCryptocurrencyPair($cryptocurrencyPair[$i]);
            $call->setCryptocurrencyName($cryptocurrencyName[$i]);
            $call->setContent($content[$i]);
            $call->setBuyPrice($buyPrice[$i]);
            $call->setSellPrice($sellPrice[$i]);
            $call->setScoring($scoring[$i]);
            $call->setIsCallFree(rand(0, 1));

            // On la persiste
            $manager->persist($call);
        }

        // On déclenche l'enregistrement de toutes les catégories
        $manager->flush();
    }
}
