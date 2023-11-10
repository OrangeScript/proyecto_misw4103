const {Given, When, Then} = require('@cucumber/cucumber');
const assert = require('assert')
const expect = require('chai').expect;


When('I click new post', async function() {
  let element = await this.driver.$('a[data-test-nav="new-story"]');
  return await element.click();;
});

When('I write post title {string}', async function(textTitle) {
  let element = await this.driver.$('textarea[data-test-editor-title-input]');
  return await element.setValue(textTitle);
});

When('I click post content text', async function() {

  let element = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
 
  return await element.click() 
});

When('I write the post content {string}', async function(textContent) {
  let element = await this.driver.$('p[data-koenig-dnd-droppable=true]');
  return await element.setValue(textContent);
});


When('I publish the post', async function(){
  let element = await this.driver.$('.gh-publish-trigger');
  return await element.click();
});

When ('I continue to the final review', async function(){
  let element = await this.driver.$('.gh-publish-cta > button');
  return await element.click();
});

When ('I confirm to the final post', async function(){
  let element = await this.driver.$('button[data-test-button="confirm-publish"]');
  return await element.click();
});

Then('I see the post bookmark confirmation', async function(){
  //The $$ command is a short and handy way in order to fetch multiple elements on the page
  let element = await this.driver.$$('.gh-publish-title');
  expect(element.length > 0).to.equal(true);
});

