//import { last } from "lodash";
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

    it("Crear un tag interno usando todos los campos del form", () => {
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
                tg.writeDate(locators.tag_slug, "tag slug");
                tg.writeDate(locators.tag_description, "hello world");
            })

            cy.get("section.view-actions").within(() => {
                tg.clickTags(locators.tag_save);
                cy.wait(500);
                tg.verifyContennt("Saved");
            })

        });

    });

    it("Crear un tag publico definiendo solo el Nombre", () => {
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
                tg.writeDate(locators.tag_name, "new simple internal tag");
            })

            cy.get("section.view-actions").within(() => {
                tg.clickTags(locators.tag_save);
                cy.wait(500);
                tg.verifyContennt("Saved");
            })

        });
    });

    it("Crear un tag publico con cadena de texto de 200 caracteres", () => {
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
                tg.writeDate(locators.tag_name, text_validation.string_200_characters);
            })

            cy.get("section.view-actions").within(() => {
                tg.clickTags(locators.tag_save);
                cy.wait(500);
            })

            cy.get("form").within(() => {
                tg.verifyContennt("Tag names cannot be longer than 191 characters.")
            })

        });
    });

    it("Crear un tag publico con Meta data", () => {
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
                tg.writeDate(locators.tag_name, "new internal tag");
                tg.writeDate(locators.tag_color, "ffffff");
                tg.writeDate(locators.tag_slug, "tag slug");
                tg.writeDate(locators.tag_description, "hello world");
            });

            cy.get("div.input-color").within(() => {
                tg.writeDate(locators.tag_color, "ffffff");
            });

            cy.get("section.gh-expandable").within(() => {
                cy.get(locators.tag_metadata_expand).first().click();
                tg.writeDate(locators.input_meta_title, "meta title");
                tg.writeDate(locators.input_meta_description, "meta description");
                tg.writeDate(locators.input_canonical_url, "https://www.youtube.com/");
            });

            cy.get("section.view-actions").within(() => {
                tg.clickTags(locators.tag_save);
                cy.wait(500);
                tg.verifyContennt("Saved");
            })


        });
    });

    it("Crear un tag publico sin nombre", () => {
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
                //tg.writeDate(locators.tag_name, "new tag");
                //tg.writeDate(locators.tag_color, "ffffff");
                tg.writeDate(locators.tag_slug, "tag slug");
                tg.writeDate(locators.tag_description, "hello world");
            })

            cy.get("section.view-actions").within(() => {
                tg.clickTags(locators.tag_save);
                cy.wait(500);
            })

            cy.get("form").within(() => {
                tg.verifyContennt("You must specify a name for the tag.")
            })

        });

    });


});
