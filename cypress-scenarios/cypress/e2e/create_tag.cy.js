import Login from "../pages/login";
import Tag from "../pages/tags";


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
        cy.url().should("eq", urls.singin_url);
  
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
  
    it("Create a tag", () => {
        const tg = new Tag();

        cy.fixture("index.json").then((index) => {
            let text_validation = index.text_validation;
            let locators = index.locators;
            let urls = index.urls;

            cy.get("main").first().within(() => {
                tg.clickTags(locators.new_tag_button);
                cy.wait(1000);
                tg.verifyTagsPage(urls.new_tag_url);
            });

            cy.get("form").within(() => {
                tg.writeDate(locators.tag_name, "new tag");
                tg.writeDate(locators.tag_color, "ffffff");
                tg.writeDate(locators.tag_slug, "tag slug");
                tg.writeDate(locators.tag_description, "hello world");
            })

            cy.get("section.view-actions").within(() => {
                tg.clickTags(locators.tag_save);
            })

        });

    });

});
