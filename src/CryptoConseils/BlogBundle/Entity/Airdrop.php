<?php
/**
 * Created by PhpStorm.
 * User: Valentin LENFANT
 * Date: 12/07/2018
 * Time: 11:04
 */

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
 * Airdrop
 *
 * @ORM\Table(name="airdrop")
 * @ORM\Entity(repositoryClass="CryptoConseils\BlogBundle\Repository\AirdropRepository.php")
 *
 */
class Airdrop
{
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
     * @ORM\Column(name="beginDate", type="datetime", nullable=true)
     * @Assert\DateTime()
     */
    private $beginDate;

    /**
     * @var datetime_immutable
     * @ORM\Column(name="endDate", type="datetime", nullable=true)
     * @Assert\DateTime()
     */
    private $endDate;

    /**
     * @var string
     * @ORM\Column(name="type", type="string", nullable=true)
     */
    private $type;

    /**
     * @var string
     * @ORM\Column(name="cryptocurrencyName", type="string")
     */
    private $cryptocurrencyName;

    /**
     * @var string
     * @ORM\Column(name="content", type="string")
     */
    private $content;

    /**
     * @var boolean
     * @ORM\Column(name="isAirdropFree", type="boolean")
     */
    private $isAirdropFree;

    /**
     * @var integer
     * @ORM\Column(name="reward", type="integer")
     */
    private $reward;

    /**
     * @return int
     */
    public function getReward()
    {
        return $this->reward;
    }

    /**
     * @param int $reward
     */
    public function setReward($reward)
    {
        $this->reward = $reward;
    }

    /**
     * @return bool
     */
    public function isAirdropFree()
    {
        return $this->isAirdropFree;
    }

    /**
     * @param bool $isAirdropFree
     */
    public function setIsAirdropFree($isAirdropFree)
    {
        $this->isAirdropFree = $isAirdropFree;
    }

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
    public function getBeginDate()
    {
        return $this->beginDate;
    }

    /**
     * @param datetime_immutable $beginDate
     */
    public function setBeginDate($beginDate)
    {
        $this->beginDate = $beginDate;
    }

    /**
     * @return datetime_immutable
     */
    public function getEndDate()
    {
        return $this->endDate;
    }

    /**
     * @param datetime_immutable $endDate
     */
    public function setEndDate($endDate)
    {
        $this->endDate = $endDate;
    }

    /**
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param string $type
     */
    public function setType($type)
    {
        $this->type = $type;
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
}