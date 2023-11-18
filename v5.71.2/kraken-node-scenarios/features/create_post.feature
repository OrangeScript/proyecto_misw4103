Feature: reate post

@user1 @web
Scenario: Scenario1: As an admin user, I want to try creating a post without a title and body  
      Given I login to Ghost
      And I wait for 1 seconds
      And I click new post
      And I attempt to create a post without a title and content
      Then I see the publish button should not be visible

@user2 @web
Scenario: Scenario2: As an admin user, I want to create a post with a button
      Given I login to Ghost
      And I wait for 1 seconds
      And I click new post
      And I write post title "Post with button"
      And I wait for 2 seconds
      And I click post content text
      And I wait for 2 seconds
      And I click in the add button
      And I wait for 1 seconds
      And I select the button option
      And I fill the button's settings
      And I wait for 1 seconds
      And I publish the post
      And I wait for 2 seconds
      And I continue to the final review
      And I wait for 2 seconds
      And I confirm to the final post
      And I wait for 2 seconds
      Then I see the post bookmark confirmation

@user3 @web
Scenario: Scenario3: As an admin user, I want to create a post with HTML content
      Given I login to Ghost
      And I wait for 1 seconds
      And I click new post
      And I write post title "Post with HTML content"
      And I wait for 2 seconds
      And I click post content text
      And I wait for 2 seconds
      And I click in the add button
      And I wait for 1 seconds
      And I select the HTML option
      And I fill the HTML settings
      And I wait for 1 seconds
      And I publish the post
      And I wait for 2 seconds
      And I continue to the final review
      And I wait for 2 seconds
      And I confirm to the final post
      And I wait for 2 seconds
      Then I see the post bookmark confirmation

@user4 @web
Scenario: Scenario4: As an admin user, I want to create a post with Markdown content
      Given I login to Ghost
      And I wait for 1 seconds
      And I click new post
      And I write post title "Post with Markdown content"
      And I wait for 2 seconds
      And I click post content text
      And I wait for 2 seconds
      And I click in the add button
      And I wait for 1 seconds
      And I select the Markdown option
      And I fill the Markdown settings
      And I wait for 1 seconds
      And I publish the post
      And I wait for 2 seconds
      And I continue to the final review
      And I wait for 2 seconds
      And I confirm to the final post
      And I wait for 2 seconds
      Then I see the post bookmark confirmation

@user5 @web
Scenario: Scenario5: As an admin user, I want to create a post and use the '/' shortcut for add HTML content
      Given I login to Ghost
      And I wait for 1 seconds
      And I click new post
      And I write post title "Post with '/' shortcut"
      And I wait for 2 seconds
      And I click post content text
      And I wait for 2 seconds
      And I write the post content "/"
      And I wait for 2 seconds
      And I select the HTML option
      And I fill the HTML settings
      And I wait for 1 seconds
      And I publish the post
      And I wait for 2 seconds
      And I continue to the final review
      And I wait for 2 seconds
      And I confirm to the final post
      And I wait for 2 seconds
      Then I see the post bookmark confirmation
