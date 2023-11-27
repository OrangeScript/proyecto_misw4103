Feature: Login


Scenario: Login Scenario with fake random values
      Given I navigate to page of Ghost
      And I wait for 3 seconds
      And I enter fake email
      And I wait for 2 seconds
      And I enter fake password
      And I wait for 2 seconds
      And I click login


Scenario: Login Scenario with invalid number values in form
      Given I navigate to page of Ghost
      And I wait for 3 seconds
      And I enter invalid number values to email input
      And I wait for 2 seconds
      And I enter invalid number values to password input
      And I wait for 2 seconds
      And I click login


Scenario: Login Scenario with invalid string values in form
      Given I navigate to page of Ghost
      And I wait for 3 seconds
      And I enter invalid string values to email input
      And I wait for 2 seconds
      And I enter invalid string values to password input
      And I wait for 2 seconds
      And I click login

