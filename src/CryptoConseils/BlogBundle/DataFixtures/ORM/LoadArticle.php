<?php
// src/CryptoConseils/BlogBundle/DataFixtures/ORM/LoadArticle.php

namespace CryptoConseils\BlogBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\Persistence\ObjectManager;
use CryptoConseils\BlogBundle\Entity\Article;
use Symfony\Component\Validator\Constraints\Date;
use Symfony\Component\VarDumper\Cloner\Data;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;

class LoadArticle extends AbstractFixture implements OrderedFixtureInterface
{
    // Dans l'argument de la méthode load, l'objet $manager est l'EntityManager
    public function load(ObjectManager $manager)
    {
        // Liste des noms de catégorie à ajouter
        $images_id = array(
            $this->getReference('image0'),
            $this->getReference('image1'),
            $this->getReference('image2'),
            $this->getReference('image3'),
            $this->getReference('image4'),
            $this->getReference('image5'),
            $this->getReference('image6'),
            $this->getReference('image7')
        );

        $titles = array(
            'Le Bitcoin est-il toujours le roi de toutes les crypto-monnaies ?',
            'Etat des lieux du marché des crypto-monnaies',
            'Chute spectaculaire des cours : les crypto-monnaies survivront-elles ?',
            'Ethereum et Smart Contracts : que sont-ils ?',
            'Le bear market dure depuis maintenant 3 mois...',
            'Lorem ipsum dolor sit amet ?',
            'Curabitur elementum ut ex quis finibus.',
            'Donec diam ipsum, pretium vitae eros non'
        );

        $author = 'Valentin';

        $contents = array(
            'Le Bitcoin a vu sa dominance passer de 90% à 33% en quelques années.',
            'Le marché des crypto-monnaies se porte relativement bien malgré quelques facteurs inquiétants',
            'Le marché a connu une diminution de sa capitalisation totale de 65% en un mois',
            'Les smart contracts sont une des pierres angulaires de la crypto-monnaie Ethereum',
            'Le bear market dont la définition correspond à un marché à forte tendance baissière est présent depuis maintenant 3 mois',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies ipsum vel ligula faucibus commodo. Aliquam at mauris rutrum, imperdiet tortor scelerisque, condimentum ipsum. Suspendisse sollicitudin massa vitae justo mollis egestas. Nunc et vehicula purus. Etiam rhoncus dolor eu eros eleifend, sed lacinia nulla mattis. Fusce convallis sapien quis dolor gravida efficitur. Nunc in accumsan nulla. Donec euismod justo ac gravida iaculis. Integer at aliquet dui. Maecenas id erat tellus. Quisque ut nunc leo. Suspendisse nec enim dolor. Morbi et arcu eleifend, pellentesque felis et, interdum mi.

            Pellentesque auctor sem vitae pulvinar rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id lorem finibus orci blandit sagittis vitae a ligula. Integer sit amet nunc eros. Aenean luctus eget enim at gravida. Proin aliquet eros ut lacinia fermentum. Vestibulum sodales enim ex, vel bibendum eros cursus ac. Phasellus interdum imperdiet egestas. Vestibulum suscipit finibus enim. Curabitur tempus justo sed justo semper, a imperdiet nisl congue. Nam nisl metus, accumsan eget enim eu, elementum finibus diam. Nullam fermentum velit vitae sapien semper sagittis. Phasellus finibus tellus erat, in mattis augue vestibulum nec. Morbi magna ligula, vestibulum ut faucibus sed, luctus id ex. Mauris fermentum nulla sapien, non dictum arcu sodales nec. Suspendisse eleifend eleifend nibh, in facilisis velit tincidunt nec.

            Maecenas tempus mattis sem. Donec viverra elementum facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris accumsan metus nunc, eu rutrum libero bibendum quis. Aliquam sit amet leo tortor. Pellentesque pretium maximus cursus. Praesent lectus libero, condimentum sed tincidunt sit amet, consequat in purus. Nam lacinia quam et purus aliquam aliquet. Integer risus augue, sodales et sapien sit amet, finibus posuere nulla. Proin ullamcorper risus tortor, faucibus dapibus magna gravida et. Nullam at augue dui. Suspendisse rhoncus tempor est non convallis. Proin ullamcorper consequat ante at ornare. Fusce porttitor non arcu eleifend vehicula. Donec neque mi, hendrerit vitae volutpat vitae, congue vitae dolor.

            Vestibulum lorem elit, pulvinar sed posuere in, imperdiet quis diam. Nulla facilisi. Praesent ut lectus cursus neque efficitur semper sit amet nec justo. Vivamus eget ipsum felis. Nam nec volutpat quam. Phasellus a ligula porttitor, sagittis nunc ac, accumsan tortor. Cras in fermentum elit. Phasellus et mauris leo. Nulla orci risus, tempor vitae sem at, fermentum lobortis mauris. Phasellus sed felis ac arcu ultrices efficitur eu sit amet lectus. Suspendisse eu ex urna. Donec non leo id sem porttitor vulputate. Proin quis tellus maximus, porta arcu laoreet, aliquet libero.

            Nullam eu pulvinar metus, sed rutrum ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut quis ultricies mauris. Quisque tristique rhoncus neque ac tempus. Vivamus in orci id purus scelerisque bibendum. Duis in molestie lorem. Nam porttitor felis id ante aliquet, eu luctus mauris pretium. Cras vel velit feugiat, porta lacus vitae, pretium augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque dui turpis, sodales quis faucibus ut, porttitor id quam. Integer cursus suscipit lectus, a imperdiet nibh vulputate a. Nulla sit amet massa pretium, pellentesque turpis nec, gravida lacus. Ut ligula massa, volutpat a sapien non, malesuada sodales sem.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum ut ex quis finibus. Donec sollicitudin urna eu sodales sollicitudin. Cras imperdiet, est consectetur euismod ultrices, dolor nibh hendrerit enim, in tempus justo lacus at velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies quam vel molestie fermentum. Donec sed quam dapibus, mattis felis non, viverra arcu. In pellentesque diam vitae efficitur convallis. Fusce ultrices viverra erat id imperdiet. Vestibulum in accumsan massa.

            Aenean sed nisi mi. Pellentesque a viverra mauris. In eu enim leo. Quisque vel mollis lorem. Curabitur euismod viverra diam eu tempus. Etiam convallis lacus et tortor venenatis ultricies. Suspendisse potenti. Mauris sed tincidunt erat.
            Vivamus mollis quam nec euismod maximus. Sed id eleifend tortor. Integer ac bibendum augue. In dictum maximus dignissim. Donec at lacinia nisl. Cras maximus egestas nisi fringilla venenatis. Nulla tempor facilisis tempus. Maecenas id dolor sed leo congue aliquam mattis non lacus. Pellentesque varius, elit id interdum vulputate, sapien nulla commodo lectus, ac accumsan erat ex id lorem. Duis posuere leo quis odio vehicula molestie.
            Donec ultrices gravida nisi vitae laoreet. Nunc aliquet nibh nec leo semper, sed consequat justo blandit. Sed tincidunt urna tristique gravida posuere. Morbi nec urna et nunc aliquam venenatis. Aenean suscipit lorem a purus iaculis condimentum. Duis ultricies a risus vitae fringilla. Ut dolor est, facilisis non congue at, pretium eget risus. Morbi bibendum augue sit amet blandit iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec at bibendum leo. Nam nec vestibulum ex. Ut convallis ligula erat, et sollicitudin odio convallis nec. Morbi vel ligula imperdiet, dignissim velit ac, mattis arcu. Cras est lectus, mollis mollis fringilla non, consectetur at lorem. Curabitur sit amet ante ut quam congue accumsan. Sed pulvinar quam erat. Aliquam sit amet interdum sem.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu rutrum velit, id mattis augue. In viverra cursus lorem id accumsan. Pellentesque varius, urna sed maximus vestibulum, quam augue pretium lectus, id luctus purus felis quis ex. Morbi et pulvinar erat, ut tempor nulla. Proin eleifend mi porta purus vehicula, vitae iaculis augue aliquet. Fusce erat orci, ornare in leo at, tincidunt volutpat felis. Suspendisse bibendum eros quam, sit amet pharetra diam mattis a. Aliquam posuere vel lorem eget mollis. Donec lacinia magna tortor. Sed semper est nisl, vel porttitor nisi iaculis id. Donec diam ipsum, pretium vitae eros non.'
        );

        $date = new \Datetime();

        $published = 1;

        for ($i = 0; $i < count($images_id); $i++) {
            // On crée la catégorie
            $article = new article();
            $article->setImage($images_id[$i]);
            $article->setTitle($titles[$i]);
            $article->setAuthor($author);
            $article->setContent($contents[$i]);
            $article->setDate($date);
            $article->setPublished($published);
            $article->setPremium(rand(0, 5));
            $this->addReference('article'.$i, $article);

            // On la persiste
            $manager->persist($article);
        }

        // On déclenche l'enregistrement de toutes les catégories
        $manager->flush();
    }

    public function getOrder()
    {
        return 3;
    }
}