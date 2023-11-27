import Login from "../pages/login";
const baseUrl = Cypress.config().baseUrl;

describe("Testing basic Login", () => {
  beforeEach(() => {
    cy.fixture("index.json").then((index) => {
      let urls = index.urls;

      cy.visit(urls.singin_url);
      cy.wait(7000);
      cy.url().should("eq", baseUrl + urls.singin_url);
    });
  });

  it("Login with correct credentials", () => {
    const ln = new Login();

    cy.fixture("index.json").then((index) => {
      let urls = index.urls;
      let credentials = index.credentials;
      let locators = index.locators;

      cy.get("form").within(() => {
        ln.setUserName(locators.email_input, credentials.email);
        ln.setPassword(locators.password_input, credentials.password);
        ln.clickLogin(locators.login_button);
        cy.wait(2000);
        ln.verifyLogin(urls.dashboard_url);
      });
    });
  });

  it("Login with bad username", () => {
    const ln = new Login();

    cy.fixture("index.json").then((index) => {
      let urls = index.urls;
      let credentials = index.credentials;
      let locators = index.locators;

      cy.get("form").within(() => {
        ln.setUserName(locators.email_input, credentials.bad_email);
        ln.setPassword(locators.password_input, credentials.password);
        ln.clickLogin(locators.login_button);
        cy.wait(2000);
        ln.verifyLogin(urls.singin_url);
      });
    });
  });

  it("Login with bad password", () => {
    const ln = new Login();

    cy.fixture("index.json").then((index) => {
      let urls = index.urls;
      let credentials = index.credentials;
      let locators = index.locators;

      cy.get("form").within(() => {
        ln.setUserName(locators.email_input, credentials.email);
        ln.setPassword(locators.password_input, credentials.bad_password);
        ln.clickLogin(locators.login_button);
        cy.wait(2000);
        ln.verifyLogin(urls.singin_url);
      });
    });
  });

  it("Login with bad credentials", () => {
    const ln = new Login();

    cy.fixture("index.json").then((index) => {
      let urls = index.urls;
      let credentials = index.credentials;
      let locators = index.locators;

      cy.get("form").within(() => {
        ln.setUserName(locators.email_input, credentials.bad_email);
        ln.setPassword(locators.password_input, credentials.bad_password);
        ln.clickLogin(locators.login_button);
        cy.wait(2000);
        ln.verifyLogin(urls.singin_url);
      });
    });
  });

  it("Login with incorrect email", () => {
    const ln = new Login();

    cy.fixture("index.json").then((index) => {
      let urls = index.urls;
      let credentials = index.credentials;
      let locators = index.locators;

      cy.get("form").within(() => {
        ln.setUserName(locators.email_input, credentials.incorrect_email);
        ln.setPassword(locators.password_input, credentials.bad_password);
        ln.clickLogin(locators.login_button);
        cy.wait(1000);
        cy.get(locators.bad_email_input).should('exist');
      });
    });
  });

  it("Login without password", () => {
    const ln = new Login();

    cy.fixture("index.json").then((index) => {
      let urls = index.urls;
      let credentials = index.credentials;
      let locators = index.locators;

      cy.get("form").within(() => {
        ln.setUserName(locators.email_input, credentials.incorrect_email);
        ln.clickLogin(locators.login_button);
        cy.wait(1000);
        cy.get(locators.bad_email_input).should('exist');
      });
    });
  });

});
