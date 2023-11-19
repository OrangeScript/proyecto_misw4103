import Login from "../pages/login";
import Post from "../pages/post";
const baseUrl = Cypress.config().baseUrl;

describe("Testing create post", () => {
  beforeEach(() => {
    const ln = new Login();
    const pt = new Post();

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
        cy.wait(2000);
        ln.verifyLogin(urls.dashboard_url);
       
      });

    });
  });

  
  it("should not see the publish button when creating a post without title and content", () => {
    cy.visit("/");
    Post.closeAlertInfo();
    cy.wait(1000);
    cy.get('[title="New post"][href="#/editor/post/"]').click();
    cy.get("textarea[placeholder='Post title']").clear();
    cy.wait(2000);
    cy.get('.koenig-editor__editor').click();
    cy.wait(2000);
    cy.get('.koenig-editor__editor').clear();
    cy.get("button[class='gh-publish-trigger']").should('not.exist');
  });

  it("should create a post with a button", () => {
    cy.visit("/");
    Post.closeAlertInfo();
    cy.wait(1000);
    cy.get('[title="New post"][href="#/editor/post/"]').click();
    cy.get("textarea[placeholder='Post title']").type("Post with button");
    cy.wait(2000);
    cy.get('.koenig-editor__editor').click();
    cy.wait(2000);
    cy.get('button[aria-label="Add a card"]').click();
    cy.wait(2000);
    cy.get('[data-kg="cardmenu-card"][title="Button"]').click();
    cy.wait(2000);
    cy.get('button[aria-label="Add a card"]').click();
    cy.wait(2000);
    cy.get('[data-kg="cardmenu-card"][title="Button"]').click();
    cy.wait(2000);
    cy.get('#button-text-input').type("Button");
    cy.wait(1000);
    cy.get('#button-url-input')
      .click()
      .type("https://www.coursera.org/");
      cy.get('#button-url-input').type("{enter}");
    cy.wait(1000);
    cy.get('.gh-koenig-editor-pane').click();
    cy.wait(1000);
    cy.contains('span', 'Publish').click();
    cy.wait(2000);
    cy.get('footer.gh-publishmenu-footer span:contains("Publish")').click();
    cy.wait(2000);
    cy.get('div.modal-footer span:contains("Publish")').click();
    cy.wait(2000);
    cy.get(".gh-notification-title").should("exist");
  });

  it("should create a post with HTML content", () => {
    cy.visit("/");
    Post.closeAlertInfo();
    cy.wait(1000);
    cy.get('[title="New post"][href="#/editor/post/"]').click();
    cy.get("textarea[placeholder='Post title']").type(
      "Post with HTML content"
    );
    cy.wait(2000);
    cy.get('.koenig-editor__editor').click();
    cy.wait(2000);
    cy.get('button[aria-label="Add a card"]').click();
    cy.wait(2000);
    cy.get('[data-kg="cardmenu-card"][title="HTML"]').click();
    cy.wait(2000);
    cy.get('button[aria-label="Add a card"]').click();
    cy.wait(2000);
    cy.get('[data-kg="cardmenu-card"][title="HTML"]').click();
    cy.wait(2000);
    cy.get('[data-kg="editor-wrapper"]')
      .click()
      .type("<h1>Hello, HTML!</h1>");
    cy.get('[data-kg="editor-wrapper"]').type("{enter}");
    cy.wait(1000);
    cy.get('.gh-koenig-editor-pane').click();
    cy.wait(1000);
    cy.contains('span', 'Publish').click();
    cy.wait(2000);
    cy.get('footer.gh-publishmenu-footer span:contains("Publish")').click();
    cy.wait(2000);
    cy.get('div.modal-footer span:contains("Publish")').click();
    cy.wait(2000);
    cy.get(".gh-notification-title").should("exist");
  });

  it("should create a post with Markdown content", () => {
    cy.visit("/");
    Post.closeAlertInfo();
    cy.wait(1000);
    cy.get('[title="New post"][href="#/editor/post/"]').click();
    cy.get("textarea[placeholder='Post title']").type(
      "Post with Markdown content"
    );
    cy.wait(2000);
    cy.get('.koenig-editor__editor').click();
    cy.wait(2000);
    cy.get('button[aria-label="Add a card"]').click();
    cy.wait(1000);
    cy.get('[data-kg="cardmenu-card"][title="Markdown"]').click();
    cy.wait(2000);
    cy.get('button[aria-label="Add a card"]').click();
    cy.wait(1000);
    cy.get('[data-kg="cardmenu-card"][title="Markdown"]').click();
    cy.wait(2000);
    cy.get('[data-kg="editor-wrapper"]')
      .click()
      .type("# Hello, Markdown!");
    cy.get('[data-kg="editor-wrapper"]').type("{enter}");
    cy.wait(1000);
    cy.get('.gh-koenig-editor-pane').click();
    cy.wait(1000);
    cy.contains('span', 'Publish').click();
    cy.wait(2000);
    cy.get('footer.gh-publishmenu-footer span:contains("Publish")').click();
    cy.wait(2000);
    cy.get('div.modal-footer span:contains("Publish")').click();
    cy.wait(2000);
    cy.get(".gh-notification-title").should("exist");
  });

  it('should create a post using "/" shortcut for add HTML content', async () => {
    cy.visit("/");
    Post.closeAlertInfo();
    cy.wait(1000);
    cy.get('[title="New post"][href="#/editor/post/"]').click();
    cy.get("textarea[placeholder='Post title']").type(
      "Post with '/' shortcut"
    );
    cy.wait(2000);
    cy.get('.koenig-editor__editor').click();
    cy.wait(2000);
    cy.get('.koenig-editor__editor').type("/");
    cy.wait(2000);
    cy.get('[data-kg="cardmenu-card"][title="HTML"]').click();
    cy.wait(2000);
    cy.get('.koenig-editor__editor').click();
    cy.wait(2000);
    cy.get('.koenig-editor__editor').type("/");
    cy.wait(2000);
    cy.get('[data-kg="cardmenu-card"][title="HTML"]').click();
    cy.wait(2000);
    cy.get('[data-kg="editor-wrapper"]')
      .click()
      .type("<h1>Hello, HTML!</h1>");
    cy.get('[data-kg="editor-wrapper"]').type("{enter}");
    cy.wait(1000);
    cy.get('.gh-koenig-editor-pane').click();
    cy.wait(1000);
    cy.contains('span', 'Publish').click();
    cy.wait(2000);
    cy.get('footer.gh-publishmenu-footer span:contains("Publish")').click();
    cy.wait(2000);
    cy.get('div.modal-footer span:contains("Publish")').click();
    cy.wait(2000);
    cy.get(".gh-notification-title").should("exist");
  });
});