<?php

namespace CryptoConseils\BlogBundle\Form;

use Doctrine\ORM\Mapping\Entity;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use CryptoConseils\BlogBundle\Repository\CategoryRepository;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Ivory\CKEditorBundle\Form\Type\CKEditorType;

class ArticleType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TextType::class)
            ->add('image_id', TextType::class)
            ->add('content', CKEditorType::class, array('config_name' => 'basic_config'))
            // Bloc commenté pour mettre en évidence l'existence d'une méthode alternative permettant d'ajouter des nouvelles catégories plutôt que de
            // récupérer les existantes
//            ->add('categories', CollectionType::class, array(
//                'entry_type' => CategoryType::class,
//                'allow_add' => true,
//                'allow_delete' => true
//            ))
            ->add('save', SubmitType::class);

        // Bloc permettant d'ajouter ou de supprimer le champs Published au sein du formulaire en fonction du type d'action : CREATE ou EDIT
        $builder->addEventListener(FormEvents::PRE_SET_DATA, //Evènement PRE_SET_DATA
            function (FormEvent $event) { //Fonction à exécuter lorsque l'évènement est déclenché
                $article = $event->getData();

                if (null === $article) {
                    return;
                }

                if (!$article->getPublished() || null === $article->getId()) {
                    $event->getForm()->add('published', CheckboxType::class, array('required' => false));
                } else {
                    $event->getForm()->remove('published');
                }

                if (!$article->getImage() || null === $article->getId()) {
                    $event->getForm()->add('image', ImageType::class, array('required' => true));
                } else {
                    $event->getForm()->remove('image');
                }
            }
        );
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'CryptoConseils\BlogBundle\Entity\Article'
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'cryptoconseils_blogbundle_article';
    }


}
