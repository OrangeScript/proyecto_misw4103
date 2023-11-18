const { Then } = require("@cucumber/cucumber");

Then("I enter to a post", async function () {
  //const postsPage = new PostsPage(this.driver);
  let listItem = await this.driver.$$('div.gh-posts-list-item-group');
  console.log('--------- HERE HERE HERE ---------')
  console.log(listItem)
  return await listItem[0].click()
});

Then("I open side menu", async function () {
  let element = await this.driver.$('button[title="Settings"]');
  return await element.click();
});

Then("I click delete post", async function () {
  let element = await this.driver.$(".settings-menu-delete-button > button");
  return await element.click();
});

Then("I click delete button", async function () {
  let buttons = await this.driver.$$(".modal-content > .modal-footer > button");

  if (buttons.length > 0) {
    let deleteButton = buttons[1];
    return await deleteButton.click();
  } else {
    console.log("No posts");
  }
});

Then("I click cancel button", async function () {
  let buttons = await this.driver.$$(".modal-content > .modal-footer > button");

  if (buttons.length > 0) {
    let deleteButton = buttons[0];
    return await deleteButton.click();
  } else {
    console.log("No posts");
  }
});
