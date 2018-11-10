<?php

namespace CryptoConseils\BlogBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use CryptoConseils\BlogBundle\Validator\Antiflood;
use JMS\Serializer\Annotation\Expose;
use CryptoConseils\BlogBundle\Repository\CallsRepository;

/**
 * Calls
 *
 * @ORM\Table(name="calls")
 * @ORM\Entity(repositoryClass="CryptoConseils\BlogBundle\Repository\CallsRepository.php")
 *
 */
class Calls
{
    public function __construct()
    {
        $this->date = new \DateTime();
    }

    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(name="author", type="string", nullable=true)
     */
    private $author;

    /**
     * @var datetime_immutable
     * @ORM\Column(name="date", type="datetime", nullable=true)
     * @Assert\DateTime()
     */
    private $date;

    /**
     * @var string
     *
     * @ORM\Column(name="cryptocurrencyPair", type="string")
     */
    private $cryptocurrencyPair;

    /**
     * @var string
     * @ORM\Column(name="cryptocurrencyName", type="string")
     */
    private $cryptocurrencyName;

    /**
     * @var string
     * @ORM\Column(name="content", type="string", length=300)
     * @Assert\Length(max=300)
     */
    private $content;

    /**
     * @var float
     * @ORM\Column(name="buyPrice", type="float")
     */
    private $buyPrice;

    /**
     * @var float
     * @ORM\Column(name="sellPrice", type="float")
     */
    private $sellPrice;

    /**
     * @return int
     */

    /**
     * @var int
     * @ORM\Column(name="scoring", type="integer")
     */
    private $scoring;

    /**
     * @var boolean
     * @ORM\Column(name="isCallFree", type="boolean")
     */
    private $isCallFree;

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return string
     */
    public function getAuthor()
    {
        return $this->author;
    }

    /**
     * @param string $author
     */
    public function setAuthor($author)
    {
        $this->author = $author;
    }

    /**
     * @return datetime_immutable
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * @param datetime_immutable $date
     */
    public function setDate($date)
    {
        $this->date = $date;
    }

    /**
     * @return string
     */
    public function getCryptocurrencyPair()
    {
        return $this->cryptocurrencyPair;
    }

    /**
     * @param string $cryptocurrencyPair
     */
    public function setCryptocurrencyPair($cryptocurrencyPair)
    {
        $this->cryptocurrencyPair = $cryptocurrencyPair;
    }

    /**
     * @return string
     */
    public function getCryptocurrencyName()
    {
        return $this->cryptocurrencyName;
    }

    /**
     * @param string $cryptocurrencyName
     */
    public function setCryptocurrencyName($cryptocurrencyName)
    {
        $this->cryptocurrencyName = $cryptocurrencyName;
    }

    /**
     * @return string
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * @param string $content
     */
    public function setContent($content)
    {
        $this->content = $content;
    }

    /**
     * @return float
     */
    public function getBuyPrice()
    {
        return $this->buyPrice;
    }

    /**
     * @param float $buyPrice
     */
    public function setBuyPrice($buyPrice)
    {
        $this->buyPrice = $buyPrice;
    }

    /**
     * @return float
     */
    public function getSellPrice()
    {
        return $this->sellPrice;
    }

    /**
     * @param float $sellPrice
     */
    public function setSellPrice($sellPrice)
    {
        $this->sellPrice = $sellPrice;
    }

    /**
     * @return int
     */
    public function getScoring()
    {
        return $this->scoring;
    }

    /**
     * @param int $scoring
     */
    public function setScoring($scoring)
    {
        $this->scoring = $scoring;
    }

    /**
     * @return bool
     */
    public function isCallFree()
    {
        return $this->isCallFree;
    }

    /**
     * @param bool $isCallFree
     */
    public function setIsCallFree($isCallFree)
    {
        $this->isCallFree = $isCallFree;
    }
}