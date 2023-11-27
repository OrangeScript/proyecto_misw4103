import { Given, When, Then, Step, BeforeStep} from "@badeball/cypress-cucumber-preprocessor";
import Login from "../../pages/login";
import Post from "../../pages/post";
import {createPostDataPool} from "../../support/data-pool"
var pt= null;
var locators = null;
var data_dummy = null;
var isRandomScenario = false

BeforeStep(function ({ pickle, pickleStep, gherkinDocument, testCaseStartedId, testStepId }) {
  // Antes de cada paso con la etiqueta @negative, establecer la bandera como negativa
  const annotations = pickle.tags.map(tag => tag.name);
   if (annotations.includes('@random')) {
     isRandomScenario = true;
   } else {
     isRandomScenario = false;
   }
});

When("I click new post", () => {
    pt = new Post();
    cy.fixture("index.json").then((index) => {
        locators = index.locators;
        if(isRandomScenario) {
          //Creamos random data si detectamos la bandera
          data_dummy = createPostDataPool(1)[0];
        } else {
          data_dummy= index.data_dummy;
        }
        
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
      Step(this, `I write the anchor "${data_dummy.url_dummy}" with "bookmark_url"`);
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
        pt.writePostContent(locators.email_content_locator, data_dummy.email_content_dummy);
        pt.typeEnter(locators.email_content_locator);
        cy.wait(1000);
      break;
    case "Callout":
        Step(this, `I fill the "${type}" settings`);
        break;
    case "Toggle":
        Step(this, `I write the header "${data_dummy.header_toggle_dummy}"`);
        Step(this, `I write the collapsible toggle content "${data_dummy.content_toggle_dummy}"`);
        break;
    case "Public preview":
        pt.writePostContent(locators.post_content, data_dummy.public_preview_dummy);
        break;
    case "Header":
        Step(this, `I write the header "${data_dummy.header_header_toggle_dummy}"`);
        pt.writePostContent(locators.header_subheader_content, data_dummy.subheader_dummy);
        break;
    case "Signup":
        Step(this, `I write the header "${data_dummy.header_header_toggle_dummy}"`);
        pt.writePostContent(locators.signup_subheader_content, data_dummy.subheader_dummy);
        break;
    case "YouTube":
        Step(this, `I write the anchor "${data_dummy.youtube_dummy}" with "embed_url"`);
        break;
    case "X (formerly Twitter)":
        Step(this, `I write the anchor "${data_dummy.twitter_dummy}" with "embed_url"`);
        break;
    case "Unsplash":
        cy.get(locators.unsplash_img).first().click({ force: true });
        cy.wait(1000);
        pt.clickPost(locators.insert_img_unsplash);
        cy.wait(1000);
        break;
    case "Vimeo":
        Step(this, `I write the anchor "${data_dummy.vimeo_dummy}" with "embed_url"`);
        break;
    case "CodePen":
        Step(this, `I write the anchor "${data_dummy.codepen_dummy}" with "embed_url"`);
        break;
    case "Spotify":
        Step(this, `I write the anchor "${data_dummy.spotify_url_dummy}" with "embed_url"`);
        break;
    case "SoundCloud":
        Step(this, `I write the anchor "${data_dummy.soundcloud_url_dummy}" with "embed_url"`);
        break;
    case "Other...":
        Step(this, `I write the anchor "${data_dummy.other_url_dummy}" with "embed_url"`);
        break;
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
  pt.writePostContent(locators.button_input_text, data_dummy.button_label_dummy);
  pt.writePostContent(locators.button_input_url, data_dummy.url_dummy);
  pt.typeEnter(locators.button_input_url);
  cy.wait(1000);

});

When("I write the anchor {string} with {string}", (url, locatorKey) => { 
    pt.writePostContent(locators[locatorKey], url);
    pt.typeEnter(locators[locatorKey]);
    cy.wait(5000);
    if(isRandomScenario) {
      Step(this, "I see the link post error message");
    }
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

When("I write the header {string}", (headerContent) => {
    pt.writePostContent(locators.koenig_lexical_heading, headerContent);
    cy.wait(1000);
});

When("I write the collapsible toggle content {string}", (collapsibleContent) => {
    pt.writePostContent(locators.koenig_lexical_text, collapsibleContent);
    cy.wait(1000);
});


When("I have provided below information to create the different type of post", (datatable) => {

  datatable.hashes().forEach((element) => {

    console.log(element);
    Step(this, "I click new post");
    

  });
 
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

Then("I see the link post error message", (type) => {
  cy.contains('span', 'There was an error when parsing the URL.')
  .should('exist');
});
  