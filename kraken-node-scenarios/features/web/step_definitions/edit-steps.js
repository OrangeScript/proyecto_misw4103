const { Given, When, Then } = require("@cucumber/cucumber");
const expect = require("chai").expect;
const PostsPage = require("../page_objects/PostsPage");
const PostEditorPage = require("../page_objects/PostEditorPage");

Given("there is an existing post that is published", async function () {
  let postsLink = await this.driver.$('a[data-test-nav="posts"]');
  await postsLink.click();

  const postsPage = new PostsPage(this.driver);
  if (!(await postsPage.doesPublishedPostExist())) {
    throw new Error(
      "No published post found. Please create a published post before running this test."
    );
  }
});

When("I navigate to the post edit page", async function () {
  const postsPage = new PostsPage(this.driver);
  await postsPage.navigateToPostEditPage();
});

Then("I should see a confirmation message", async function () {
  const editorPage = new PostEditorPage(this.driver);
  let isConfirmationDisplayed =
    await editorPage.isUpdateConfirmationDisplayed();
  expect(isConfirmationDisplayed).to.equal(true);
});

Then(
  "the post title should be {kraken-string}",
  async function (expectedTitle) {
    const editorPage = new PostEditorPage(this.driver);
    const actualTitle = await editorPage.checkPostTitle();

    expect(actualTitle.trim()).to.equal(expectedTitle.trim());
  }
);

Given("there is an existing post that is published", async function () {
  let postsLink = await this.driver.$('a[data-test-nav="posts"]');
  await postsLink.click();

  const postsPage = new PostsPage(this.driver);

  if (!(await postsPage.doesPublishedPostExist())) {
    throw new Error(
      "No published post found. Please create a published post before running this test."
    );
  }
});

When("I update the content to {kraken-string}", async function (newContent) {
  const editorPage = new PostEditorPage(this.driver);
  await editorPage.editPostContent(newContent);
});

Then("I should see a confirmation message", async function () {
  const editorPage = new PostEditorPage(this.driver);
  let isConfirmationDisplayed =
    await editorPage.isUpdateConfirmationDisplayed();

  expect(isConfirmationDisplayed).to.equal(true);
});

Then(
  "the post content should be {kraken-string}",
  async function (expectedContent) {
    const editorPage = new PostEditorPage(this.driver);
    const actualContent = await editorPage.checkPostContent();

    expect(actualContent.trim()).to.equal(expectedContent.trim());
  }
);

Given("there is an existing post that is published", async function () {
  let postsLink = await this.driver.$('a[data-test-nav="posts"]');
  await postsLink.click();

  const postsPage = new PostsPage(this.driver);

  if (!(await postsPage.doesPublishedPostExist())) {
    throw new Error(
      "No published post found. Please create a published post before running this test."
    );
  }
});

When("I update the title to {kraken-string}", async function (newTitle) {
  const editorPage = new PostEditorPage(this.driver);
  await editorPage.editPostTitle(newTitle);
});

When("I update the content to {kraken-string}", async function (newContent) {
  const editorPage = new PostEditorPage(this.driver);
  await editorPage.editPostContent(newContent);
});

Then("I should see a confirmation message", async function () {
  const editorPage = new PostEditorPage(this.driver);
  let isConfirmationDisplayed =
    await editorPage.isUpdateConfirmationDisplayed();

  expect(isConfirmationDisplayed).to.equal(true);
});

Given("there is an existing post that is published", async function () {
  let postsLink = await this.driver.$('a[data-test-nav="posts"]');
  await postsLink.click();

  const postsPage = new PostsPage(this.driver);

  if (!(await postsPage.doesPublishedPostExist())) {
    throw new Error(
      "No published post found. Please create a published post before running this test."
    );
  }
});

When("I make no changes", async function () {});
Then("the update button should be disabled", async function () {
  const editorPage = new PostEditorPage(this.driver);
  this.noChangeTitle = await editorPage.checkPostTitle();
  this.noChangeContent = await editorPage.checkPostContent();
  const isDisabled = await editorPage.isUpdateButtonDisabled();

  expect(isDisabled).to.equal(true);
});

Then("the post title should be the same", async function () {
  const editorPage = new PostEditorPage(this.driver);
  const actualTitle = await editorPage.checkPostTitle();

  expect(actualTitle.trim()).to.equal(this.noChangeTitle.trim());
});

Given("there is an existing post that is published", async function () {
  let postsLink = await this.driver.$('a[data-test-nav="posts"]');
  await postsLink.click();

  const postsPage = new PostsPage(this.driver);

  if (!(await postsPage.doesPublishedPostExist())) {
    throw new Error(
      "No published post found. Please create a published post before running this test."
    );
  }
});

When("I update the title to {kraken-string}", async function (newTitle) {
  const editorPage = new PostEditorPage(this.driver);
  this.noChangeTitle = await editorPage.checkPostTitle();
  this.noChangeContent = await editorPage.checkPostContent();
  await editorPage.editPostTitle(newTitle);
});

When("I update the content to {kraken-string}", async function (newContent) {
  const editorPage = new PostEditorPage(this.driver);
  await editorPage.editPostContent(newContent);
});

When("I click the leave button", async function () {
  const editorPage = new PostEditorPage(this.driver);
  await editorPage.clickLeaveButton();
});

Then("the post title should be the same", async function () {
  const postsPage = new PostsPage(this.driver);
  await postsPage.navigateToPostEditPage();
  const editorPage = new PostEditorPage(this.driver);
  const actualTitle = await editorPage.checkPostTitle();

  expect(actualTitle.trim()).to.equal(this.noChangeTitle.trim());
});

Then("the post content should be the same", async function () {
  const editorPage = new PostEditorPage(this.driver);
  const actualContent = await editorPage.checkPostContent();

  expect(actualContent.trim()).to.equal(this.noChangeContent.trim());
});
