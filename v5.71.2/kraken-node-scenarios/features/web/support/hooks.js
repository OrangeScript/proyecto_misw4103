const { After, Before, BeforeStep, BeforeAll } = require("@cucumber/cucumber");
const { WebClient } = require("kraken-node");
const LoginPage = require("../page_objects/LoginPage");
const PostsPage = require("../page_objects/PostsPage");
const TagPage = require("../page_objects/TagPage");
const fs = require("fs");

var stepCounter = 1;

Before(async function (scenario) {
  this.deviceClient = new WebClient("chrome", {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);

  this.loginPage = new LoginPage(this.driver);
  this.postsPage = new PostsPage(this.driver);
  this.tagPage = new TagPage(this.driver);

  this.scenarioName = scenario.pickle.name.match(/Scenario\d+/)[0];
});

After(async function () {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});

BeforeStep(async function () {
  this.driver.saveScreenshot(
    `screenshots/kraken_${this.scenarioName}_5712_step_${stepCounter}.png`
  );
  stepCounter++;
});

BeforeAll(async function () {
  const screenshotsDir = `./screenshots`;
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }
});
