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
            "ETHBTC",
            "XRPBTC",
            "EOSBRC",
            "TRXBTC",
            "NEOBTC"
        );

        $cryptocurrencyName = array(
            "Bitcoin/Dollar",
            "Bitcoin/Ethereum",
            "Bitcoin/Ripple",
            "Bitcoin/EOS",
            "Bitcoin/Tron",
            "Bitcoin/Neo",
        );

        $content = array(
            "On constate actuellement un très bon point d'entrée pour le Bitcoin. Acheter maintenant semble être une bonne idée.",
            "L'Ethereum, suite à sa très forte perte de valeur, peut être acheté bas pour une revente sûre à un prix beaucoup plus élevé d'ici à la fin de l'année",
            "Ripple, l'éternel outsider centralisé pourrait avoir un bon point d'entrée en raison de l'explosion récente du volume.",
            "Des gains de l'ordre de 20% sont à prevoir grâce au margin trading.",
            "Tron, l'éternel terrain de jeu des whales est idéal pour du margin trading.",
            "Neo a prouvé sa fiabilité et sa place dans le top 10. Nous recommandons un investissement de moyen terme."
        );

        $buyPrice = array(
            "6600",
            "470",
            "0.47",
            "8",
            "0.036",
            "36"
        );

        $sellPrice = array(
            "7100",
            "550",
            "0.55",
            "12",
            "0.0040",
            "80"
        );

        $scoring = array(
            "88",
            "93",
            "70",
            "80",
            "65",
            "95"
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
