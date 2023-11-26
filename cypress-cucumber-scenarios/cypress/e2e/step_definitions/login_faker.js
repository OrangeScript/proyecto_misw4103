import { When } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";

When("I enter fake email", () => {
  cy.get("form").within(() => {
    ln.setUserName(locators.email_input, faker.internet.exampleEmail());
    cy.wait(2000);
  });
});

When("I enter fake password", () => {
  cy.get("form").within(() => {
    ln.setPassword(locators.password_input, faker.hacker.phrase());
    cy.wait(2000);
  });
});

When("I enter invalid number values to email input", () => {
  cy.get("form").within(() => {
    ln.setUserName(
      locators.email_input,
      faker.random.numeric(42, { allowLeadingZeros: true })
    );
    cy.wait(2000);
  });
});

When("I enter invalid number values to email input", () => {
  cy.get("form").within(() => {
    ln.setPassword(
      locators.password_input,
      faker.random.numeric(42, { allowLeadingZeros: false })
    );
    cy.wait(2000);
  });
});

When("I enter invalid string values to email input", () => {
  cy.get("form").within(() => {
    ln.setUserName(locators.email_input, faker.lorem.paragraph());
    cy.wait(2000);
  });
});

When("I enter invalid string values to email input", () => {
  cy.get("form").within(() => {
    ln.setPassword(locators.password_input, faker.lorem.paragraph());
    cy.wait(2000);
  });
});
