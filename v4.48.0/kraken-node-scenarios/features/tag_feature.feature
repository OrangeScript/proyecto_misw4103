Feature: tags

@user1 @web
Scenario: Scenario15: Scenario1: As a user I want to create a public tag  
      Given I login to Ghost
      And I wait for 2 seconds
      When I navigate to tags page
      And I wait for 1 seconds
      And click on new tag
      And I wait for 1 seconds
      And I write the tag name as "kraken tag"
      And I define the tag color as "ffffff"
      And I write a tag desescription "My tag description is good"
      And click on save button
      And I wait for 1 seconds
      Then I verify message button "Saved"
      And I wait for 3 seconds

@user2 @web
Scenario: Scenario16: As a user I try to create a tag wiithout defiine a name  
      Given I login to Ghost
      And I wait for 2 seconds
      When I navigate to tags page
      And I wait for 1 seconds
      And click on new tag
      And I wait for 1 seconds
      And I define the tag color as "ffffff"
      And I write a tag desescription "My tag description is good"
      And click on save button
      And I wait for 1 seconds
      Then I verify error message button "Retry"
      And I wait for 3 seconds

@user3 @web
Scenario: Scenario17: As a user I want to create an iinternal tag  
      Given I login to Ghost
      And I wait for 2 seconds
      When I navigate to tags page
      And I wait for 1 seconds
      And I go to internal tag option
      And click on new tag
      And I wait for 1 seconds
      And I write the tag name as "kraken tag"
      And I define the tag color as "ffffff"
      And I write a tag desescription "My tag description is good"
      And click on save button
      And I wait for 1 seconds
      Then I verify message button "Saved"
      And I wait for 3 seconds

@user4 @web
Scenario: Scenario18: As a user I want to edit a tag  
      Given I login to Ghost
      And I wait for 2 seconds
      When I navigate to tags page
      And I wait for 1 seconds
      And I enter to first tag
      And I wait for 1 seconds
      And I change title name to " edited"
      And I wait for 1 seconds
      And click on save button
      And I wait for 1 seconds
      

@user5 @web
Scenario: Scenario19: As a user I want to delete a tag  
      Given I login to Ghost
      And I wait for 2 seconds
      When I navigate to tags page
      And I wait for 1 seconds
      And I enter to first tag
      And I wait for 1 seconds
      And I click on delete button
      And I click confirm the delete
      And I wait for 1 seconds
      Then I confirm the url contains "/ghost/#/tags"
      And I wait for 3 seconds