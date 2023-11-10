const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const expect = require('chai').expect;
const PostsPage = require('../page_objects/PostsPage');


Given('I login to Ghost', async function () {
    
  const username = "s.buritica@uniandes.edu.co";
  const password = "KYP6fLWKR5cef2d@N4Ym";

  await this.loginPage.login(username, password);
});

Given('there is an existing post that is published', async function() {

  let postsLink = await this.driver.$('a[data-test-nav="posts"]');
  await postsLink.click();
  
  const postsPage = new PostsPage(this.driver);

  if (!(await postsPage.doesPublishedPostExist())) {
    throw new Error('No published post found. Please create a published post before running this test.');
  }
});

When('I navigate to the post edit page', async function() {
  const postsPage = new PostsPage(this.driver);
  await postsPage.navigateToPostEditPage();
});

