const { Given, When } = require("@cucumber/cucumber");

//Given("I login to Ghost", async function () {
//  await this.loginPage.login();
//});

When("I enter email {kraken-string}", async function (email) {
  let element = await this.driver.$('input[name="identification"]');
  return await element.setValue(email);
});

When("I enter password {kraken-string}", async function (password) {
  let element = await this.driver.$("#password");
  return await element.setValue(password);
});

When("I click login", async function () {
  let element = await this.driver.$('button[type="submit"]');
  await element.waitForExist({ timeout: 5000 });
  return await element.click();
});

When("I check dashboard URL", async function () {
  let currentUrl = await this.driver.getUrl();
  return currentUrl.includes("dashboard");
});

When("I get retry button", async function () {
    let retryButton = await this.driver.$('span[data-test-task-button-state="failure"]')
    await retryButton.click()
    //let currentUrl = await this.driver.getUrl();
    //return currentUrl.includes("dashboard");
  });

Then ('I get red incorrect form field', async function () {
    let redIcorrectField = await this.driver.$('div.form-group.error');
    return redIcorrectField;
  });
