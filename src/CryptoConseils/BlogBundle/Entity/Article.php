<?php

namespace CryptoConseils\BlogBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use CryptoConseils\BlogBundle\Validator\Antiflood;
use JMS\Serializer\Annotation\Expose;

/**
 * Article
 *
 * @ORM\Table(name="article")
 * @ORM\Entity(repositoryClass="CryptoConseils\BlogBundle\Repository\ArticleRepository")
 * @ORM\HasLifecycleCallbacks()
 *
 */
class Article
{
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
     * @ORM\Column(name="Title", type="string", length=255)
     * @Assert\Length(min=10)
     */
    private $title;

//    /**
//     * @ORM\ManyToOne(targetEntity="CryptoConseils\BlogBundle\Entity\Image", cascade={"persist", "remove"})
//     * @Assert\Valid()
//     */
//    private $image;

    /**
     * @var string
     *
     * @ORM\Column(name="imageLink", type="string", length=1020)
     *
     */
    private $imageLink;

    /**
     * @ORM\ManyToMany(targetEntity="CryptoConseils\BlogBundle\Entity\Category", cascade={"persist"})
     */
    private $categories;




    /**
     * @ORM\OneToMany(targetEntity="CryptoConseils\BlogBundle\Entity\Comment", mappedBy="article")
     */
    private $comments;





    /**
     * @var string
     *
     * @ORM\Column(name="Author", type="string", length=255)
     * @Assert\Length(min=2)
     */
    private $author;

    /**
     * @var string
     *
     * @ORM\Column(name="Content", type="text")
     *
     *
     */
    private $content;

    /**
     * @var datetime_immutable
     *
     * @ORM\Column(name="Date", type="datetime")
     * @Assert\DateTime()
     */
    private $date;

    /**
     * @ORM\Column(name="published", type="boolean")
     */
    private $published = true;

    /**
     * @ORM\Column(name="updated_at", type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @Gedmo\Slug(fields={"title"})
     * @ORM\Column(name="slug", type="string", length=255, unique=true)
     */
    private $slug;

    /**
     * @var integer
     * @ORM\Column(name="Premium", type="integer")
     */
    private $premium;

    /**
     * @return integer
     */
    public function getPremium()
    {
        return $this->premium;
    }

    /**
     * @param integer $premium
     */
    public function setPremium($premium)
    {
        $this->premium = $premium;
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
     * Set imageLink.
     *
     * @param varchar $imageLink
     *
     * @return Article
     */
    public function setImageLink($imageLink)
    {
        $this->imageLink = $imageLink;
        return $this;
    }

    /**
     * Get imageLink.
     *
     * @return string
     */
    public function getImageLink()
    {
        return $this->imageLink;
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

//    /**
//     * Set image.
//     *
//     * @param \CryptoConseils\BlogBundle\Entity\Image|null $image
//     *
//     * @return Article
//     */
//    public function setImage(\CryptoConseils\BlogBundle\Entity\Image $image = null)
//    {
//        $this->image = $image;
//
//        return $this;
//    }
//
//    /**
//     * Get image.
//     *
//     * @return \CryptoConseils\BlogBundle\Entity\Image|null
//     */
//    public function getImage()
//    {
//        return $this->image;
//    }

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

    /**
     * @ORM\PreUpdate
     */
    public function updateDate()
    {
        $this->setUpdatedAt(new \DateTime());
    }

    /**
     * Set updatedAt.
     *
     * @param \DateTime|null $updatedAt
     *
     * @return Article
     */
    public function setUpdatedAt($updatedAt = null)
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * Get updatedAt.
     *
     * @return \DateTime|null
     */
    public function getUpdatedAt()
    {
        return $this->updatedAt;
    }

    /**
     * Set slug.
     *
     * @param string $slug
     *
     * @return Article
     */
    public function setSlug($slug)
    {
        $this->slug = $slug;

        return $this;
    }

    /**
     * Get slug.
     *
     * @return string
     */
    public function getSlug()
    {
        return $this->slug;
    }
}
