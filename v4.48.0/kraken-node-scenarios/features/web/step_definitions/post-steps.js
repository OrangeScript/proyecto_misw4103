const { When, Then } = require("@cucumber/cucumber");
const expect = require("chai").expect;

When("I click on posts", async function () {
  let element = await this.driver.$('a[href="#/posts/"]');
  return await element.click();
});

When("I click new post", async function () {
  let element = await this.driver.$('a[href="#/editor/post/"]');
  return await element.click();
});

When("I write post title {string}", async function (textTitle) {
  let element = await this.driver.$(".gh-editor-title");
  return await element.setValue(textTitle);
});

When("I click post content text", async function () {
  let element = await this.driver.$('p[data-koenig-dnd-droppable="true"]');

  return await element.click();
});

When("I write the post content {string}", async function (textContent) {
  let element = await this.driver.$("p[data-koenig-dnd-droppable=true]");
  return await element.setValue(textContent);
});

When("I delete the post content", async function () {
  let element = await this.driver.$("p[data-koenig-dnd-droppable=true]");
  return await element.setValue("");
});

When("I publish the post", async function () {
  let element = await this.driver.$(".gh-btn.gh-btn-editor.gh-publishmenu-trigger");
  return await element.click();
});

When("I continue to the final review", async function () {
  let element = await this.driver.$(".gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon");
  return await element.click();
});

When("I confirm to the final post", async function () {
  let element = await this.driver.$(
    '.gh-btn.gh-btn-black.gh-btn-icon'
  );
  return await element.click();
});

Then("I see the post bookmark confirmation", async function () {
  //The $$ command is a short and handy way in order to fetch multiple elements on the page
  let element = await this.driver.$$(".gh-notification-content");
  expect(element.length > 0).to.equal(true);
});

When("I click in the add button", async function () {
  let element = await this.driver.$('button[aria-label="Add a card"]');
  await element.waitForExist({ timeout: 5000 });
  return await element.click();
});

When("I click in the toggle menu option", async function () {
  let element = await this.driver.$('.flex.flex-shrink-0[title="Toggle"]');
  await element.waitForExist({ timeout: 5000 });
  return await element.click();
});

When("I click in the header toggle", async function () {
  let element = await this.driver.$(
    '.koenig-basic-html-input__editor'
  );
  return await element.click();
});

When("I write the header content {string}", async function (headerContent) {
  let element = await this.driver.$(
    ".koenig-basic-html-input__editor"
  );
  return await element.setValue(headerContent);
});

When("I click in the collapsible toggle", async function () {
  let element = await this.driver.$(".koenig-basic-html-textarea__editor");
  return await element.click();
});

When(
  "I write the collapsible content {string}",
  async function (collapsibleContent) {
    let element = await this.driver.$(
      ".koenig-basic-html-textarea__editor"
    );
    return await element.setValue(collapsibleContent);
  }
);

When("I select the bookmark option", async function () {
  let element = await this.driver.$(
    '.flex.flex-shrink-0[title="Bookmark"]'
  );
  await element.click();
  let element2 = await this.driver.$('button[aria-label="Add a card"]');
  await element2.waitForExist({ timeout: 5000 });
  await element2.click();
  await element.click();
});

When("I select the button option", async function () {
  let element = await this.driver.$('button[data-kg-card-menu-item="Button"]');
  return await element.click();
});

When("I select the HTML option", async function () {
  let element = await this.driver.$('button[data-kg-card-menu-item="HTML"]');
  return await element.click();
});

When("I select the Markdown option", async function () {
  let element = await this.driver.$('button[data-kg-card-menu-item="HTML"]');
  return await element.click();
});

When("I fill the button's settings", async function () {
  const inputButtonText = await this.driver.$(
    'input[data-testid="button-input-text"]'
  );
  await inputButtonText.click();
  await inputButtonText.setValue("Button");

  const inputButtonUrl = await this.driver.$(
    'input[data-testid="button-input-url"]'
  );
  await inputButtonUrl.click();
  await inputButtonUrl.setValue("https://www.coursera.org/");
  return await this.driver.keys("Enter");
});

When("I fill the HTML settings", async function () {
  const element = await this.driver.$('div[data-kg-card-editing="true"]');
  await element.click();
  await element.setValue("<h1>Hola mundo</h1>");
  return await this.driver.keys("Enter");
});

When("I fill the Markdown settings", async function () {
  const element = await this.driver.$('div[data-kg-card-editing="true"]');
  await element.click();
  await element.setValue("# Hola mundo");
  return await this.driver.keys("Enter");
});

When("I fill the Header settings", async function () {
  const element = await this.driver.$('div[class="kg-prose"]');
  return await element.click();
});

When("I write the anchor {string}", async function (url) {
  let element = await this.driver.$('input.miw-100.pa2.ba.br2.b--lightgrey-d2.f7.form-text.lh-title.tracked-2.h10.nl2.nr2');
  await element.setValue(url);
  return await this.driver.keys("Enter");
});

When("I click into the post body", async function () {
  let element = await this.driver.$("p[data-koenig-dnd-droppable=true]");
  return await element.click();
});

When(
  "I attempt to create a post without a title and content",
  async function () {
    let titleElement = await this.driver.$(
      "textarea[data-test-editor-title-input]"
    );
    await titleElement.click();
    await titleElement.setValue("");

    let bodyElement = await this.driver.$(
      'p[data-koenig-dnd-droppable="true"]'
    );
    await bodyElement.click();
    await bodyElement.setValue("");
  }
);

Then("I see the publish button should not be visible", async function () {
  let element = await this.driver.$(".gh-publish-trigger");
  let isVisible = await element.isDisplayed();

  expect(isVisible).to.be.false;
});
