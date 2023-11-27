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
      cy.wait(7000);
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
    cy.wait(1000);
    cy.get('a[data-test-nav="new-story"]').click();
    cy.screenshot();
    cy.get("textarea[data-test-editor-title-input]").clear();
    cy.screenshot();
    cy.get('p[data-koenig-dnd-droppable="true"]').clear();
    cy.screenshot();
    cy.get("button[class='gh-publish-trigger']").should('not.exist');
    cy.screenshot();
  });

  it("should create a post with a button", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get('a[data-test-nav="new-story"]').click();
    cy.screenshot();
    cy.get("textarea[data-test-editor-title-input]").type("Post with button");
    cy.screenshot();
    cy.wait(2000);
    cy.get('p[data-koenig-dnd-droppable="true"]').click();
    cy.wait(2000);
    cy.get('button[aria-label="Add a card"]').click();
    cy.screenshot();
    cy.wait(1000);
    cy.get('button[data-kg-card-menu-item="Button"]').click();
    cy.get('input[data-testid="button-input-text"]').click().type("Button");
    cy.screenshot();
    cy.get('input[data-testid="button-input-url"]')
      .click()
      .type("https://www.coursera.org/");
    cy.screenshot();
    cy.get('input[data-testid="button-input-url"]').type("{enter}");
    cy.wait(1000);
    cy.get(".gh-publish-trigger").click();
    cy.screenshot();
    cy.wait(2000);
    cy.get(".gh-publish-cta > button").click();
    cy.screenshot();
    cy.wait(2000);
    cy.get('button[data-test-button="confirm-publish"]').click();
    cy.screenshot();
    cy.wait(2000);
    cy.get(".gh-publish-title").should("exist");
    cy.screenshot();
  });

  it("should create a post with HTML content", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get('a[data-test-nav="new-story"]').click();
    cy.screenshot();
    cy.get("textarea[data-test-editor-title-input]").type(
      "Post with HTML content"
    );
    cy.screenshot();
    cy.wait(2000);
    cy.get('p[data-koenig-dnd-droppable="true"]').click();
    cy.wait(2000);
    cy.get('button[aria-label="Add a card"]').click();
    cy.wait(1000);
    cy.get('button[data-kg-card-menu-item="HTML"]').click();
    cy.get('div[data-kg-card-editing="true"]')
      .click()
      .type("<h1>Hello, HTML!</h1>");
    cy.screenshot();
    cy.get('div[data-kg-card-editing="true"]').type("{enter}");
    cy.wait(1000);
    cy.get(".gh-publish-trigger").click();
    cy.screenshot();
    cy.wait(2000);
    cy.get(".gh-publish-cta > button").click();
    cy.screenshot();
    cy.wait(2000);
    cy.get('button[data-test-button="confirm-publish"]').click();
    cy.screenshot();
    cy.wait(2000);
    cy.get(".gh-publish-title").should("exist");
    cy.screenshot();
  });

  it("should create a post with Markdown content", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get('a[data-test-nav="new-story"]').click();
    cy.screenshot();
    cy.get("textarea[data-test-editor-title-input]").type(
      "Post with Markdown content"
    );
    cy.screenshot();
    cy.wait(2000);
    cy.get('p[data-koenig-dnd-droppable="true"]').click();
    cy.wait(2000);
    cy.get('button[aria-label="Add a card"]').click();
    cy.wait(1000);
    cy.screenshot();
    cy.get('button[data-kg-card-menu-item="HTML"]').click();
    cy.get('div[data-kg-card-editing="true"]')
      .click()
      .type("# Hello, Markdown!");
    cy.screenshot();
    cy.get('div[data-kg-card-editing="true"]').type("{enter}");
    cy.wait(1000);
    cy.get(".gh-publish-trigger").click();
    cy.screenshot();
    cy.wait(2000);
    cy.get(".gh-publish-cta > button").click();
    cy.screenshot();
    cy.wait(2000);
    cy.get('button[data-test-button="confirm-publish"]').click();
    cy.screenshot();
    cy.wait(2000);
    cy.get(".gh-publish-title").should("exist");
    cy.screenshot();
  });

  it('should create a post using "/" shortcut for add HTML content', async () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get('a[data-test-nav="new-story"]').click();
    cy.screenshot();
    cy.get("textarea[data-test-editor-title-input]").type(
      "Post with '/' shortcut"
    );
    cy.screenshot();
    cy.wait(2000);
    cy.get('p[data-koenig-dnd-droppable=true]').click();
    cy.wait(2000);
    cy.get('p[data-koenig-dnd-droppable=true]').type("/");
    cy.screenshot();
    cy.wait(2000);
    cy.get('button[data-kg-card-menu-item="HTML"]').click();
    cy.get('div[data-kg-card-editing="true"]')
      .click()
      .type("<h1>Hello, '/' shortcut HTML!</h1>");
    cy.screenshot(); 
    cy.get('div[data-kg-card-editing="true"]').type("{enter}");
    cy.wait(1000);
    cy.get(".gh-publish-trigger").click();
    cy.screenshot();
    cy.wait(2000);
    cy.get(".gh-publish-cta > button").click();
    cy.screenshot();
    cy.wait(2000);
    cy.get('button[data-test-button="confirm-publish"]').click();
    cy.screenshot();
    cy.wait(2000);
    cy.get(".gh-publish-title").should("exist");
    cy.screenshot();
  });
});
