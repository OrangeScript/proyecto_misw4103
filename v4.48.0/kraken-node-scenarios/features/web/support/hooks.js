const { After, Before } = require("@cucumber/cucumber");
const { WebClient } = require("kraken-node");
const LoginPage = require("../page_objects/LoginPage");
const PostsPage = require("../page_objects/PostsPage");
//const TagPage = require("../page_objects/TagPage");

Before(async function () {
  this.deviceClient = new WebClient("chrome", {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);

  this.loginPage = new LoginPage(this.driver);
  this.postsPage = new PostsPage(this.driver);
//  this.tagPage = new TagPage(this.driver);
});

After(async function () {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});
