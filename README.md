# CryptoConseils.fr
This is the official repository for the website https://www.cryptoconseils.fr/

#Project Initialization
1) Clone the repository on your computer by executing : <br>
`git clone https://github.com/ValentinLENFANT/cryptoconseils.git` --> HTTPS <br>
OR <br>
`git clone git@github.com:ValentinLENFANT/cryptoconseils.git` --> SSH <br>

2) Open a command line terminal and execute : <br>
`composer update`

3) Start your local server

4) Go to the following URL : 
[localhost/cryptoconseils/web/app_dev.php/blog](localhost/cryptoconseils/web/app_dev.php/blog)


#Useful commands

* To create a new bundle:
`php bin/console generate:bundle`
* Cache issue for dev:
`php bin/console cache:clear` <br>
* Cache issue for prod:
`php bin/console cache:clear --env=prod`
* To update dependencies:
`php composer.phar update`
* To launch behat test:
`vendor/bin/behat`
* To generate a new entity:
`php bin/console doctrine:generate:entity`
* To update an entity:
`php bin/console doctrine:generate:entities appnameBundlename:Entityname`
* To update the database via the schema:
`php bin/console doctrine:schema:update --force`
* To load the fixtures:
`php bin/console doctrine:fixtures:load`