import { Given, When, Then, Step, BeforeStep} from "@badeball/cypress-cucumber-preprocessor";
import PostsPage from "../page_objects/PostsPage";
import PostEditorPage from "../page_objects/PostEditorPage";
import {expect} from "chai";
noChangeContent = null;
noChangeTitle = null;

Given('there is an existing post that is published', () => {

  let postsLink = cy.get('a[data-test-nav-custom="posts-Published"]');
  postsLink.click();
  
  const postsPage = new PostsPage();

  if (!(postsPage.doesPublishedPostExist())) {
    throw new Error('No published post found. Please create a published post before running this test.');
  }
});

When('I navigate to the post edit page', () => {
  const postsPage = new PostsPage();
  postsPage.navigateToPostEditPage();  
});

When('I update the title to {string}', (newTitle) => {
  const editorPage = new PostEditorPage();
  this.noChangeTitle  = editorPage.checkPostTitle();
  editorPage.editPostTitle(newTitle);
});

When('I click the update button', () => {
  const editorPage = new PostEditorPage();
  editorPage.clickUpdateButton();
});

Then('I should see a confirmation message', () => {
  const editorPage = new PostEditorPage();
  editorPage.isUpdateConfirmationDisplayed();
});

Then('the post title should be {string}',(expectedTitle) => {
  const editorPage = new PostEditorPage(this.driver);
  const actualTitle = editorPage.checkPostTitle();

  expect(actualTitle).to.equal(expectedTitle);
});


When('I update the content to {string}', (newContent) => {
  const editorPage = new PostEditorPage();
  editorPage.editPostContent(newContent);
});

When('I make no changes', () => {
});

Then('the update button should be disabled', () => {
  const editorPage = new PostEditorPage();
  editorPage.checkPostTitle().then((titleText) => { 
    this.noChangeTitle = titleText;
  });
  editorPage.checkPostContent().then((contentText) => {
    this.noChangeContent = contentText;
  })
  editorPage.isUpdateButtonDisabled();

});

Then('the post title should be the same', () => {
  const editorPage = new PostEditorPage();
  editorPage.checkPostTitle().then((actualTitle) => { 
    expect(actualTitle.trim()).to.equal(this.noChangeTitle.trim());
  });

});

Then('the post content should be the same',() => {
  const editorPage = new PostEditorPage();
  editorPage.checkPostContent().then((actualContent) => { 
    expect(actualContent.trim()).to.equal(this.noChangeContent.trim());
  });

});
