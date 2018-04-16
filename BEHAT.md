# Behat doc

## Config

Renomer le fichier **behat.yml.dist** en **behat.yml**

## Editer l'url de test behat

Editer le fichier behat.yml `base_url:  'http://127.0.0.1:8000'`
avec l'url du projet en local

## Lancer test behat

`vendor/bin/behat`

## Liste des scénarios

Tous les tests se trouvent dans le dossier **features**

## Lancer un test spécifique

`vendor/bin/behat features/articles.feature`
> Cela va lancer tous les scénarios du test des articles

## Lancer un scénario d'un test spécifique

`vendor/bin/behat features/articles.feature:7`

> Le **7** signifie que le scénario que l'ont veut exécuter se trouve à la ligne 7 du test **articles.feature**

> Dans notre cas le scénario du test est: **Editer un article**

## Créer un test

Pour créer un test il faut tout d'abord créer un fichier .feature et le placer dans le dossier **features**

> Exemple: features/montest.feature

Voici un exemple de test de la page d'acceuil :

`feature: On test la page d'acceuil du site cryptoconseil.fr
    Scenario: Barre Menu
        When I go to "/"
        Then I shoudl see "cryptoconseil"
`

Au début du fichier ont définit la fonctionnalité de notre test. Exemple:

`Feature: On test notre site`

Puis ont définit notre scénario

`Scenario: Test de la page d'acceuil`

Pour connaitre les différentes actions que l'ont peut faire dans une scénario

`bin/behat -dl --lang=en`

Pour créer une action personnalisé, il faut se rendre dans le fichier **FeatureContext.php**
