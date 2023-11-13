import Login from "../pages/login";
import Post from "../pages/post";

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
      cy.url().should("eq", urls.singin_url);

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
          pt.clickPost(locators.posts_navigation);
          cy.wait(2000);
          pt.verifyPostPage(urls.post_url);
        });

      cy.get("main").within(() => {
        pt.getFirstPost(locators.first_post);
        cy.wait(2000);
        pt.verifyPostPage(urls.edit_post_url);
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

      cy.get("div.settings-menu-content").within(() => {
        pt.deletePost(locators.delete_post_button);
        cy.wait(1000);
      });

      cy.get("div.modal-content").within(() => {
        pt.verifyDeletePopUp(
          locators.delete_post_verification_header,
          text_validation.pop_up_delete_header
        );
        pt.deleteConfirmation(locators.delete_confirmation_button);
      });

      pt.verifyPostPage(urls.post_url);
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

      pt.verifyPostPage(urls.edit_post_url);
    });
  });
});
