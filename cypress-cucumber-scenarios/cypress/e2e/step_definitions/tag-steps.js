import { Given, When, Then, Step, BeforeStep} from "@badeball/cypress-cucumber-preprocessor";
import {expect} from "chai";
import TagPage from "../page_objects/TagPage";
const long_tag_name = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
var noChangeTitle = null;

When("I navigate to tags page", () => {
    let element = cy.get('a[data-test-nav="tags"]');
    element.click();
  });

When("click on new tag", () => {
    let element = cy.get('a[class="ember-view gh-btn gh-btn-primary"]');
    element.click();
  });

When ('I write the tag name as {string}', (tagName) => {
    let element = cy.get("input[data-test-input='tag-name']");
    element.type(tagName);
  });

When ('I define the tag color as {string}', (tagColor) => {
    let element =cy.get("input[data-test-input='accentColor']");
    element.type(tagColor);
  });

When ('I write a tag description {string}', (tagDescription) => {
    let element = cy.get("textarea[data-test-input='tag-description']");
    element.type(tagDescription);
  });

When("click on save button", () => {
    let element = cy.get("button[data-test-button='save']");
    element.click();
  });


Then("I verify message button {string}", (expectedMessage) => {
    const tagPage = new TagPage();
    tagPage.checkTagCreation().then((currentButtonMessage) => { 
      expect(currentButtonMessage.trim()).to.equal(expectedMessage.trim());
    });

});

Then("I verify error message button {string}", (expectedMessage) => {
    const tagPage = new TagPage();
    
    tagPage.checkCreationError().then((currentButtonMessage) => { 
      expect(currentButtonMessage.trim()).to.equal(expectedMessage.trim());
    });

   
})

When("I go to internal tag option", () => {
    let element = cy.get("button[data-test-tags-nav='internal']");
    element.click();
  });

When("I enter to first tag", () => {
    const firstTag = new TagPage();
    const clickOnFirstTag = firstTag.getFirstTag()
  });

When("I change title name to {string}", (newTitle) => {
    let element = cy.get("input[data-test-input='tag-name']");
    element.type(newTitle);
})

When("I click on delete button", () => {
    let element = cy.get("button[data-test-button='delete-tag']");
    element.click();
})

When("I click confirm the delete", () => {
    let element = cy.get("button[data-test-button='delete-tag']");
    element.click();
});


Then ('I confirm the url contains {string}', (url) => {
    cy.url().should('include', url);
});

When ('I write a long tag name', () => {
   let element = cy.get("input[data-test-input='tag-name']");
   element.type(long_tag_name);
});