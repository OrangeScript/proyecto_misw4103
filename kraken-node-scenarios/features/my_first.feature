Feature: My feature

@user1 @web
Scenario: Create Post Scenario 
      Given I navigate to page "http://localhost:2368/ghost"
      And I wait for 3 seconds
      When I enter email "s.menaz@uniandes.edu.co"
      And I wait for 2 seconds
      And I enter password "pruebas2023"
      And I wait for 2 seconds
      And I click login
      And I wait for 2 seconds
      And I click new post
      And I wait
      And I write post title "My post title"
      And I wait for 2 seconds
      And I write post content text "My content text"
      
     