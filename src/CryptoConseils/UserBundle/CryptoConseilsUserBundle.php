<?php

namespace CryptoConseils\UserBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class CryptoConseilsUserBundle extends Bundle
{
    public function getParent()
    {
        return 'FOSUserBundle';
    }
}
