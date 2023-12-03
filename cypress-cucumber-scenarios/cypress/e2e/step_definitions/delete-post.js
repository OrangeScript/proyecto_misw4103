import {Then} from "@badeball/cypress-cucumber-preprocessor";

Then("I enter to a post", () => {
  //const postsPage = new PostsPage(this.driver);
  cy.get('.gh-posts-list-item-group') 
  .first() 
  .find('a.gh-post-list-button')
  .click(); 
});

Then("I open side menu", () => {
  let element = cy.get('button[title="Settings"]');
  element.click();
});

Then("I click delete post", () => {
  let element = cy.get(".settings-menu-delete-button > button");
  element.click();
});

Then("I click delete button", () => {
  let buttons = cy.get(".modal-content > .modal-footer > button");

  if (buttons.length > 0) {
    let deleteButton = buttons[1];
    return deleteButton.click();
  } else {
    console.log("No posts");
  }
});

Then("I click cancel button", () => {
  let buttons = cy.get(".modal-content > .modal-footer > button");

  if (buttons.length > 0) {
    let deleteButton = buttons[0];
    return deleteButton.click();
  } else {
    console.log("No posts");
  }
});
