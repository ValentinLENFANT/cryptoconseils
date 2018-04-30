<?php
// src/CryptoConseils/BlogBundle/Validator/Antiflood.php

namespace CryptoConseils\BlogBundle\Validator;

use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\Constraints;

/**
 * @Annotation
 */

class Antiflood extends Constraint
{
    public $message = "Vous avez déjà posté un message il y a moins de 15 secondes, merci d'attendre un peu.";
}