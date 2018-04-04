<?php
// src/CryptoConseils/BlogBundle/Antispam/CryptoConseilsAntispam.php

namespace CryptoConseils\BlogBundle\Antispam;

class CryptoConseilsAntispam
{
    public function isSpamComment($text)
    {
        return strlen($text) < 4;
    }

    public function isSpamArticle($text)
    {
        return strlen($text) <50;
    }
}