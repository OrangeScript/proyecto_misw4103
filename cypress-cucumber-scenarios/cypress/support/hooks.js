const { After, Before, BeforeStep, BeforeAll } = require("@badeball/cypress-cucumber-preprocessor");

var stepCounter = 1;

Before(async function (scenario) {

  console.log("antes...")
});

/*
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
});*/
