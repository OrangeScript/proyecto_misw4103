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

Scenario: Login Bad user Scenario
      Given I navigate to page of Ghost
      And I wait for 3 seconds
      When I enter email "<email>"
      And I wait for 2 seconds
      And I enter password "<password>"
      And I wait for 2 seconds
      And I click login
      And I wait for 2 seconds
      Then I get retry button

@negative
Examples:
    | email                          | password |   
    | badUser@gmail.com              | 123      |

Scenario: Login with incorrect email
      Given I navigate to page of Ghost
      And I wait for 3 seconds
      When I enter email "<email>"
      And I wait for 2 seconds
      And I enter password "<password>"
      And I wait for 2 seconds
      And I click login
      And I wait for 2 seconds
      Then I get retry button

@negative
Examples:
    | email                          | password |   
    | badUser@gmail.com              | 123      |



Scenario: Login without login
      Given I navigate to page of Ghost
      And I wait for 3 seconds
      When I enter email "<email>"
      And I wait for 2 seconds
      And I click login
      And I wait for 2 seconds
      Then I get red incorrect form field

@negative
Examples:
    | email                          | password |   
    | badUser@gmail.com              | 123      |