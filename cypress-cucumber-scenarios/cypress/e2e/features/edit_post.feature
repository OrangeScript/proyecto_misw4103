Feature: Edit Post

Scenario: Edit an existing post with changed title only
      Given I signin to Ghost 
      And I wait for 2 seconds
      And there is an existing post that is published
      When I navigate to the post edit page
      And I update the title to "$name1"
      And I update the content to "texto"
      And I click the update button
      And I wait for 1 seconds
      Then I should see a confirmation message

Scenario: Edit a post with changed content only
      Given I signin to Ghost
      And there is an existing post that is published
      And I wait for 5 seconds
      When I navigate to the post edit page
      And I update the content to "$name2"
      And I wait for 1 seconds
      And I click the update button
      Then I should see a confirmation message
  
Scenario: Edit a post with changed title and content
      Given I signin to Ghost
      And there is an existing post that is published
      And I wait for 10 seconds
      When I navigate to the post edit page
      And I update the title to "$name3"
      And I update the content to "$name4"
      And I wait for 2 seconds
      And I click the update button
      Then I should see a confirmation message

Scenario: Edit a post, keeping the original title and content unchanged
      Given I signin to Ghost
      And there is an existing post that is published
      And I wait for 15 seconds
      When I navigate to the post edit page
      And I make no changes
      Then the update button should be disabled
      And the post title should be the same
      And the post content should be the same
