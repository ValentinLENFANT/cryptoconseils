Feature: On teste la page d'acceuil
  Scenario: Home
    Given I am on "/"
    Then I should see "Bienvenue sur CryptoConseils.fr"
    And I should see "Connexion"
    And I should see "Articles"
