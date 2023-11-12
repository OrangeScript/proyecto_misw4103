Feature: Login

@user1 @web
Scenario: Correct Login Scenario 
      Given I navigate to page "<LOGIN_URL>"
      And I wait for 3 seconds
      And I enter email "<EMAIL>"
      And I wait for 2 seconds
      And I enter password "<PASSWORD>"
      And I wait for 2 seconds
      And I click login
      And I wait for 2 seconds
      Then I check dashboard URL

@user2 @web
Scenario: Login Bad password Scenario
      Given I navigate to page "<LOGIN_URL>"
      And I wait for 3 seconds
      When I enter email "<EMAIL>"
      And I wait for 2 seconds
      And I enter password "badPassword"
      And I wait for 2 seconds
      And I click login
      And I wait for 2 seconds
      Then I get retry button

@user3 @web
Scenario: Login Bad user Scenario
      Given I navigate to page "<LOGIN_URL>"
      And I wait for 3 seconds
      When I enter email "badUser@gmail.com"
      And I wait for 2 seconds
      And I enter password "<PASSWORD>"
      And I wait for 2 seconds
      And I click login
      And I wait for 2 seconds
      Then I get retry button

@user4 @web
Scenario: Login Bad credentials Scenario
      Given I navigate to page "<LOGIN_URL>"
      And I wait for 3 seconds
      When I enter email "badUser@gmail.com"
      And I wait for 2 seconds
      And I enter password "badPassword"
      And I wait for 2 seconds
      And I click login
      And I wait for 2 seconds
      Then I get retry button