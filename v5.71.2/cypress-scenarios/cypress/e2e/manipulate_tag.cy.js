import Login from "../pages/login";
import Tag from "../pages/tags";
const baseUrl = Cypress.config().baseUrl;

describe("Testing create a tag", () => {
    beforeEach(() => {
      const ln = new Login();
      const tg = new Tag();
  
      cy.fixture("index.json").then((index) => {
        let urls = index.urls;
        let credentials = index.credentials;
        let locators = index.locators;
  
        cy.visit(urls.singin_url);
        cy.wait(3000);
        cy.url().should("eq", baseUrl+urls.singin_url);
  
        cy.get("form").within(() => {
          ln.setUserName(locators.email_input, credentials.email);
          ln.setPassword(locators.password_input, credentials.password);
          ln.clickLogin(locators.login_button);
          cy.wait(3000);
          ln.verifyLogin(urls.dashboard_url);
        });

        cy.get("nav")
          .first()
          .within(() => {
            cy.wait(1000);
            tg.clickTags(locators.tags_navigation);
            cy.wait(2000);
            tg.verifyTagsPage(urls.tags_url);
          });

      });
    });

    it("Editar un tag", () => {
        const tg = new Tag();

        cy.fixture("index.json").then((index) => {
            let text_validation = index.text_validation;
            let locators = index.locators;
            let urls = index.urls;

            cy.get("main").first().within(() => {
                tg.getFirstTag(locators.tag_first);
            });

            cy.get("form").within(() => {
                //tg.clickTags(locators.tag_name);
                tg.writeDate(locators.tag_name, "edit");
            })

            cy.get("section.view-actions").within(() => {
                tg.clickTags(locators.tag_save);
                cy.wait(500);
                tg.verifyContennt("Saved");
            })

        });

    });

    it("Eliminar un tag", () => {
        const tg = new Tag();

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
          });

        cy.fixture("index.json").then((index) => {
            let text_validation = index.text_validation;
            let locators = index.locators;
            let urls = index.urls;

            cy.get("main").first().within(() => {
                tg.getFirstTag(locators.tag_first);
            });

            cy.get("main").within(() => {
                tg.clickTags(locators.tag_delete);
                cy.wait(1000);
            })

            cy.get(".epm-modal-container").within(() => {
                tg.clickTags(locators.tag_delete_confirm);
                cy.wait(2000);
                tg.verifyTagsPage(urls.tags_url);
            })

        });

    });

});
