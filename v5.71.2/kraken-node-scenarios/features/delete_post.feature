Feature: Delete post

@user1 @web
Scenario: Scenario6: Delete excisting Post Scenario 
      Given I login to Ghost
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
Scenario: Scenario7: Cancele Delete excisting Post Scenario 
      Given I login to Ghost
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