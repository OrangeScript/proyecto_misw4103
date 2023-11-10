Feature: Create post

@user1 @web
Scenario: Create Post Scenario 
      Given I navigate to page "<LOGIN_URL>"
      And I wait for 3 seconds
      When I enter email "<EMAIL>"
      And I wait for 2 seconds
      And I enter password "<PASSWORD>"
      And I wait for 2 seconds
      And I click login
      And I wait for 2 seconds
      And I click new post
      And I wait
      And I write post title "My post title"
      And I wait for 2 seconds
      And I click post content text
      And I write the post content "Tadada"
      And I wait for 2 seconds
      And I publish the post
      And I wait for 2 seconds
      And I continue to the final review
      And I wait for 2 seconds
      And I confirm to the final post
      And I wait for 2 seconds
      Then I see the post bookmark confirmation