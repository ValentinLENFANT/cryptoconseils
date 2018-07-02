<?php

namespace CryptoConseils\UserBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use FOS\UserBundle\Model\User as BaseUser;

/**
 * User
 *
 * @ORM\Table(name="users")
 * @ORM\Entity
 */
class User extends BaseUser
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @var integer
     * @ORM\Column(name="premiumLevel", type="integer")
     */
    private $premiumLevel;

    /**
     * @return int
     */
    public function getPremiumLevel()
    {
        return $this->premiumLevel;
    }

    /**
     * @param int $premiumLevel
     */
    public function setPremiumLevel($premiumLevel)
    {
        $this->premiumLevel = $premiumLevel;
    }


    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }
}