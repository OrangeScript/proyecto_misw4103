import Login from "../pages/login";
import Tag from "../pages/tags";
const baseUrl = Cypress.config().baseUrl;

describe("Testing create an internal tag", () => {
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

        cy.get("div.gh-canvas-header").within(() => {
            cy.get(locators.tags_internal).last().click()
            tg.verifyTagsPage(urls.internal_tags_url);
        });

      });
    });

    it("Crear un tag interno usando todos los campos del form", () => {
        const tg = new Tag();

        cy.fixture("index.json").then((index) => {
            let text_validation = index.text_validation;
            let locators = index.locators;
            let urls = index.urls;

            const uuid = () => Cypress._.random(0, 1e6);
            const id = uuid();
            const tagTitle = `testTitle${id}`;
            const tagSlug = `testContent${id}`;
            const tagDescription = `testContent${id}`;

            cy.get("main").first().within(() => {
                tg.clickTags(locators.new_tag_button);
                cy.wait(1000);
                tg.verifyTagsPage(urls.new_tag_url);
            });

            cy.get("form").within(() => {
                tg.writeDate(locators.tag_name, tagTitle);
                tg.writeDate(locators.tag_color, "ffffff");
                tg.writeDate(locators.tag_slug, tagSlug);
                tg.writeDate(locators.tag_description, tagDescription);
            })

            //cy.get("div.input-color").within(() => {
            //    tg.writeDate(locators.tag_color, "ffffff");
            //})

            cy.get("section.view-actions").within(() => {
                tg.clickTags(locators.tag_save);
                cy.wait(500);
                tg.verifyContennt("Saved");
            })

        });

    });

    it("Crear un tag interno definiendo solo el Nombre", () => {
        const tg = new Tag();

        cy.fixture("index.json").then((index) => {
            let text_validation = index.text_validation;
            let locators = index.locators;
            let urls = index.urls;

            const uuid = () => Cypress._.random(0, 1e6);
            const id = uuid();
            const tagTitle = `testTitle${id}`;

            cy.get("main").first().within(() => {
                tg.clickTags(locators.new_tag_button);
                cy.wait(1000);
                tg.verifyTagsPage(urls.new_tag_url);
            });

            cy.get("form").within(() => {
                tg.writeDate(locators.tag_name, tagTitle);
            })

            cy.get("section.view-actions").within(() => {
                tg.clickTags(locators.tag_save);
                cy.wait(500);
                tg.verifyContennt("Saved");
            })

        });
    });

    it("Crear un tag interno con cadena de texto de 200 caracteres", () => {
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

    it("Crear un tag interno con Meta data", () => {
        const tg = new Tag();

        cy.fixture("index.json").then((index) => {
            let text_validation = index.text_validation;
            let locators = index.locators;
            let urls = index.urls;

            const uuid = () => Cypress._.random(0, 1e6);
            const id = uuid();
            const tagTitle = `testTitle${id}`;
            const tagSlug = `testContent${id}`;
            const tagDescription = `testContent${id}`;

            cy.get("main").first().within(() => {
                tg.clickTags(locators.new_tag_button);
                cy.wait(1000);
                tg.verifyTagsPage(urls.new_tag_url);
            });

            cy.get("form").within(() => {
                tg.writeDate(locators.tag_name, tagTitle);
                tg.writeDate(locators.tag_color, "ffffff");
                tg.writeDate(locators.tag_slug, tagSlug);
                tg.writeDate(locators.tag_description, tagDescription);
            });

            //cy.get("div.input-color").within(() => {
            //    tg.writeDate(locators.tag_color, "ffffff");
            //});

            const tagMetaTitle = `testContent${id}`;
            const tagMetaDescription = `testContent${id}`;

            cy.get("section.gh-expandable").within(() => {
                cy.get(locators.tag_metadata_expand).first().click();
                tg.writeDate(locators.input_meta_title, tagMetaTitle);
                tg.writeDate(locators.input_meta_description, tagMetaDescription);
                tg.writeDate(locators.input_canonical_url, "https://www.youtube.com/");
            });

            cy.get("section.view-actions").within(() => {
                tg.clickTags(locators.tag_save);
                cy.wait(500);
                tg.verifyContennt("Saved");
            })


        });
    });

    it("Crear un tag interno sin nombre", () => {
        const tg = new Tag();

        cy.fixture("index.json").then((index) => {
            let text_validation = index.text_validation;
            let locators = index.locators;
            let urls = index.urls;

            const uuid = () => Cypress._.random(0, 1e6);
            const id = uuid();
            const tagSlug = `testContent${id}`;
            const tagDescription = `testContent${id}`;

            cy.get("main").first().within(() => {
                tg.clickTags(locators.new_tag_button);
                cy.wait(1000);
                tg.verifyTagsPage(urls.new_tag_url);
            });

            cy.get("form").within(() => {
                tg.writeDate(locators.tag_slug, tagSlug);
                tg.writeDate(locators.tag_description, tagDescription);
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
