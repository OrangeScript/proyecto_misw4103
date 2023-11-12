const { EMAIL, PASSWORD, LOGIN_URL } = require("../../../properties.json");
class LoginPage {
  constructor(driver) {
    this.driver = driver;
    this.usernameInput = 'input[name="identification"]';
    this.passwordInput = 'input[name="password"]';
    this.submitButton = 'button[type="submit"]';
  }

  async open() {
    await this.driver.url(LOGIN_URL);
  }

  async login() {
    const username = EMAIL;
    const password = PASSWORD;

    await this.open();

    const usernameInput = await this.driver.$(this.usernameInput);
    await usernameInput.setValue(username);

    const passwordInput = await this.driver.$(this.passwordInput);
    await passwordInput.setValue(password);

    const submitButton = await this.driver.$(this.submitButton);
    await submitButton.click();

    await this.driver.waitUntil(async () => {
      const currentUrl = await this.driver.getUrl();
      return currentUrl.includes("dashboard");
    });
  }
}

module.exports = LoginPage;
