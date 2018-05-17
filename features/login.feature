Feature: On teste la page de connexion
  Scenario: Connexion
    Given I am on "/login"
    Then I should see "Nom d'utilisateur"
    And I should see "Mot de passe"
    And I should see "Se souvenir de moi"
    Then I fill in "username" with "Guillaume"
    And I fill in "password " with "Guillaume"
    And I press "Connexion"
    Then I should be on "/"
    And I should see "Connecté en tant que Guillaume"
