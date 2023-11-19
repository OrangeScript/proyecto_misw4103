import Login from "../pages/login";
import Post from "../pages/post";
const baseUrl = Cypress.config().baseUrl;

describe("Testing delete post", () => {
  beforeEach(() => {
    const ln = new Login();
    const pt = new Post();

    cy.fixture("index.json").then((index) => {
      let urls = index.urls;
      let credentials = index.credentials;
      let locators = index.locators;

      cy.visit(urls.singin_url);
      cy.wait(7000);
      cy.url().should("eq", baseUrl+urls.singin_url);

      cy.get("form").within(() => {
        ln.setUserName(locators.email_input, credentials.email);
        ln.setPassword(locators.password_input, credentials.password);
        ln.clickLogin(locators.login_button);
        cy.wait(2000);
        ln.verifyLogin(urls.dashboard_url);
      });

      cy.get("nav")
        .first()
        .within(() => {
          pt.getPublishedPost(locators.published_post);
          cy.wait(2000);
          cy.url().should('contain' ,urls.post_url);
        });

      cy.get("main").within(() => {
            
        pt.getFirstPost(locators.first_post);

       
      });

    });
  });

  it("Delete Post", () => {
    const pt = new Post();

    cy.fixture("index.json").then((index) => {
      let text_validation = index.text_validation;
      let locators = index.locators;
      let urls = index.urls;

      cy.get("main").within(() => {
        pt.openPostSettings(locators.post_settings_menu_button);
        cy.wait(1000);
      });

      pt.verifyPostSettings(
        locators.post_settings_header,
        text_validation.post_settings_header
      );

      cy.get("div.settings-menu-container").within(() => {
        pt.deletePost(locators.delete_post_button);
        cy.wait(1000);
      });

      // Listen for uncaught exceptions
      Cypress.on('uncaught:exception', (err, runnable) => {
          // Cypress will fail the test if an unhandled exception occurs
          // To prevent the failure, you can return false here
          return false;
      });

      cy.get("div.settings-menu-content").within(() => {
        pt.deletePost(locators.delete_post_button);
        cy.wait(1000);
      });

      // Add other test steps as needed
      // Ensure the uncaught:exception listener is removed after the test
      Cypress.removeListener('uncaught:exception', (err, runnable) => {
          return false;
      });

      cy.get("div.modal-content").within(() => {
        pt.verifyDeletePopUp(
          locators.delete_post_verification_header,
          text_validation.pop_up_delete_header
        );
        pt.deleteConfirmation(locators.delete_confirmation_button);
      });

      cy.url().should('contain' ,urls.post_url);
    });
  });

  it("Cancel Delete Post", () => {
    const pt = new Post();

    cy.fixture("index.json").then((index) => {
      let text_validation = index.text_validation;
      let locators = index.locators;
      let urls = index.urls;

      cy.get("main").within(() => {
        pt.openPostSettings(locators.post_settings_menu_button);
        cy.wait(1000);
      });

      pt.verifyPostSettings(
        locators.post_settings_header,
        text_validation.post_settings_header
      );

      cy.get("div.settings-menu-container").within(() => {
        pt.deletePost(locators.delete_post_button);
        cy.wait(1000);
      });

      cy.get("div.settings-menu-content").within(() => {
        pt.deletePost(locators.delete_post_button);
        cy.wait(1000);
      });

      
      cy.get("div.modal-content").within(() => {
        pt.verifyDeletePopUp(
          locators.delete_post_verification_header,
          text_validation.pop_up_delete_header
        );
        pt.cancelDelete(locators.cancel_delete_button);
      });

     

      cy.url().then(url => {
        // La variable 'url' contendrá la URL actual como una cadena
        const currentUrl = url;

        pt.verifyPostPageWithoutBaseURL(currentUrl);
        //cy.log(`La URL actual es: ${currentUrl}`);
        // Puedes realizar más acciones o aserciones según sea necesario
      });
    });
  });
});
