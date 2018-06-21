# CryptoConseils.fr
This is the official repository for the website https://www.cryptoconseils.fr/

#Project Initialization
1) Clone the repository on your computer by executing : <br>
`git clone https://github.com/ValentinLENFANT/cryptoconseils.git` --> HTTPS <br>
OR <br>
`git clone git@github.com:ValentinLENFANT/cryptoconseils.git` --> SSH <br>

2) Copy the parameters.yml.dist's content into parameters.yml

3) Open a command line terminal and execute : <br>
`composer update`

4) At the same time, create the database named : <br>
`cryptoconseils`

5) After that, create the tables thanks to : <br>
`php bin/console doctrine:schema:update --force`

6) Launch the following command to populate the tables : <br>
`php bin/console doctrine:fixtures:load`

7) Install React dependencies
`cd cryptoconseils-frontend && yarn install`

8) Start your local server
* Start Symfony server
`php bin/console server:start` and go to [http://127.0.0.1:8000](http://127.0.0.1:8000)
* Start React server
`yarn start`and go to [http://127.0.0.1:3000](http://127.0.0.1:3000)

9) Go to the following URL :
[localhost/cryptoconseils/web/app_dev.php/blog](localhost/cryptoconseils/web/app_dev.php/blog)

# Useful commands

### Symfony  
* To create a new bundle:
`php bin/console generate:bundle`
* Cache issue for dev:
`php bin/console cache:clear` <br>
* Cache issue for prod:
`php bin/console cache:clear --env=prod`
* To update dependencies:
`php composer.phar update`
* To generate a new entity:
`php bin/console doctrine:generate:entity`
* To update an entity:
`php bin/console doctrine:generate:entities appnameBundlename:Entityname`
* To update the database via the schema:
`php bin/console doctrine:schema:update --force`
* To load the fixtures:
`php bin/console doctrine:fixtures:load`

## React
> Exécute these command in cryptoconseils-frontend

* To install React dependencies:
`yarn install`
* To start React:
`yarn start`


## Behat
* To launch behat test:
`vendor/bin/behat`
