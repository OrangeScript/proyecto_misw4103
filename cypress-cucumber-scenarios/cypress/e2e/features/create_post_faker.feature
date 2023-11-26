Feature: Create Post Radndom Data

Scenario: As an admin user, I want to create a post with random data
      Given I signin to Ghost 
      And I wait for 2 seconds
      Then I check dashboard URL
      And I click new post
      And I write the post title "<type>"
      And I click post content text
      And I wait for 2 seconds
      And I click in the add button
      And I wait for 1 seconds
      And I select the "<type>" option
      And I publish the post
      And I wait for 1 seconds
      And I continue to the final review
      And I wait for 2 seconds
      And I confirm to the final post
      And I wait for 2 seconds
      Then I see the post "<type>" confirmation

@random
Examples:
     | type                 |
     | Button               |
     | Markdown             |
     | HTML                 |
     | Email content        |
     | Toggle               |	
     | Public preview       |
     | Header               |	
     | Signup               |	 