Feature: Login


Scenario: Login Scenario 
      Given I navigate to page of Ghost
      And I wait for 3 seconds
      And I enter email "<email>"
      And I wait for 2 seconds
      And I enter password "<password>"
      And I wait for 2 seconds
      And I click login
      And I wait for 2 seconds
      Then I check dashboard URL

@positive
Examples:
    | email                                 | password |     
    | s.menaz@uniandes.edu.co               | pruebas2023 |

@negative
Examples:
    | email                                 | password |   
    | s.menaz@uniandes.edu.co               | 123      |