Feature: Delete post

@user1 @web
Scenario: Delete excisting Post Scenario 
      Given I navigate to page "<LOGIN_URL>"
      And I wait for 3 seconds
      When I enter email "<EMAIL>"
      And I wait for 2 seconds
      And I enter password "<PASSWORD>"
      And I wait for 2 seconds
      And I click login
      And I wait for 2 seconds
      And I click on posts
      And I wait for 2 seconds
      And I enter to a post
      And I wait for 2 seconds
      And I open side menu
      And I wait for 2 seconds
      And I click delete post
      And I wait for 2 seconds
      And I click delete button
      And I wait for 5 seconds

@user2 @web
Scenario: Cancele Delete excisting Post Scenario 
      Given I navigate to page "<LOGIN_URL>"
      And I wait for 3 seconds
      When I enter email "<EMAIL>"
      And I wait for 2 seconds
      And I enter password "<PASSWORD>"
      And I wait for 2 seconds
      And I click login
      And I wait for 2 seconds
      And I click on posts
      And I wait for 2 seconds
      And I enter to a post
      And I wait for 2 seconds
      And I open side menu
      And I wait for 2 seconds
      And I click delete post
      And I wait for 2 seconds
      And I click cancel button
      And I wait for 5 seconds