const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#identification');
    return await element.setValue(email);
  });
  
When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
  });

When('I click login', async function () {
    let element = await this.driver.$('button[type="submit"]');
    await element.waitForExist({ timeout: 5000 });
    return await element.click();
  });
  