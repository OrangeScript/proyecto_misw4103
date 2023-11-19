const { Given, When, Then, Before } = require('@cucumber/cucumber');
const assert = require('assert');
const expect = require('chai').expect;
const PostsPage = require('../page_objects/PostsPage');
const PostEditorPage = require('../page_objects/PostEditorPage');
const { use } = require('chai');


When('I wait {int} seconds', async function (seconds) {
  const milliseconds = seconds * 1000;

  await new Promise(resolve => setTimeout(resolve, milliseconds));
});

When('I make no changes', async function() {
});

Then('the update button should be disabled', async function() {
  
});

When('I update the content to {kraken-string}', async function(newContent) {
  const editorPage = new PostEditorPage(this.driver);
  await editorPage.editPostContent(newContent);
});

When('I click the leave button', async function() {
  const editorPage = new PostEditorPage(this.driver);
  await editorPage.clickLeaveButton();
});


Given('there is an existing post that is published', async function() {

  let postsLink = await this.driver.$('a[href="#/posts/?type=published"]');
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

Then('I should see a confirmation message', async function() {
  const editorPage = new PostEditorPage(this.driver);
  let isConfirmationDisplayed = await editorPage.isUpdateConfirmationDisplayed();

  expect(isConfirmationDisplayed).to.equal(true);
});

When('I update the title to {kraken-string}', async function(newTitle) {
  const editorPage = new PostEditorPage(this.driver);
  this.noChangeTitle  = await editorPage.checkPostTitle();
  await editorPage.editPostTitle(newTitle);
});

Then('the post title should be {kraken-string}', async function(expectedTitle) {
  const editorPage = new PostEditorPage(this.driver);
  const actualTitle = await editorPage.checkPostTitle();

  expect(actualTitle.trim()).to.equal(expectedTitle.trim());
});

When('I click the update button', async function() {
  const editorPage = new PostEditorPage(this.driver);
  await editorPage.clickUpdateButton();
});

Then('the post content should be {kraken-string}', async function(expectedContent) {
  const editorPage = new PostEditorPage(this.driver);
  const actualContent = await editorPage.checkPostContent();

  expect(actualContent.trim()).to.equal(expectedContent.trim());
});


Then('the post title should be the same', async function() {
  const editorPage = new PostEditorPage(this.driver);
  const actualTitle = await editorPage.checkPostTitle();

  expect(actualTitle).to.equal(this.noChangeTitle);
});

Then('the post content should be the same', async function() {
  const editorPage = new PostEditorPage(this.driver);
  const actualContent = await editorPage.checkPostContent();

  expect(actualContent.trim()).to.equal(this.noChangeContent.trim());
});

Then('the title in the list should be the same', async function() {
  const editorPage = new PostEditorPage(this.driver);
  
  expect(await editorPage.checkPostTitleInsideList(this.noChangeTitle));
});
