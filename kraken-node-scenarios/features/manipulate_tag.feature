Feature: Manipulate tags

@user1 @web
Scenario: ScenarioXX: As a user I want to edit a tag  
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
      Then I verify message button "Saved"
      And I wait for 3 seconds

@user2 @web
Scenario: ScenarioXX: As a user I want to delete a tag  
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