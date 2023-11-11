const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const expect = require('chai').expect;
const PostsPage = require('../page_objects/PostsPage');
const PostEditorPage = require('../page_objects/PostEditorPage');
const { use } = require('chai');


Given('I login to Ghost', async function () {    
  await this.loginPage.login();
});

Given('there is an existing post that is published', async function() {

  let postsLink = await this.driver.$('a[data-test-nav="posts"]');
  await postsLink.click();
  
  const postsPage = new PostsPage(this.driver);

  if (!(await postsPage.doesPublishedPostExist())) {
    throw new Error('No published post found. Please create a published post before running this test.');
  }
});

When('I navigate to the post edit page', async function() {
  const postsPage = new PostsPage(this.driver);
  await postsPage.navigateToPostEditPage();
});

When('I update the title to {kraken-string}', async function(newTitle) {
  const editorPage = new PostEditorPage(this.driver);
  await editorPage.editPostTitle(newTitle);
});

When('I click the update button', async function() {
  const editorPage = new PostEditorPage(this.driver);
  await editorPage.clickUpdateButton();
});

Then('I should see a confirmation message', async function() {
  const editorPage = new PostEditorPage(this.driver);
  let isConfirmationDisplayed = await editorPage.isUpdateConfirmationDisplayed();

  expect(isConfirmationDisplayed).to.equal(true);
});

Then('the post title should be {kraken-string}', async function(expectedTitle) {
  const editorPage = new PostEditorPage(this.driver);
  const actualTitle = await editorPage.checkPostTitle();

  expect(actualTitle.trim()).to.equal(expectedTitle.trim());
});
