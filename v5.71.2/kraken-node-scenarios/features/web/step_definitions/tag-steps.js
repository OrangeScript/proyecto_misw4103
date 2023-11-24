const { When, Then } = require("@cucumber/cucumber");
const expect = require("chai").expect;
const TagPage = require("../page_objects/TagPage");
const long_tag_name = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu'

When("I navigate to tags page", async function () {
    let element = await this.driver.$('a[data-test-nav="tags"]');
    return await element.click();
  });

When("click on new tag", async function () {
    let element = await this.driver.$('a[class="ember-view gh-btn gh-btn-primary"]');
    return await element.click();
  });

When ('I write the tag name as {string}', async function (tagName) {
    let element = await this.driver.$("input[data-test-input='tag-name']");
    return await element.setValue(tagName);
  });

When ('I define the tag color as {string}', async function (tagColor) {
    let element = await this.driver.$("input[data-test-input='accentColor']");
    return await element.setValue(tagColor);
  });

When ('I write a tag desescription {string}', async function (tagDescription) {
    let element = await this.driver.$("textarea[data-test-input='tag-description']");
    return await element.setValue(tagDescription);
  });

When("click on save button", async function () {
    let element = await this.driver.$("button[data-test-button='save']");
    return await element.click();
  });


Then("I verify message button {kraken-string}", async function (expectedMessage) {
    const tagPage = new TagPage(this.driver);
    const currentButtonMessage = await tagPage.checkTagCreation();

    expect(currentButtonMessage).to.equal(expectedMessage);
})

Then("I verify error message button {kraken-string}", async function (expectedMessage) {
    const tagPage = new TagPage(this.driver);
    const currentButtonMessage = await tagPage.checkCreationError();

    expect(currentButtonMessage).to.equal(expectedMessage);
})

When("I go to internal tag option", async function () {
    let element = await this.driver.$("button[data-test-tags-nav='internal']");
    return await element.click();
  });

When("I enter to first tag", async function () {
    const firstTag = new TagPage(this.driver);
    const clickOnFirstTag = firstTag.getFirstTag()
  });

When("I change title name to {kraken-string}", async function (newTitle) {
    let element = await this.driver.$("input[data-test-input='tag-name']");
    return await element.setValue(newTitle);
})

When("I click on delete button", async function () {
    let element = await this.driver.$("button[data-test-button='delete-tag']");
    return await element.click();
})

When("I click confirm the delete", async function () {
    let element = await this.driver.$("button[data-test-button='delete-tag']");
    return await element.click();
})


Then ('I confirm the url contains {kraken-string}', async function (url) {
    let currentUrl = await this.driver.getUrl();
    return currentUrl.includes(url);
});

When ('I write a long tag name', async function () {
  let element = await this.driver.$("input[data-test-input='tag-name']");
  return await element.setValue(long_tag_name);
});