Feature: On teste la page d'un article
  Scenario: premier article
    Given I am on "/articles/1"
    Then I should see "Le Bitcoin est-il toujours le roi de toutes les crypto-monnaies ?"
