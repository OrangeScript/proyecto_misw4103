import { Given, When, Then, Step} from "@badeball/cypress-cucumber-preprocessor";
import Login from "../../pages/login";
import Post from "../../pages/post";
var pt= null;
var locators = null;
var data_dummy = null;

When("I click new post", () => {
    pt = new Post();
    cy.fixture("index.json").then((index) => {
        locators = index.locators;
        data_dummy= index.data_dummy;
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
        pt.writePostContent(locators.email_content_locator, "Content,");
        pt.typeEnter(locators.email_content_locator);
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
  pt.writePostContent(locators.button_input_text, "Button");
  pt.writePostContent(locators.button_input_url, data_dummy.url_coursera);
  pt.typeEnter(locators.button_input_url);
  cy.wait(1000);

});

When("I write the anchor", () => { 
    pt.writePostContent(locators.bookmark_url, data_dummy.url_coursera);
    pt.typeEnter(locators.bookmark_url);
    cy.wait(5000);
});

When("I fill the {string} settings",(opcion) => {
  switch (opcion) {
    case "HTML":
      pt.writePostContent(locators.data_kg_card_editing, data_dummy.html_dummy);
      break;
    case "Markdown":
      pt.writePostContent(locators.data_kg_card_editing, data_dummy.markdown_dummy);
      break;
    case "Callout":
        pt.writePostContent(locators.data_kg_card_editing, data_dummy.callout_dummy);
        break;
    // Agrega más casos según sea necesario
    default:
      // Tratamiento por defecto si el valor de type no coincide con ningún caso
      break;
  }
  pt.typeEnter(locators.data_kg_card_editing);
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
    pt.writePostContent(locators.koenig_lexical_heading, headerContent);
    cy.wait(1000);
});

When("I write the collapsible toggle content {string}", (collapsibleContent) => {
    pt.writePostContent(locators.koenig_lexical_text, collapsibleContent);
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
  