<?php

namespace CryptoConseils\BlogBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Comment
 *
 * @ORM\Table(name="comment")
 * @ORM\Entity(repositoryClass="CryptoConseils\BlogBundle\Repository\CommentRepository")
 */
class Comment
{
    /**
     * @ORM\ManyToOne(targetEntity="CryptoConseils\BlogBundle\Entity\Article")
     * @ORM\JoinColumn(nullable=false)
     */
    private $advert;

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
     *
     * @ORM\Column(name="author", type="string", length=255)
     */
    private $author;

    /**
     * @var string
     *
     * @ORM\Column(name="content", type="text")
     */
    private $content;

    /**
     * @var datetime_immutable
     *
     * @ORM\Column(name="date", type="datetime_immutable")
     */
    private $date;


    /**
     * Get id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set author.
     *
     * @param string $author
     *
     * @return Comment
     */
    public function setAuthor($author)
    {
        $this->author = $author;

        return $this;
    }

    /**
     * Get author.
     *
     * @return string
     */
    public function getAuthor()
    {
        return $this->author;
    }

    /**
     * Set content.
     *
     * @param string $content
     *
     * @return Comment
     */
    public function setContent($content)
    {
        $this->content = $content;

        return $this;
    }

    /**
     * Get content.
     *
     * @return string
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * Set date.
     *
     * @param datetime_immutable $date
     *
     * @return Comment
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get date.
     *
     * @return datetime_immutable
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set advert.
     *
     * @param \CryptoConseils\BlogBundle\Entity\Article $advert
     *
     * @return Comment
     */
    public function setAdvert(\CryptoConseils\BlogBundle\Entity\Article $advert)
    {
        $this->advert = $advert;

        return $this;
    }

    /**
     * Get advert.
     *
     * @return \CryptoConseils\BlogBundle\Entity\Article
     */
    public function getAdvert()
    {
        return $this->advert;
    }
}
