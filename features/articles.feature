Feature: On teste la page d'un article
  Scenario: premier article
    Given I am on "/blog/articles/1"
    Then I should see " Achète des crypto-monnaies, c'est bien ! "
