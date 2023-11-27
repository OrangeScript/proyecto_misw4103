import Login from "../pages/login";
import Pages from "../pages/pages";
const baseUrl = Cypress.config().baseUrl;

describe("Testing create page", () => {
    beforeEach(() => {
      const ln = new Login();
      const pg = new Pages();
  
      cy.fixture("index.json").then((index) => {
        let urls = index.urls;
        let credentials = index.credentials;
        let locators = index.locators;
  
        cy.visit(urls.singin_url);
        cy.wait(1000);
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
            cy.wait(1000);
            cy.get(locators.pages_navigation).click();
            cy.wait(2000);
            pg.verifyUrlPage(urls.pages_url);
        });
  
      });
    });
  
    
    it("Create a page", () => {
        const pg = new Pages();

        cy.fixture("index.json").then((index) => {
            let text_validation = index.text_validation;
            let locators = index.locators;
            let urls = index.urls;

            cy.get("header.gh-canvas-header-content").last().within(() => {
                pg.clickPages(locators.create_page)
                cy.wait(1000);
            });

            cy.get("main").within(() => {
                pg.verifyUrlPage(urls.edit_page)
                pg.writeData(locators.page_title, "hello page")
                cy.wait(1000);
                pg.clickPages(locators.page_content)
                pg.writeData(locators.page_content, "content page")
                pg.clickPages(locators.page_publish)
                cy.wait(1000);
            });

            cy.get("div.epm-modal-container").within(() => {
                pg.clickPages(locators.page_confirm_publish_1)
                cy.wait(1000);
                pg.clickPages(locators.page_confirm_publish_2)
                cy.wait(1000);
                pg.verifyContent(text_validation.page_created_succesfully)
            });
        })

    });

    it("Create a page without content", () => {
        const pg = new Pages();

        cy.fixture("index.json").then((index) => {
            let text_validation = index.text_validation;
            let locators = index.locators;
            let urls = index.urls;

            cy.get("header.gh-canvas-header-content").last().within(() => {
                pg.clickPages(locators.create_page)
                cy.wait(1000);
            });

            cy.get("main").within(() => {
                pg.verifyUrlPage(urls.edit_page)
                pg.writeData(locators.page_title, "hello page 2")
                pg.clickPages(locators.page_content)
                pg.clickPages(locators.page_publish)
                cy.wait(1000);
            });

            cy.get("div.epm-modal-container").within(() => {
                pg.clickPages(locators.page_confirm_publish_1)
                cy.wait(1000);
                pg.clickPages(locators.page_confirm_publish_2)
                cy.wait(1000);
                pg.verifyContent(text_validation.page_created_succesfully)
            });
        })

    });

    it("Try to create a page with more than 255 characters title", () => {
        const pg = new Pages();

        cy.fixture("index.json").then((index) => {
            let text_validation = index.text_validation;
            let locators = index.locators;
            let urls = index.urls;

            cy.get("header.gh-canvas-header-content").last().within(() => {
                pg.clickPages(locators.create_page)
                cy.wait(1000);
            });

            cy.get("main").within(() => {
                pg.verifyUrlPage(urls.edit_page)
                pg.writeData(locators.page_title, text_validation.string_200_characters)
                pg.writeData(locators.page_content, "content page")
                cy.wait(1000);
                pg.verifyNotExist(locators.page_publish)
            });

        })

    });

    it("Create a page with bad publish date", () => {
        const pg = new Pages();

        cy.fixture("index.json").then((index) => {
            let text_validation = index.text_validation;
            let locators = index.locators;
            let urls = index.urls;

            cy.get("header.gh-canvas-header-content").last().within(() => {
                pg.clickPages(locators.create_page)
                cy.wait(1000);
            });

            cy.get("main").within(() => {
                pg.verifyUrlPage(urls.edit_page)
                pg.writeData(locators.page_title, "hello page 3")
                cy.wait(1000);
                pg.clickPages(locators.page_content)
                pg.writeData(locators.page_content, "content page")
                pg.clickPages(locators.page_settings)
                //pg.clickPages(locators.page_publish)
                cy.wait(1000);
            });

            cy.get("div.settings-menu-content").within(() => {
                pg.writeData(locators.page_publish_date, "2023-12-31")
                pg.writeData(locators.page_excerpt, "Page excerpt")
                pg.verifyContent(text_validation.page_bad_date)
            });

        })

    });

  });
  