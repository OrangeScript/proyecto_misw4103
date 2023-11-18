@editing
Feature: Edit Post

@web @user1
Scenario: Edit an existing post with changed title only
  Given I login to Ghost
  And there is an existing post that is published
  When I navigate to the post edit page
  And I update the title to "$name1"
  And I click the update button
  And I wait for 2 seconds
  Then I should see a confirmation message
  And the post title should be "$$name1"

@web @user2
Scenario: Edit a post with changed content only
  Given I login to Ghost
  And there is an existing post that is published
  When I navigate to the post edit page
  And I update the content to "$name2"
  And I click the update button
  And I wait for 2 seconds
  Then I should see a confirmation message
  And the post content should be "$$name2"

@web @user3
Scenario: Edit a post with changed title and content
  Given I login to Ghost
  And there is an existing post that is published
  When I navigate to the post edit page
  And I update the title to "$name3"
  And I update the content to "$name4"
  And I click the update button
  Then I should see a confirmation message
  And the post title should be "$$name3"
  And the post content should be "$$name4"

@web @user4
Scenario: Edit a post, keeping the original title and content unchanged
  Given I login to Ghost
  And there is an existing post that is published
  When I navigate to the post edit page
  And I make no changes
  Then the update button should be disabled
  And the post title should be the same
  And the post content should be the same

@web @user5
Scenario: Edit a post, then revert the changes
  Given I login to Ghost
  And there is an existing post that is published
  When I navigate to the post edit page
  And I update the title to "$name5"
  And I update the content to "$name6"
  And I click the leave button
  Then the post title should be the same
  And the post content should be the same
