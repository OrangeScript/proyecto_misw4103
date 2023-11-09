const {Given, When, Then} = require('@cucumber/cucumber');
const Calculator = require('../lib/Calculator')
const assert = require('assert')
const expect = require('chai').expect;

When('I click login', async function () {
  let element = await this.driver.$('button[type="submit"]');
  await element.waitForExist({ timeout: 5000 });
  return await element.click();
});

When('I enter email {string}', async function (email) {
  let element = await this.driver.$('#identification');
  return await element.setValue(email);
});

When('I enter password {string}', async function (password) {
  let element = await this.driver.$('#password');
  return await element.setValue(password);
});

When('I click new post', async function() {
  let element = await this.driver.$('a[data-test-nav="new-story"]');
  return await element.click();;
});

When('I write post title {string}', async function(textTitle) {
  let element = await this.driver.$('textarea[data-test-editor-title-input]');
  return await element.setValue(textTitle);
});

When('I write post content text {string}', async function(textContent) {

  /*const elem = await this.driver.$('div[pointer-events-none]')

  await elem.waitUntil(async function () {
    return (await this.getText()) === 'Begin writing your post...'
  }, {
      timeout: 30000,
      timeoutMsg: 'expected text to be different after 5s'
  })*/
   


  /*this.driver.waitUntil(async()=>{
    const div = await this.driver.$('div[pointer-events-none]'); // Reemplaza con la clase del div
    const texto = await div.getText();

    return texto.includes('Begin writing your post...');
  }, {
    timeout: 30000, // Tiempo máximo de espera en milisegundos
    timeoutMsg: 'El texto no apareció en el div después del tiempo de espera'
  })*/


  //let element = await this.driver.$('p[dir="ltr"]');
  //await this.driver.$('p[dir="ltr"]');
  let element = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
  //await element.waitForExist({ timeout: 5000 });
  //let element2 = await this.driver.$('div[pointer-events-none]');
  
  element.click()
  let elem = await this.driver.$('span[data-lexical-text="true"]');
 
  return await elem.setValue(textContent);
});


