@editing
Feature: Edit Post

@web @user1
Scenario: Edit an existing post with changed title only
  Given I login to Ghost
  And there is an existing post that is published
  When I navigate to the post edit page
  And I update the title to "My New Title"
  And I click the save button
  Then I should see a success message
  And the post should be updated with the new title

@web @user2
Scenario: Edit a post with changed content only
  Given I login to Ghost
  And there is an existing post that is published
  When I navigate to the post edit page
  And I update the content to "This is my updated post content"
  And I click the save button
  Then I should see a success message
  And the post should be updated with the new content

@web @user3
Scenario: Edit a post with changed title and content
  Given I login to Ghost
  And there is an existing post that is published
  When I navigate to the post edit page
  And I update the title to "My New Title"
  And I update the content to "This is my updated post content"
  And I click the save button
  Then I should see a success message
  And the post should be updated with the new title and content

@web @user4
Scenario: Edit a post, keeping the original title and content unchanged
  Given I login to Ghost
  And there is an existing post that is published
  When I navigate to the post edit page
  And I click the save button without making any changes
  Then I should see a success message
  And the post should remain unchanged with the original title and content

@web @user5
Scenario: Edit a post, then revert the changes
  Given I login to Ghost
  And there is an existing post that is published
  When I navigate to the post edit page
  And I update the title to "My New Title"
  And I update the content to "This is my updated post content"
  And I click the cancel button
  Then I should see a confirmation message
  And the post should remain unchanged
