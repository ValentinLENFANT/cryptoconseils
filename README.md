# CryptoConseils.fr
This is the official repository for the website https://www.cryptoconseils.fr/

#Useful commands

* To create a new bundle:
`php bin/console generate:bundle`
* Cache issue for dev:
`php bin/console cache:clear` <br>
* Cache issue for prod:
`php bin/console cache:clear --env=prod`
* To update dependencies:
`php composer.phar update`
* To launch behat test
`vendor/bin/behat`
