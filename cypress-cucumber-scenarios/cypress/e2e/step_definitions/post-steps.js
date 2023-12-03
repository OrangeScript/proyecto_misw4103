import { Given, When, Then, Step, BeforeStep} from "@badeball/cypress-cucumber-preprocessor";
import {expect} from "chai";

When('I click on posts', () => {
  let element = cy.get('a[data-test-nav="posts"]');
  element.click();
});

