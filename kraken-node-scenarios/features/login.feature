Feature: Login

@user1 @web
Scenario: Scenario13: Correct Login Scenario 
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
Scenario: Scenario14: Login Bad password Scenario
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
Scenario: Scenario15: Login Bad user Scenario
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
Scenario: Scenario16: Login Bad credentials Scenario
      Given I navigate to page "<LOGIN_URL>"
      And I wait for 3 seconds
      When I enter email "badUser@gmail.com"
      And I wait for 2 seconds
      And I enter password "badPassword"
      And I wait for 2 seconds
      And I click login
      And I wait for 2 seconds
      Then I get retry button

@user5 @web
Scenario: ScenarioXX: Login with incorrect email
      Given I navigate to page "<LOGIN_URL>"
      And I wait for 3 seconds
      When I enter email "badUsergmail.com"
      And I wait for 2 seconds
      And I enter password "badPassword"
      And I wait for 2 seconds
      And I click login
      And I wait for 2 seconds
      Then I get red incorrect form field

@user6 @web
Scenario: Scenario16: Login without login
      Given I navigate to page "<LOGIN_URL>"
      And I wait for 3 seconds
      When I enter email "badUsergmail.com"
      And I wait for 2 seconds
      And I click login
      And I wait for 2 seconds
      Then I get red incorrect form field