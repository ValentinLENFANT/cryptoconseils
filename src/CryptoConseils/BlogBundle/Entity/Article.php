<?php

namespace CryptoConseils\BlogBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * Article
 *
 * @ORM\Table(name="article")
 * @ORM\Entity(repositoryClass="CryptoConseils\BlogBundle\Repository\ArticleRepository")
 */
class Article
{
    /**
     * @ORM\OneToOne(targetEntity="CryptoConseils\BlogBundle\Entity\Image", cascade={"persist"})
     */
    private $image;
    /**
     * @ORM\ManyToMany(targetEntity="CryptoConseils\BlogBundle\Entity\Category", cascade={"persist"})
     */
    private $categories;

    /**
     * @ORM\OneToMany(targetEntity="CryptoConseils\BlogBundle\Entity\Comment", mappedBy="article")
     */
    private $comments;

    public function __construct()
    {
        $this->date = new \DateTime();
        $this->categories = new ArrayCollection();
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
     *
     * @ORM\Column(name="Title", type="string", length=255, unique=true)
     */
    private $title;

    /**
     * @var string
     *
     * @ORM\Column(name="Author", type="string", length=255)
     */
    private $author;

    /**
     * @var string
     *
     * @ORM\Column(name="Content", type="text")
     */
    private $content;

    /**
     * @var datetime_immutable
     *
     * @ORM\Column(name="Date", type="datetime")
     */
    private $date;

    /**
     * @ORM\Column(name="published", type="boolean")
     */
    private $published = true;

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
     * Set title.
     *
     * @param string $title
     *
     * @return Article
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get title.
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set author.
     *
     * @param string $author
     *
     * @return Article
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
     * @return Article
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
     * @return Article
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
     * Set published.
     *
     * @param bool $published
     *
     * @return Article
     */
    public function setPublished($published)
    {
        $this->published = $published;

        return $this;
    }

    /**
     * Get published.
     *
     * @return bool
     */
    public function getPublished()
    {
        return $this->published;
    }

    /**
     * Set image.
     *
     * @param \CryptoConseils\BlogBundle\Entity\Image|null $image
     *
     * @return Article
     */
    public function setImage(\CryptoConseils\BlogBundle\Entity\Image $image = null)
    {
        $this->image = $image;

        return $this;
    }

    /**
     * Get image.
     *
     * @return \CryptoConseils\BlogBundle\Entity\Image|null
     */
    public function getImage()
    {
        return $this->image;
    }

    /**
     * Add category.
     *
     * @param \CryptoConseils\BlogBundle\Entity\Category $category
     *
     * @return Article
     */
    public function addCategory(\CryptoConseils\BlogBundle\Entity\Category $category)
    {
        $this->categories[] = $category;

        return $this;
    }

    /**
     * Remove category.
     *
     * @param \CryptoConseils\BlogBundle\Entity\Category $category
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeCategory(\CryptoConseils\BlogBundle\Entity\Category $category)
    {
        return $this->categories->removeElement($category);
    }

    /**
     * Get categories.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getCategories()
    {
        return $this->categories;
    }

    /**
     * Add comment.
     *
     * @param \CryptoConseils\BlogBundle\Entity\Comment $comment
     *
     * @return Article
     */
    public function addComment(\CryptoConseils\BlogBundle\Entity\Comment $comment)
    {
        $this->comments[] = $comment;

        $comment->setArticle($this);

        return $this;
    }

    /**
     * Remove comment.
     *
     * @param \CryptoConseils\BlogBundle\Entity\Comment $comment
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeComment(\CryptoConseils\BlogBundle\Entity\Comment $comment)
    {
        return $this->comments->removeElement($comment);
    }

    /**
     * Get comments.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getComments()
    {
        return $this->comments;
    }
}
