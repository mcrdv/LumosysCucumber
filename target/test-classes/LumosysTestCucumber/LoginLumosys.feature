Feature: Lumosys Login


  Scenario: Succesful Login with multiple results
    Given I have opened the Lumosys site
    When I Login with an exist user
    Then I validate there are Login
    
    