<?php
namespace CryptoConseils\BlogBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation\ExclusionPolicy;
use JMS\Serializer\Annotation\Expose;
use Doctrine\Common\Collections\ArrayCollection;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * Comment
 *
 * @ORM\Table(name="comment")
 * @ORM\Entity(repositoryClass="CryptoConseils\BlogBundle\Repository\CommentRepository")
 * @ORM\HasLifecycleCallbacks()
 *
 */
class Comment
{
    /**
     * @ORM\ManyToOne(targetEntity="CryptoConseils\BlogBundle\Entity\Article", inversedBy="comments")
     * @ORM\JoinColumn(nullable=false)
     */
    private $article;

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
     *
     *
     *
     * @Expose
     */
    private $id;


    /**
     * @var int
     *
     * @ORM\Column(name="article_id", type="integer")
     *
     */
    private $article_id;


    /**
     * @var string
     *
     * @ORM\Column(name="author", type="string", length=255)
     *
     *
     *
     * @Expose
     */
    private $author;


    /**
     * @var string
     *
     * @ORM\Column(name="content", type="text")
     *
     *
     *
     * @Expose
     */
    private $content;


    /**
     * @var datetime_immutable
     *
     * @ORM\Column(name="date", type="datetime")
     *
     *
     *
     *
     * @Expose
     */
    private $date;

    /**
     * @var int
     * @ORM\Column(name="user_id", type="integer")
     */
    private $user_id;

    /**
     * @var boolean
     * @ORM\Column(name="published", type="boolean")
     */
    private $published;

    /**
     * @return bool
     */
    public function isPublished()
    {
        return $this->published;
    }

    /**
     * @param bool $published
     */
    public function setPublished($published)
    {
        $this->published = $published;
    }

    /**
     * @return int
     */
    public function getUserId()
    {
        return $this->user_id;
    }

    /**
     * @param int $user_id
     */
    public function setUserId($user_id)
    {
        $this->user_id = $user_id;
    }

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
     * Set article_id.
     *
     * @param int $article_id
     *
     * @return Comment
     */
    public function setArticleId($article_id)
    {
        $this->article_id = $article_id;
        return $this;
    }
    /**
     * Get article_id.
     *
     * @return int
     */
    public function getArticleId()
    {
        return $this->article_id;
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
     * @param \CryptoConseils\BlogBundle\Entity\Article $article
     *
     * @return Comment
     */
    public function setArticle(\CryptoConseils\BlogBundle\Entity\Article $article)
    {
        $this->article = $article;
        return $this;
    }
    /**
     * Get advert.
     *
     * @return \CryptoConseils\BlogBundle\Entity\Article
     */
    public function getArticle()
    {
        return $this->article;
    }

}