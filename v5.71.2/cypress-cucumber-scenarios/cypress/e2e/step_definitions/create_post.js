import { Given, When, Then, Step} from "@badeball/cypress-cucumber-preprocessor";
import Login from "../../pages/login";
import Post from "../../pages/post";
var pt= null;
var locators = null;

When("I click new post", () => {
    pt = new Post();
    cy.fixture("index.json").then((index) => {
        locators = index.locators;
        pt.clickPost(locators.new_post);
      });

});

When("I write the post title {string}", (textTitle) => {
    pt.editPostTitle(locators.post_title, textTitle);
});

When("I click post content text", () => {
  pt.clickPost(locators.post_content);
});

When("I click in the add button", () => {
  pt.clickPost(locators.new_card);
});

When("I select the {string} option", (type) => {
  cy.get(`button[data-kg-card-menu-item="${type}"]`).click();
  switch (type) {
    case "Button":
      Step(this, "I fill the button's settings");
      break;
    case "Bookmark":
      Step(this, "I write the anchor");
      break;
    case "Markdown":
        Step(this, `I fill the "${type}" settings`);
        break;
    case "HTML":
        Step(this, `I fill the "${type}" settings`);
        break;
    case "Image":
        Step(this, "I fill the image's settings");
        break;
    case "Email content":
        cy.get('div[data-kg-card-editing="true"] [data-kg="editor"] .kg-prose').click().type("Content,");
        cy.get('div[data-kg-card-editing="true"] [data-kg="editor"] .kg-prose').click().type("{enter}");
        cy.wait(1000);
      break;
    case "Callout":
        Step(this, `I fill the "${type}" settings`);
        break;
    case "Toggle":
        Step(this, `I write the header toggle "Header toggle"`);
        Step(this, `I write the collapsible toggle content "Toggle Content"`);
        break;
    // Agrega más casos según sea necesario
    default:
      // Tratamiento por defecto si el valor de type no coincide con ningún caso
      break;
  }

});

When("I publish the post", () => {
  pt.clickPost(locators.publish_post);
});

When("I continue to the final review", () => {
  pt.clickPost(locators.final_review);
});

When("I confirm to the final post", () => {
  pt.clickPost(locators.confirm_final);
});

Then("I see the post {string} confirmation", (type) => {
  pt.verifyCreatePopUp(locators.title_publish_style)
});

When("I fill the button's settings", (text) => {
  cy.get('input[data-testid="button-input-text"]').click().type("Button");
  cy.get('input[data-testid="button-input-url"]')
      .click()
      .type("https://www.coursera.org/");
  cy.get('input[data-testid="button-input-url"]').type("{enter}");
  cy.wait(1000);

});

When("I write the anchor", () => {
  cy.get('input[data-testid="bookmark-url"]').click().type("https://www.coursera.org/");
  cy.get('input[data-testid="bookmark-url"]').type("{enter}");
  cy.wait(5000);
});

When("I fill the {string} settings",(opcion) => {
  switch (opcion) {
    case "HTML":
      cy.get('div[data-kg-card-editing="true"]').click().type("<h1>Hola mundo</h1>");
      break;
    case "Markdown":
      cy.get('div[data-kg-card-editing="true"]').click().type("# Hola mundo");
      break;
    case "Callout":
        cy.get('div[data-kg-card-editing="true"]').click().type("Call out text");
        break;
    // Agrega más casos según sea necesario
    default:
      // Tratamiento por defecto si el valor de type no coincide con ningún caso
      break;
  }
  cy.get('div[data-kg-card-editing="true"]').type("{enter}");
  cy.wait(1000);

});

When("I fill the image's settings", (text) => {
  cy.get('.x-file--input').invoke('removeAttr', 'target');
  // Cargar el contenido de la imagen de ejemplo (PNG)
  cy.fixture('example.png', 'base64').then(fileContent => {
    // Obtener el elemento de entrada de archivo y establecer su valor con el contenido del archivo
    cy.get('.x-file--input').then($input => {
      const blob = Cypress.Blob.base64StringToBlob(fileContent, 'image/png');
      const file = new File([blob], 'example.png', { type: 'image/png' });

      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);

      $input[0].files = dataTransfer.files;
    });
  });
  cy.wait(5000);
});

When("I write the header toggle {string}", (headerContent) => {
  cy.get(".koenig-lexical.koenig-lexical-heading > div > div > p").click().type(headerContent);
  cy.wait(1000);
});

When("I write the collapsible toggle content {string}", (collapsibleContent) => {
    cy.get(".koenig-lexical.text-xl > div > div > p").click().type(collapsibleContent);
    cy.wait(1000);
});


Given("a table step of posts", (datatable) => {
  datatable.hashes().forEach((element) => {
    pt = new Post();
   
    cy.fixture("index.json").then((index) => {
        locators = index.locators;
        urls = index.urls;
        cy.visit(urls.post_url);
        cy.wait(2000);
        pt.clickPost(locators.new_post);
        pt.editPostTitle(locators.post_title, element.type);
    });
    

  })

});
  