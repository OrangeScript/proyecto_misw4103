import Login from "../pages/login";
import Pages from "../pages/pages";
//import { faker } from '@faker-js/faker';
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

            const uuid = () => Cypress._.random(0, 1e6);
            const id = uuid();
            const testTitle = `testTitle${id}`;
            const testContent = `testContent${id}`;

            cy.get("header.gh-canvas-header-content").last().within(() => {
                pg.clickPages(locators.create_page)
                cy.wait(1000);
            });

            cy.get("main").within(() => {
                pg.verifyUrlPage(urls.edit_page)
                pg.writeData(locators.page_title, testTitle)
                cy.wait(1000);
                pg.clickPages(locators.page_content)
                pg.writeData(locators.page_content, testContent)
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

            const uuid = () => Cypress._.random(0, 1e6);
            const id = uuid();
            const testTitle = `testTitle${id}`;
            //const testContent = `testContent${id}`;


            cy.get("header.gh-canvas-header-content").last().within(() => {
                pg.clickPages(locators.create_page)
                cy.wait(1000);
            });

            cy.get("main").within(() => {
                pg.verifyUrlPage(urls.edit_page)
                pg.writeData(locators.page_title, testTitle)
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

            const uuid = () => Cypress._.random(0, 1e6);
            const id = uuid();
            //const testTitle = `testTitle${id}`;
            const testContent = `testContent${id}`;

            cy.get("header.gh-canvas-header-content").last().within(() => {
                pg.clickPages(locators.create_page)
                cy.wait(1000);
            });

            cy.get("main").within(() => {
                pg.verifyUrlPage(urls.edit_page)
                pg.writeData(locators.page_title, text_validation.string_200_characters)
                pg.writeData(locators.page_content, testContent)
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

            const uuid = () => Cypress._.random(0, 1e6);
            const id = uuid();
            const testTitle = `testTitle${id}`;
            const testContent = `testContent${id}`;
            const testExcerpt = `testExcerpt${id}`;
            const testDate = `testDate${id}`;

            cy.get("header.gh-canvas-header-content").last().within(() => {
                pg.clickPages(locators.create_page)
                cy.wait(1000);
            });

            cy.get("main").within(() => {
                pg.verifyUrlPage(urls.edit_page)
                pg.writeData(locators.page_title, testTitle)
                cy.wait(1000);
                pg.clickPages(locators.page_content)
                pg.writeData(locators.page_content, testContent)
                pg.clickPages(locators.page_settings)
                //pg.clickPages(locators.page_publish)
                cy.wait(1000);
            });

            cy.get("div.settings-menu-content").within(() => {
                pg.writeData(locators.page_publish_date, testDate)
                pg.writeData(locators.page_excerpt, testExcerpt)
                pg.verifyContent(text_validation.page_bad_date)
            });

        })

    });

  });
  