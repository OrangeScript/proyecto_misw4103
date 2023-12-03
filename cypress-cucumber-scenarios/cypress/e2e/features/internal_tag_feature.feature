Feature: Internal tags

Scenario: As a user I want to create an internal tag using all the form
      Given I signin to Ghost
      And I wait for 2 seconds
      When I navigate to tags page
      And I wait for 1 seconds
      And I go to internal tag option
      And I wait for 1 seconds
      And click on new tag
      And I wait for 1 seconds
      And I write the tag name as "kraken tag"
      And I define the tag color as "ffffff"
      And I write a tag description "My tag description is good"
      And click on save button
      And I wait for 1 seconds
      Then I verify message button "Saved"
      And I wait for 3 seconds


Scenario: As a user I try to create an internal tag without define a name  
      Given I signin to Ghost
      And I wait for 2 seconds
      When I navigate to tags page
      And I wait for 1 seconds
      And I go to internal tag option
      And I wait for 1 seconds
      And click on new tag
      And I wait for 1 seconds
      And I define the tag color as "ffffff"
      And I write a tag description "My tag description is good"
      And click on save button
      And I wait for 1 seconds
      Then I verify error message button "Retry"
      And I wait for 3 seconds


Scenario: As a user I want to create an internal tag defining just the tag name
      Given I signin to Ghost
      And I wait for 2 seconds
      When I navigate to tags page
      And I wait for 1 seconds
      And I go to internal tag option
      And I wait for 1 seconds
      And click on new tag
      And I wait for 1 seconds
      And I write the tag name as "kraken tag"
      And click on save button
      And I wait for 1 seconds
      Then I verify message button "Saved"
      And I wait for 3 seconds


Scenario: As a user I want to create an internal tag using a name with 191 characters
      Given I signin to Ghost
      And I wait for 2 seconds
      When I navigate to tags page
      And I wait for 1 seconds
      And I go to internal tag option
      And I wait for 1 seconds
      And click on new tag
      And I wait for 1 seconds
      And I write a long tag name
      And I define the tag color as "ffffff"
      And I write a tag description "My tag description is good"
      And click on save button
      And I wait for 1 seconds
      Then I verify message button "Saved"
      And I wait for 3 seconds