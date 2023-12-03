import { Given, Then, When, BeforeStep } from "@badeball/cypress-cucumber-preprocessor";
import Login from "../../pages/login";
import { faker } from "@faker-js/faker";
var ln= null;
var urls = null;
var credentials = null;
var locators = null;
let isPositiveScenario = false;

BeforeStep(function ({ pickle, pickleStep, gherkinDocument, testCaseStartedId, testStepId }) {
   // Antes de cada paso con la etiqueta @negative, establecer la bandera como negativa
   const annotations = pickle.tags.map(tag => tag.name);
    if (annotations.includes('@negative')) {
      isPositiveScenario = false;
    } else {
      isPositiveScenario = true;
    }
 });
 


Given('I navigate to page of Ghost', () => {
   ln = new Login();
   cy.fixture("index.json").then((index) => {
      urls = index.urls;
      credentials = index.credentials;
      locators = index.locators;
      cy.visit(urls.singin_url);
    });
   
})

When("I wait for {int} seconds", (time) => {
   cy.wait(time * 1000);
 });


When("I enter email {string}", (email) => {
   cy.get("form").within(() => {
        ln.setUserName(locators.email_input, email);
        cy.wait(2000);
   });
   
});
 
 When("I enter password {string}", (password) => {
   cy.get("form").within(() => {
      ln.setPassword(locators.password_input, password);
      cy.wait(2000);
    });
 });

 When("I click login", () => {
   cy.get("form").within(() => {
      ln.clickLogin(locators.login_button);
      cy.wait(2000);
    });
 });

 When("I enter a valid credential", (datatable) => {

  datatable.hashes().forEach((element) => {
    cy.get("form").within(() => {
      ln.setUserName(locators.email_input, element.email);
      cy.wait(2000);
      ln.setPassword(locators.password_input, element.password);
      cy.wait(2000);
    });

  });
   
});

Given('I signin to Ghost', () => {
  ln = new Login();
  cy.fixture("index.json").then((index) => {
    urls = index.urls;
    credentials = index.credentials;
    locators = index.locators;
    cy.visit(urls.singin_url);

    cy.get("form").within(() => {
      ln.setUserName(locators.email_input, credentials.email);
      cy.wait(2000);
      ln.setPassword(locators.password_input, credentials.password);
      cy.wait(2000);
      ln.clickLogin(locators.login_button);
    });

   });
  
})


 Then("I check dashboard URL", () => {
   if (isPositiveScenario) {
     ln.verifyLogin(urls.dashboard_url);
   } else {
     cy.get('.main-error').contains('Your password is incorrect.');
   }
 });

//Faker
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

When("I enter invalid number values to password input", () => {
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

When("I enter invalid string values to password input", () => {
  cy.get("form").within(() => {
    ln.setPassword(locators.password_input, faker.lorem.paragraph());
    cy.wait(2000);
  });
});


Then("I get retry button", () => {
  cy.get('button[data-test-button="sign-in"] span[data-test-task-button-state="failure"]')
  .should('exist') 
});


Then ('I get red incorrect form field', () => {
  cy.get('div.form-group.error').should('exist');
});
