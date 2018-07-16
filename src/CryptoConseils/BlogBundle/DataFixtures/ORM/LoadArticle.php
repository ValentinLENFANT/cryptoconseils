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
            $this->getReference('image7'),
            $this->getReference('image8'),
            $this->getReference('image9'),
            $this->getReference('image10'),
            $this->getReference('image11'),
            $this->getReference('image12'),
            $this->getReference('image13'),
            $this->getReference('image14'),
            $this->getReference('image15'),
            $this->getReference('image16'),
            $this->getReference('image17'),
            $this->getReference('image18'),
        );

        $titles = array(
            'Le Bitcoin est-il toujours le roi de toutes les crypto-monnaies ?',
            'Etat des lieux du marché des crypto-monnaies',
            'Chute spectaculaire des cours : les crypto-monnaies survivront-elles ?',
            'Ethereum et Smart Contracts : que sont-ils ?',
            'Le bear market dure depuis maintenant 3 mois...',
            'Altcoins : vers une fin progressive ?',
            "L'institutionalisation des crypto-monnaies",
            "EOS et vulnérabilités : qu'en est-il réellement ?",
            'Le Bitcoin a chuté de près de 70% en 7 mois',
            'La fin du Bitcoin est-elle proche ?',
            'Bitcoin et monde réel : une impossible conciliation ?',
            'Le Bitcoin contre les banques : qui triomphera ?',
            'Ethereum : des failles de vulnérabilités béantes ?',
            'Crypto-monnaies : ont-elles vraiment du sens ?',
            "Impact des crypto-monnaies sur l'économie collaborative du XXIème siècle",
            "Est-ce que la bulle des crypto-monnaies est comparable à celle d'internet ?",
            'Bear Market V.S Bull Market',
            "2018 : l'année de la mort des crypto-monnaies ?",
            'SEC et régulations : quelles sanctions pour les scammers ?'
        );

        $author = array(
            'Valentin',
            'Aurélien',
            'Alexandre',
            'Guillaume'
        );

        $contents = array(
            'Le Bitcoin a vu sa dominance passer de 90% à 33% en quelques années.',

            'Le marché des crypto-monnaies se porte relativement bien malgré quelques facteurs inquiétants',

            'Le marché a connu une diminution de sa capitalisation totale de 65% en un mois',

            'Les smart contracts sont une des pierres angulaires de la crypto-monnaie Ethereum',

            'Le bear market dont la définition correspond à un marché à forte tendance baissière est présent depuis maintenant 3 mois',

            "Une altcoin est une monnaie alternative aux maincoins. Les mainscoins sont pricipalement les 10 premières crypto-monnaies en terme de capitalisation boursière. 
            Les altcoins ont eu le vent en poupe en 2017. Cependant, entre le mois de décembre 2017 et le mois de mars 2018, ces dernières ont fortement tremblées. 
            Doit-on y voir une mort progressive des altcoins en faveur des maincoins ? Nous ne pensons pas. 
            Cependant, nous pensons qu'il est inévitable que de nombreux 'shitcoins' disparaissent avec le temps.",

            "L'institutionalisation correspond au processus de formalisation, de pérennisation et d'acceptation d'un système.
            Ce phénomène s'observe progressivement au sein des crypto-monnaies.
            En effet, de plus en plus de banques s'intéressent aux crypto-monnaies et plus particulièrement au Ripple nommé à juste titre : 'La plus centrale des monnaies décentralisées;
            Pourquoi ce soudain intérêt de la part des institutions ? Car les crypto-monnaies font peur.
            Il faut ainsi distinguer 2 types d'instituions :
            1) Les etats
            2) Les banques
            La première souhaite réguler les crypto-monnaies car ces dernières représentent une menace potentielle à l'ordre économique et financier mondial
            Les deuxièmes car c'est une malle financière encore non maîtrisées.",

            "La société chinoise de recherche sur Internet et la cybersécurité 360 a signalé une série de vulnérabilités à haut risque dans la plate-forme blockchain EOS il y a quelques heures. 
            Selon la version chinoise de Twitter, Weibo, certaines de ces vulnérabilités peuvent exécuter à distance du code arbitraire sur le nœud EOS, ce qui signifie que les attaques à distance peuvent directement contrôler et prendre en charge tous les nœuds fonctionnant sur EOS.
            Les vulnérabilités de sécurité dans les monnaies numériques tendent à avoir des impacts beaucoup plus importants que celles associées aux logiciels habituels. En raison de sa nature décentralisée, une panne de sécurité dans un nœud peut se propager rapidement à tous les autres sur le réseau et provoquer l'attaque de milliers d'entre eux. Pendant l'attaque, le pirate peut publier et distribuer un contrat intelligent contenant du code malveillant ciblant la vulnérabilité.
            L'attaquant a alors un contrôle total sur le système nodal et peut voler des clés privées, des données utilisateur et contrôler toutes les transactions de crypto-monnaie en fonction du rapport. De plus, l'attaquant peut transformer un nœud sur le réseau EOS en membre d'un botnet, lancer une cyber-attaque, ou devenir un «mineur» gratuit et mimer d'autres cryptocurrences.
            Au moment de la rédaction, la nouvelle venait tout juste de sortir de Chine et sur Twitter et Reddit . L'équipe EOS n'a pas encore publié de réponse officielle, mais le prix du jeton a réagi instantanément en diminuant de 7% en moins d'une heure. EOS se négocie actuellement à 11,20 $, en baisse par rapport à son sommet mensuel de 19,3 $ le 3 mai.",

            "Le Bitcoin et l'ensemble du marché des cryptomonnaies ont connu ces dernières semaines leur chute la plus importante depuis 2013. Le Bitcoin est descendu à environ 6.000 dollars le 5 février, après avoir atteint 20.000 dollars début janvier.
            Et le Bitcoin a enregistré une rechute cette semaine après être remonté jusqu'à plus de 11.000 dollars. La semaine a en effet été riche en nouvelles inquiétantes, propageant le «FUD» (Fear, Uncertainity and Doubt, soit Peur, incertitude et doute).

            La principale fait état de la vente massive de Bitcoin par un administrateur japonais de l'ancienne plateforme de cryptomonnaies Mt Gox. Cette dernière fait l'objet d'une liquidation après le vol en 2014 de millions de dollars de Bitcoin, et il s'agissait de rembourser les utlisateurs floués, comme on peut le lire dans l'article ci-dessous.
            
            La veille, la rumeur du piratage de Binance, la principale plateforme d'échanges de cryptomonnaies, avait également effrayé les investisseurs. 

            Mais en réalité seuls les utilisateurs ayant recours à des «bots», des robots qui tradent automatiquement, ont été concernés. C'est donc l'un de ces bots a été hacké, et non la plateforme. C'est ce bot qui a tout vendu pour des Bitcoin, avant d'acheter des VIA.
            Dans le même temps, une autre plateforme, Bitmex, connaissait des problèmes techniques, et est restée inaccessible pendant quelques minutes.

            Autre élément inquiétant pour les investisseurs, quoiqu'il ne semble pas plus problématique pour eux que cela, la publication par les autorités financières américaines (la SEC) d'un rapport indiquant que certaines plateformes d'échanges de cryptomonnaies étaient dans l'illégalité, puisqu'elle n'étaient pnotamment pas enregistrée correctement.
            L'ensemble du marché avait atteint son plus bas niveau depuis le début du mois de décembre, plongeant sous la barre des 300 milliards de dollars environ alors qu'il avait dépassé les 800 milliards de dollars en début d'année.
            Mais la chute des cours amorcée en janvier répondait à d'autres explications que nous détaillerons dans un autre article.",

            "Une chute de plus de 60% en un mois : les investisseurs en cryptomonnaies vivent les premières semaines de 2018 comme une gueule de bois de Nouvel An qui ne s’arrêterait jamais. Mardi 6 février, le bitcoin est passé sous la barre des 5.000 euros revenant à son niveau d’octobre. La plupart des personnes qui ont investi lors du pic de décembre sont désormais en pertes et comptent leurs satoshis (la plus petite unité du bitcoin, soit 0,00000001 BTC). La capitalisation du secteur crypto ne vaut plus que 253 milliards d’euros contre 655 milliards début janvier. “La bulle a-t-elle éclaté ?”, “Disgrâce du bitcoin”, “Le bitcoin est la plus grosse bulle de l’histoire de l’humanité”, etc. On ne compte plus les titres de presse ou déclarations publiques annonçant sa mort. Une nouvelle fois.",

            "De l'ombre à la lumière. Petit à petit, le bitcoin s'affranchit du côté obscure du Web pour s'installer dans la vie de tous les jours. La crypto-monnaie perce désormais dans la poche des particuliers.  

            Voilà huit mois qu'aux Pays-Bas une petite start-up, Bitcoins4me, a installé des distributeurs automatiques dans le pays. En tout une dizaine de bornes où il est possible de retirer du cash et de déposer de l'argent frais pour créditer son compte virtuel en bitcoins. Mais dans le reste du monde, le phénomène prend de l'ampleur: plus de \"1778 distributeurs dans 58 pays\" sont aujourd'hui recensés par le site CoinATMRadar.
            \"C'est très facile à utiliser, explique à L'Express l'un des deux employés de la société Bitcoins4me installée à Brunssum, petite ville de 30 000 habitants, située au nord-est de Maastricht, à la frontière allemande. Vous allez à la machine et vous retirez votre cash. La plupart du temps, les gens retirent une centaine d'euros, mais ça peut être 500 ou 1000, il n'y a pas de règle\".
            A l'inverse, on peut aussi créditer son compte, sans aucun contrôle particulier. \"L'essence même du bitcoin c'est son aspect décentralisé. Il n'est pas anonyme, mais sous pseudonyme, ce qui est une grosse différence, rappelle Manuel Valente, fondateur de la Maison du Bitcoin, bureau parisien dédié à la monnaie virtuelle ouvert en 2014. Nous avions également un distributeur en libre-service, mais nous l'avons débranché pour des raisons de sécurité\".
            L'argent liquide est par définition intraçable et les autorités craignent que le bitcoin ne facilite le blanchiment. \"En France, il n'y a pas encore de véritable réglementation sur les bitcoins, mais nous avons fait le choix de privilégier les virements pour conserver des traces, renchérit Manuel Valente qui voit défiler dans son bureau tous les profils: \"des geeks de 20 ans, comme des ménagères de 50 ans. La plupart sont dans une logique spéculative, mais certains commerçants s'y mettent à leur tour\". 
            
            A Paris, un \"boulevard du bitcoin\" a même vu le jour dans un passage du 2e arrondissement, le Grand-Cerf. Dans sa boutique de vêtement sur-mesure, Yann Robert n'a pas hésité à sauter le pas. \"On s'est dit avec les autres commerçants du passage qu'en proposant le paiement par bitcoin à nos clients on dépoussiérerait les lieux, on attirerait une clientèle internationale. Si ce n'est pas la panacée, les retours sont plutôt positifs\", juge le fondateur la boutique Glasscove.
            
            La semaine dernière, c'est un Kenyan qui a poussé sa porte, venu spécialement après avoir consulté sur Internet un annuaire des magasins qui proposent ce type de paiement. \"On ne fait pas d'offre particulière, c'est juste une sorte de réseau comme les cartes JCB sur la clientèle asiatique, ou l'Amex pour les Américains\", fait remarquer Yann Robert qui vient justement de finir ses comptes.",

            "Bitcoin, la «monnaie du peuple», a le potentiel de devenir une nouvelle monnaie, sans contrôle des grands gouvernements et des grandes banques. C’est pourquoi ils veulent tous deux limiter ce potentiel. Chacun à leur manière. Les grands gouvernements en intensifiant la réglementation des offres initiales de pièces de monnaie (ICO) et en fermant les échanges de cryptocurrence, comme l’a annoncé récemment le gouvernement chinois, écrasant les cryptocurrences. Les grandes banques en attaquant la prémisse et la valorisation de Bitcoin. Au début de la semaine, par exemple, le leader de J.P. Morgan Chase & Co., Jamie Dimon, a qualifié la monnaie numérique d’une «fraude». Ensuite, il y a un sondage de Bank of America, qui s’appelle Bitcoin, le «commerce le plus fréquenté». Pour être juste, les banquiers ne sont pas les seuls à avoir soulevé leur scepticisme quant à l’ascension rapide de Bitcoin et d’autres monnaies numériques. Mais pour appeler la monnaie numérique, une fraude c est plus que du scepticisme, à mon avis. Cela nuit au potentiel de Bitcoin de devenir une «monnaie populaire» et de remplacer les monnaies nationales. Et c’est ce qui concerne les grands gouvernements et les grandes banques. Les grands gouvernements perdront le revenu des seigneuriaux - les avantages tirés de l’impression de l’argent, et ils perdront la capacité de contrôler l’économie. Perdre la capacité de gérer l’argent qui circule entre les banques centrales et l’économie est au cœur de l’activité bancaire et l’existence même de l’économie monétaire. Une économie de Bitcoin, par exemple, peut promulguer des prêts entre pairs qui substitue les prêts traditionnels, où les banques collectent le « taux d’intérêt», la différence entre le taux d’intérêt qu’ils facturent aux déposants et le taux qu’ils facturent aux emprunteurs. Pourtant, Apostolos Pittas, professeur adjoint d’économie à LIU Post, voit les prêts de Bitcoin compléter plutôt que de miner le système bancaire traditionnel. \"La monnaie numérique, comme c’est le cas avec Bitcoin, contribue à lisser le processus de prêt. Rappelons ce qui s’est passé en 2007-2008 pendant la crise financière. Le crédit s’est asséché lorsque les banques ont cessé de prêter, et les marchés ont gelé. Avec une monnaie numérique comme Bitcoin, le prêt est décentralisé, ou par pair, et, par conséquent, les prêts peuvent se poursuivre, permettant à l’argent d’atteindre ceux qui en ont besoin. Autrement dit, la montée de Bitcoin peut être un facteur stabilisant plutôt que déstabilisant le système financier. Apparemment, le grand gouvernement et les grandes banques ne voient pas les choses de cette façon en ce moment.",

            "12 détournements des smart-contracts sont actuellement répertoriés. Ils peuvent être considérés comme des potentielles attaques avec différents niveaux de gravité, nous allons nous attarder sur 3 d’entre eux en détaillant les failles et en exposant les dangers potentiels d’attaques exploitant ces failles.
            1) Call to the unknown
            2) Stack size limit
            3) Unpredictable state
            4) Etc.",

            "La controverse sur la notion de cryptomonnaies
            Qui dit monnaies, dit banque, qui dit banque dit banque centrale, comme dirait la chanson. Donc, seuls les instruments émis par les banques centrales mériteraient la dénomination de « monnaie » du fait que seule une banque centrale peut garantir l’émission de sa monnaie. En fait, on en revient à la question de la prérogative de « battre monnaie » ou le privilège d’ « émettre monnaie ».

            Constatons d’abord qu’il n’en fut pas toujours ainsi que si l’existence de la monnaie est – presque – aussi vieille que celle de l’Etat, il n’en est pas de même avec les banques centrales, institutions relativement récentes puisque le premier établissement à pouvoir être dénommé comme tel est la Banque d’Angleterre en 1694. En fait, il faut attendre le 19ème siècle pour que le pouvoir d’émission soit confié à une institution séparée de l’Etat.

            En encore, jusqu’au 20ème siècle, ces institutions n’étaient pas toutes des émanations de l’Etat, même si elles étaient dotées de privilèges : que l’on se souvienne de la répartition du capital de la banque de France jusqu’en 1945 aux mains d’actionnaires privés ou celui de la Federal Reserve Bank de New-York qui est détenu par les principales banques commerciales des Etats Unis. Bref, si les banques centrales ont pris depuis quelque temps une importance croissante dans l’économie et son financement, leur rôle en tant que tel est relativement récent aux yeux de l’histoire de l’humanité. Ce n’est donc pas tant le « pouvoir de battre monnaie » qui différencie une banque centrale d’une monnaie privée ou du Bitcoin (ou autre) ; mais plutôt la force libératoire de la monnaie reconnue par le droit.

            C’est parce que l’euro est la monnaie de la République Française qu’elle dispose de cette prérogative juridique que n’ont pas les Bitcoin et autre Ether. C’est en ce sens que l’on ne peut pas assimiler l’euro, le dollar ou autres devises à ces « cryptomonnaies » qui, pour leur part, ne disposent pas de cette caractéristique juridique essentielle ; ces « monnaies » ne sont que ces conventions monétaires entre des parties, convention qui n’est pas opposable aux tiers et qui surtout dépend du bon vouloir de chacune des parties de respecter la convention. Il n’en reste pas moins que celles-ci servent aujourd’hui de valeur d’échange, comme autrefois l’or, les coquillages ou autres biens précieux.

            Cette valeur d’échange n’a d’effet qu’entre des parties qui l’acceptent. Sans qu’il soit possible de se « libérer de sa dette » sous cette forme, sauf accord du créancier (on image mal un débiteur ayant réglé sa dette en bitcoin aller en justice pour faire reconnaitre qu’il s’est valablement libéré de sa dette si son créancier, après avoir reçu les bitcoins, considérait que ce paiement ne vaut pas libération de la dette). En fait, la caractéristique économique d’une monnaie réside dans son acceptation.

            Comme le dit l’économiste américain Hyman Minsky, “Everyone can create money; the problem is to get it accepted”[1]. Que l’on se souvienne des assignats sous la Révolution et de leur cours forcé mais qui ne furent jamais « accepté » comme monnaie, même avec une forte décote par rapport à ce cours légal.  C’est d’ailleurs bien là ce que soulignent tant le FMI que la BCE lorsqu’ils présentent les caractéristiques d’une monnaie[2].",

            "C’est en 2008, que l’on a vu émerger une autre nouvelle approche économique alternative avec la cryptomonnaie (Bitcoin) et les chaînes de blocs (Blockchain) avec le livre de Satoshi Nakamoto : « Bitcoin : A Peer-to-Peer Electronic Cash System ¨ [1]. Un ouvrage qui introduisait la notion d’économie de valeurs avec les chaînes de blocs. Il s’agit principalement d’un registre personnalisé (ledger) de gestion et d’échanges de biens et de services en ligne, qui se transigent directement de pair-à-pair, par le biais de cryptomonnaie, évitant ainsi l’intervention d’intermédiaires durant la transaction.
            Au début, ce nouveau système économique alternatif a pris un certain temps à s’imposer parce que cette nouvelle monnaie numérique n’offrait pas suffisamment de garanties tangibles. Et, les institutions bancaires et financières n’y ont pas accordés trop d’importance, jugeant qu’il s’agissait probablement d’un phénomène passager. Cependant, deux ans plus tard, lorsqu’un certain Lazlo a lancé sur les forums de discussions qu’il venait d’acheter et de payer une pizza avec des Bitcoins, la valeur de la crypto monnaie a rapidement commencée à augmenter.",

            "Le 29 novembre, le bitcoin a franchi le seuil symbolique des 10.000 dollars, soit une progression de plus de 1.000% depuis le début de l'année. La cryptomonnaie n'est pas restée perchée aussi haut très longtemps (elle vaut 9.547 $ le 30 novembre à 13h) mais une hausse aussi rapide est inhabituelle. A titre de comparaison, le Nasdaq avait mis cinq ans pour grimper de 700% entre janvier 1995 et mars 2000 juste avant l'éclatement de la bulle internet. En 1996, au moment de son introduction en bourse, Yahoo ! avait grimpé de 154%. Plus près de nous, en France, Plastivaloir a connu une hausse de 1.238% en cinq ans, Xilam animation +1.776% en trois ans et Catana group +488% l'an dernier.

            Le cas du bitcoin reste exceptionnel : ce n'est ni une action ni un indice mais une monnaie qui n'est régulée par aucune banque centrale. C'est un algorithme. Aujourd'hui, la capitalisation totale du bitcoin est estimée par CoinMarketCap à 160 milliards de dollars. La somme peut paraître importante mais le nombre de transactions en bitcoin est malgré tout dérisoire : 11 millions au second trimestre 2017 alors que Visa en réalisait 42 milliards sur la même période. Ces transactions ne sont pas gratuites : selon le Digiconomist qui publie un \"Bitcoin energy consumption index\", la crypto monnaie utilise l'équivalent de la consommation électrique du Maroc pour réaliser ses opérations et chiffre à 271 kWh la quantité d'électricité nécessaire à chaque transaction, cinquante fois plus que pour Visa.

            Une hausse en plusieurs vagues
            Et pourtant, il monte... Au cours des derniers mois, la hausse du bitcoin a connu plusieurs vagues. La première vient de Chine qui représentait jusqu'à 80% des échanges mondiaux. La réglementation chinoise a été tour à tour conciliante et restrictive, ce qui a entraîné des mouvements de capitaux brutaux sur le bitcoin, certains profitant d'un assouplissement réglementaire pour changer des yuans en bitcoin. Aujourd'hui, la Chine a durci sa législation, entraînant la fermeture de plusieurs plateformes.

            Le Japon a ensuite pris le relais en assurant jusqu'à 55% du volume des échanges juste avant l'été. L'engouement des japonais peut s'expliquer par la faiblesse des taux d'intérêt (parfois négatif) pratiqués par les banques nippones. Puis au mois de septembre, la hausse a été alimentée par les fonds d'investissements. Plus de 55 fonds en cryptomonnaie ont été lancés en 2017 et la plupart ont investi dans des ICO (initial coin offering) des levées de fonds plus ou moins semblable aux IPO (les entrées en Bourse), à la différence qu'elles se font en cryptomonnaie et pas en monnaie classique.

            L'engouement commence à toucher un public de plus en plus large. Pendant le week-end de Thanksgiving aux Etats-Unis, Coinbase, une plateforme d'échange en ligne, a ainsi enregistré 300.000 nouveaux utilisateurs. Et le bitcoin pourrait connaître une nouvelle fièvre avec le lancement de nouveaux produits financiers comme des contrats à terme ou des ETF. Le Nasdaq se prépare notamment à lancer des contrats à terme sur le bitcoin dès 2018 tandis que CME et CBOE, les deux principaux marchés à terme américain ont annoncé qu'ils allaient autoriser les investisseurs à miser sur les futurs prix du bitcoin.

            14 millions de portefeuilles dans le monde
            Pourtant le bitcoin compte finalement un nombre restreint d'utilisateurs. Une étude publiée fin avril 2017 par le Centre for alternative finance de la Judge Business School, l'école de commerce de l'université de Cambridge, estimait qu'il n'y avait à l'époque qu'entre 2,9 et 5,8 millions d'utilisateurs actifs d'une ou de plusieurs cryptomonnaies. 

            L'économiste Patrick Artus rappelle que le bitcoin peut monter indéfiniment, car la demande monte alors que l'offre est stable. De fait, le nombre de bitcoin est limité à 21 millions (il y en a 16.709.550 aujourd'hui) et il n'est pas possible théoriquement d'augmenter la masse monétaire. L'augmentation de la demande entraîne la hausse du prix, mais selon Patrick Artus, il s'agit d'une bulle spéculative qui finira mal. Pour lui, l'explosion de la bulle du bitcoin aura un impact sur l'économie car elle provoquera une évaporation de richesse.

            Au contraire, pour Thomas Glucksmann, chef du développement pour l'Asie-Pacifique à Gatecoin, le bitcoin est largement sous-évalué : \"si on regarde le potentiel à long terme de la technologie dans 10, 20 ou 30 ans, 10.000 dollars c'est bon marché\". Même son de cloche chez Christine Lagarde, directrice du FMI, pour qui le bitcoin et les autres cryptomonnaies ont autant d'avenir que l'Internet. Jean Tirole, prix Nobel d'économie, lui n'est pas convaincu : \"c'est quelque chose qui n'a pas de valeur intrinsèque qui peut s'effondrer du jour au lendemain\".",

            "On utilise l’expression bull market (littéralement en anglais « marché des taureaux ») pour représenter un marché fortement haussier, de l’ordre d’au moins 20%.
            On utilise le terme « bull » (taureau) car le taureau attaque avec ses cornes en frappant du bas vers le haut.

            A l’inverse, on utilise l’expression bear market (littéralement en anglais « marché des ours ») pour caractériser un marché baissier d’au moins 20%. Un bear market peut dans certains cas être suivi d’un krach boursier.
            On utilise le terme « bear » (ours) car un ours attaque toujours du haut vers le bas.",

            "Prendre un peu de recul. C’est sans doute ce qu’il convient de faire alors que le Bitcoin a connu l’une des chutes les plus importantes de son histoire, en passant sous le seuil des 8000 dollars hier après-midi. Et puisque beaucoup prédisent la mort imminente de l’actif numérique, il peut être intéressant de remettre les choses en perspective.
            Ils se frottent les mains : ceux qui avaient évoqué la présence d’une bulle spéculative sur le marché du Bitcoin semblent – à première vue, mais aussi dans une optique de moyen terme – avoir vu juste. Et de nombreux médias ont évoqué un bain de sang, en indiquant que les investisseurs avaient « perdu » près de 87 milliards de dollars cette année.

            Car après avoir franchi pour la première fois le seuil des 20 000 dollars le 17 décembre dernier, le Bitcoin fait grise mine. L “actif numérique avait plongé vendredi après-midi jusqu’à 7796 dollars – soit une baisse d’un peu plus de 61% par rapport à ce record historique.

            Depuis, les marchés ont rebondi – lors de la rédaction de cet article, le Bitcoin s’échangeait à 8940 dollars, avec une baisse qui n’était « plus » que de 55% depuis son record de décembre.

            Afin de savoir jusqu’où cette baisse pourrait mener, il peut être intéressant de se tourner vers les précédentes corrections subies par l’actif.

            On peut tout d’abord évoquer plusieurs dépréciations importantes, mais moins sévères que celle à laquelle nous avons pu assister ces dernières semaines.

            On se souvient de la chute de 2012, consécutive à l’attaque subie par l’hébergeur Linode, qui offrait ses services à plusieurs plateformes d’échange. Les marchés Bitcoin avaient alors perdu 36% de leur valeur.

            On peut également évoquer la faillite de Mt. Gox (-49%), ou encore la baisse liée à la décision de la Chine de mettre un terme à l’activité des plateformes d’échange en septembre 2017 (-40%).
            Mais surtout, le Bitcoin a déjà connu trois correction significatives, bien plus importantes que celle enregistrée fin 2017-début 2018.

            En 2011, la monnaie numérique avait perdu 94% de sa valeur après le premier piratage de la plateforme Mt. Gox. Cette dernière avait également été à l’origine d’une autre baisse, cette fois de 79%, après avoir interrompu ses services d’échange en 2013.

            Enfin, la valeur du Bitcoin avait plongé de plus de 87% entre novembre 2013 et janvier 2015.

            Et d’autres corrections majeures ont été enregistrées, poussant certains observateurs à estimer qu’il était temps de dire adieu à l’actif numérique.
            
            Mais il y a de quoi rester optimiste.
            
            En prenant un peu de recul, on réalise que le Bitcoin s’échangeait, il y a tout juste un an, à 1023 dollars. Il enregistre ainsi toujours une hausse de 760% – qui, même si elle est impressionnante, a été dépassée par de nombreuses crypto-monnaies.

            Et comme l’indiquait récemment l’analyste financier Tom Lee, les fortes baisses du Bitcoin de ces dernières années « ont été suivies par des flambées d’environ 150% dans les 84 jours suivants ». C’est d’ailleurs ce qui a poussé le directeur de la recherche de Fundstrat Global Advisors à inviter jeudi dernier ses clients à renforcer leur position sur l’actif numérique.

            Sauf qu’on le sait : les performances passées ne préjugent pas des performances futures. Et l’on ne peut s’assurer d’une flambée imminente de la monnaie numérique.

            Mais alors qu’il est toujours associé à une « Market Cap » de plus de 145 milliards de dollars, que les frais de transaction ont considérablement diminué sur son réseau, et que des solutions de « scaling » comme le Lightning Network commencent à pointer le bout de leur nez, le Bitcoin est sans doute loin d’avoir dit son dernier mot.",

            "Souvent tapis dans l’ombre des marchés, les organismes de contrôle et de régulation jouent un rôle primordial dans le bon fonctionnement et la sécurité des systèmes financiers. Si les noms de la SEC ou de l’AMF reviennent régulièrement dans les médias, qui sont exactement les principaux régulateurs ? Quels sont les objectifs que se sont fixés les autorités des marchés financiers ?

            En France, l’Autorité des Marchés Financiers (AMF) possède un large pouvoir sur les marchés financiers réglementés et les marchés non réglementés. Ayant vu le jour par décret en 2003, elle agit aujourd’hui en tant qu’autorité publique indépendante et collabore avec l’Autorité de contrôle prudentiel (ACP). Près de 470 personnes, issues de différents corps de métier (banques, audit, avocats, ministères, chancelleries) concourent à son fonctionnement. L’AMF résulte de la fusion du Conseil des marchés financiers (CMF), de la Commission des opérations de bourse (COB) et du Conseil de discipline de la gestion financière (CDGF). Ses principales missions sont de veiller à la protection de l’épargne, à l’information des investisseurs et au bon fonctionnement des marchés.

            Aux Etats-Unis, la fameuse U.S. Securities and Exchange Commission (SEC) a un profil similaire à celui de l’AMF. Elle est connue pour avoir été à l’origine de nombreuses lois financières majeures telles que le Securities Act (1933), le Securities Exchange Act (1934), le Trust Indenture Act (1939), l’Investment Company Act (1940), l’Investment Advisers Act (1940), ou le Sarbanes-Oxley Act (2002). Ces lois ont inspiré nombre d’organismes en dehors du territoire américain. Malgré ses pouvoirs, la SEC n’a cependant pu passer à côté de scandales majeurs tels que l’Affaire Madoff ou l’affaire Stanford. Son pouvoir n’est pas unique sur les marchés. La Commodity Futures Trading Commission (CFTC), créée en 1974, s’occupe du marché des futures, et veille à ce que les contrats qui y sont négociés soient transparents et que les prises de positions importantes soient connues des autres intervenants. Autre autorité importante, la Financial Industry Regulatory Authority, Inc. (FINRA) fait office d’organisation d’autorégulation. Dans un rôle similaire à celui de la SEC et grâce à ses 3.400 agents, elle supervise plus de 4.250 entreprises d’intermédiation, 162.000 succursales et près de 630.000 employés financiers.",
        );

        $date = new \Datetime();

        $published = 1;

        for ($i = 0; $i < count($titles); $i++) {
            // On crée la catégorie
            $article = new article();
            $article->setImage($images_id[rand(0, 7)]);
            $article->setTitle($titles[$i]);
            $article->setAuthor($author[rand(0, 3)]);
            $article->setContent($contents[$i]);
            $article->setDate($date);
            $article->setPublished($published);
            $article->setPremium(rand(0, 5));
            $this->addReference('article' . $i, $article);

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