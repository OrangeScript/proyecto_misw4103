Feature: Create post

@user1 @web
Scenario: Scenario1: As an Admin user, I want  to create a post 
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

@user2 @web
Scenario: Scenario2: As an Admin user, I want  to create a post with toggle
      Given I navigate to page "<LOGIN_URL>"
      And I wait for 3 seconds
      When I enter email "<EMAIL>"
      And I wait for 2 seconds
      And I enter password "<PASSWORD>"
      And I wait for 2 seconds
      And I click login
      And I wait for 2 seconds
      And I click new post
      And I wait for 1 seconds
      And I write post title "My post title toggle"
      And I wait for 2 seconds
      And I click post content text
      And I wait for 2 seconds
      And I click in the add button
      And I wait for 2 seconds
      And I click in the toggle menu option
      And I wait for 2 seconds
      And I click in the header toggle
      And I wait for 2 seconds
      And I write the header content "Header toggle"
      And I wait for 2 seconds
      And I click in the collapsible toggle
      And I wait for 2 seconds
      And I write the collapsible content "Tadada collapsible"
      And I wait for 2 seconds
      And I publish the post
      And I wait for 2 seconds
      And I continue to the final review
      And I wait for 2 seconds
      And I confirm to the final post
      And I wait for 2 seconds
      Then I see the post bookmark confirmation

@user3 @web
Scenario: Scenario3: As an Admin user, I want to create a post with a bookmark
      Given I navigate to page "<LOGIN_URL>"
      And I wait for 3 seconds
      When I enter email "<EMAIL>"
      And I wait for 2 seconds
      And I enter password "<PASSWORD>"
      And I wait for 2 seconds
      And I click login
      And I wait for 2 seconds
      And I click new post
      And I wait for 1 seconds
      And I write post title "My post title bookmark"
      And I wait for 2 seconds
      And I click post content text
      And I wait for 2 seconds
      And I click in the add button
      And I wait for 1 seconds
      And I select the bookmark option
      And I wait for 1 seconds
      And I write the anchor "https://losestudiantes.com/"
      And I wait for 3 seconds
      And I click into the post body
      And I wait for 1 seconds
      And I publish the post
      And I wait for 2 seconds
      And I continue to the final review
      And I wait for 2 seconds
      And I confirm to the final post
      And I wait for 2 seconds
      Then I see the post bookmark confirmation


      