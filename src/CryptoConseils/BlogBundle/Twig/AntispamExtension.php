<?php

namespace CryptoConseils\BlogBundle\Twig;

use CryptoConseils\BlogBundle\Antispam\CryptoConseilsAntispam;

class AntispamExtension extends \Twig_Extension
{
    /**
     * @var CryptoConseilsAntispam
     */
    private $cryptoconseilsAntispam;

    public function __construct(CryptoConseilsAntispam $cryptoConseilsAntispam)
    {
        $this->cryptoconseilsAntispam = $cryptoConseilsAntispam;
    }

    public function checkIfArgumentIsSpam($text)
    {
        return $this->cryptoconseilsAntispam->isSpam($text);
    }

    public function getFunctions()
    {
        return array(
            new \Twig_SimpleFunction('checkIsSpam', array($this, 'checkIfArgumentIsSpam')),
        );
    }

    public function getName()
    {
        return 'CryptoConseilsAntispam';
    }
}