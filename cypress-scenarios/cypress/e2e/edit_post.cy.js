import Login from "../pages/login";
import Post from "../pages/post";

describe("Testing editing posts", () => {
  //Given
  beforeEach(() => {
    const ln = new Login();
    const pt = new Post();

    cy.fixture("index.json").then((index) => {
      let urls = index.urls;
      let credentials = index.credentials;
      let locators = index.locators;

      cy.visit(urls.singin_url);
      cy.wait(5000);
      cy.url().should("eq", urls.singin_url);

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
          pt.clickPost(locators.posts_navigation);
          cy.wait(2000);
          pt.verifyPostPage(urls.post_url);
        });

      cy.get("main").within(() => {
        pt.getPublishedPost(locators.published_post);
        cy.wait(2000);
        pt.verifyPostPage(urls.edit_post_url);
      });
    });
  });

  it("Change Published Post Title", () => {
    const pt = new Post();

    cy.fixture("index.json").then((index) => {
      let locators = index.locators;

      const uuid = () => Cypress._.random(0, 1e6);
      const id = uuid();
      const testTitle = `testTitle${id}`;

      //When
      cy.get("main").within(() => {
        pt.editPostTitle(locators.post_title, testTitle);
        cy.wait(1000);
      });

      cy.get("main").within(() => {
        pt.clickUpdateButton(locators.update_button);
        cy.wait(1000);
      });

      //Then
      cy.get("aside.gh-notifications").within(() => {
        pt.verifyUpdatePopUp(locators.updated_notification);
        cy.wait(1000);
      });

      cy.get("main").within(() => {
        const postActualTitle = pt.checkPostTitle(locators.post_title);
        return postActualTitle === testTitle;
      });
    });
  });

  it("Change Published Post Content", () => {
    const pt = new Post();

    cy.fixture("index.json").then((index) => {
      let locators = index.locators;

      const uuid = () => Cypress._.random(0, 1e6);
      const id = uuid();
      const testContent = `testContent${id}`;

      //When
      cy.get("main").within(() => {
        pt.editPostContent(locators.post_content, testContent);
        cy.wait(1000);
      });

      cy.get("main").within(() => {
        pt.clickUpdateButton(locators.update_button);
        cy.wait(1000);
      });

      //Then
      cy.get("aside.gh-notifications").within(() => {
        pt.verifyUpdatePopUp(locators.updated_notification);
        cy.wait(1000);
      });

      cy.get("main").within(() => {
        const postActualContent = pt.checkPostContent(locators.post_content);
        return postActualContent === testContent;
      });
    });
  });

  it("Change Published Post Title And Content", () => {
    const pt = new Post();

    cy.fixture("index.json").then((index) => {
      let locators = index.locators;

      const uuid = () => Cypress._.random(0, 1e6);
      const id = uuid();
      const testTitle = `testTitle${id}`;
      const testContent = `testContent${id}`;

      //When
      cy.get("main").within(() => {
        pt.editPostTitle(locators.post_title, testTitle);
        cy.wait(1000);
      });

      cy.get("main").within(() => {
        pt.editPostContent(locators.post_content, testContent);
        cy.wait(1000);
      });

      cy.get("main").within(() => {
        pt.clickUpdateButton(locators.update_button);
        cy.wait(1000);
      });

      //Then
      cy.get("aside.gh-notifications").within(() => {
        pt.verifyUpdatePopUp(locators.updated_notification);
        cy.wait(1000);
      });

      cy.get("main").within(() => {
        const postActualTitle = pt.checkPostTitle(locators.post_title);
        return postActualTitle === testTitle;
      });

      cy.get("main").within(() => {
        const postActualContent = pt.checkPostContent(locators.post_content);
        return postActualContent === testContent;
      });
    });
  });

  it("No Changes To Post, Update Button Should Be Disabled", () => {
    const pt = new Post();

    cy.fixture("index.json").then((index) => {
      let locators = index.locators;

      const NoChangesTitle = pt.checkPostTitle(locators.post_title);
      const NoChangesContent = pt.checkPostContent(locators.post_content);

      //When
      //Para este escenario no se hace ningún cambio al post

      //Then
      cy.get("main").within(() => {
        return pt.isUpdateButtonDisabled(locators.update_button);
      });

      cy.get("main").within(() => {
        const postActualTitle = pt.checkPostTitle(locators.post_title);
        return postActualTitle === NoChangesTitle;
      });

      cy.get("main").within(() => {
        const postActualContent = pt.checkPostContent(locators.post_content);
        return postActualContent === NoChangesContent;
      });
    });
  });

  it("Edit A Post, Then Revert Changes", () => {
    const pt = new Post();

    cy.fixture("index.json").then((index) => {
      let locators = index.locators;

      const uuid = () => Cypress._.random(0, 1e6);
      const id = uuid();
      const testTitle = `testTitle${id}`;
      const testContent = `testContent${id}`;

      const NoChangesTitle = pt.checkPostTitle(locators.post_title);
      const NoChangesContent = pt.checkPostContent(locators.post_content);

      //When
      cy.get("main").within(() => {
        pt.editPostTitle(locators.post_title, testTitle);
        cy.wait(1000);
      });

      cy.get("main").within(() => {
        pt.editPostContent(locators.post_content, testContent);
        cy.wait(1000);
      });

      cy.get("html").within(() => {
        pt.clickLeaveButton(locators.leave_editing_button);
        cy.wait(1000);
      });

      //Then
      cy.get("main").within(() => {
        pt.getPublishedPost(locators.published_post);
        const postActualTitle = pt.checkPostTitle(locators.post_title);
        return postActualTitle === NoChangesTitle;
      });

      cy.get("main").within(() => {
        const postActualContent = pt.checkPostContent(locators.post_content);
        return postActualContent === NoChangesContent;
      });
    });
  });
});
