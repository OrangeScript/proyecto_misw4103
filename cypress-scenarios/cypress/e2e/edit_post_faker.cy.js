import Login from "../pages/login";
import Post from "../pages/post";
const baseUrl = Cypress.config().baseUrl;
import { faker } from '@faker-js/faker';


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
      cy.url().should("eq", baseUrl + urls.singin_url);

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
          pt.getPublishedPost(locators.published_post);
          cy.wait(2000);
          pt.verifyPostPage(urls.edit_post_url);
        });

      cy.get("main").within(() => {
            
        pt.getFirstPost(locators.edit_first_post);

       
      });
    });
  });

  it("Change Published Post Title", () => {
    const pt = new Post();

    cy.fixture("index.json").then((index) => {
      let locators = index.locators;

      const testTitle = faker.lorem.sentence();

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
        cy.wait(3000);
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

      const testContent = faker.lorem.paragraph();

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

      const testTitle = faker.lorem.sentence();
      const testContent = faker.lorem.paragraph();

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

  it("Change Published Post Title to symbols", () => {
    const pt = new Post();

    cy.fixture("index.json").then((index) => {
      let locators = index.locators;

      const testTitle = faker.string.symbol(10);

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
        cy.wait(3000);
      });

      cy.get("main").within(() => {
        const postActualTitle = pt.checkPostTitle(locators.post_title);
        return postActualTitle === testTitle;
      });
    });
  });

  it("Change Published Post Content to symbols", () => {
    const pt = new Post();

    cy.fixture("index.json").then((index) => {
      let locators = index.locators;

      const testContent = faker.string.symbol(10);

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

  it("Change Published Post Title And Content to symbols", () => {
    const pt = new Post();

    cy.fixture("index.json").then((index) => {
      let locators = index.locators;

      const testTitle = faker.string.symbol(15);
      const testContent = faker.string.symbol(15);

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

  it("Change Published Post Title to emojis", () => {
    const pt = new Post();

    cy.fixture("index.json").then((index) => {
      let locators = index.locators;

      const testTitle = faker.internet.emoji();
      
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
        cy.wait(3000);
      });

      cy.get("main").within(() => {
        const postActualTitle = pt.checkPostTitle(locators.post_title);
        return postActualTitle === testTitle;
      });
    });
  });

  it("Change Published Post Content to emojis", () => {
    const pt = new Post();

    cy.fixture("index.json").then((index) => {
      let locators = index.locators;

      const testContent = faker.internet.emoji();

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

  it("Change Published Post Title And Content to emojis", () => {
    const pt = new Post();

    cy.fixture("index.json").then((index) => {
      let locators = index.locators;

      const testTitle = faker.internet.emoji();
      const testContent = faker.internet.emoji();

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

  it("Edit A Post, Then Revert Changes", () => {
    const pt = new Post();

    cy.fixture("index.json").then((index) => {
      let locators = index.locators;

      const testTitle = faker.lorem.sentence();
      const testContent = faker.lorem.paragraph();

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

        // Listen for uncaught exceptions
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Cypress will fail the test if an unhandled exception occurs
            // To prevent the failure, you can return false here
            return false;
        });

      cy.get("html").within(() => {
        pt.clickLeaveButton(locators.leave_editing_button);
        cy.wait(1000);
      });

         // Add other test steps as needed

        // Ensure the uncaught:exception listener is removed after the test
        Cypress.removeListener('uncaught:exception', (err, runnable) => {
            return false;
        });
        

      //Then
      cy.get("nav")
        .first()
        .within(() => {
          pt.getPublishedPost(locators.published_post);
        });

      cy.get("main").within(() => {

        const postActualTitle =  cy.get('.gh-content-entry-title') .contains(new RegExp(NoChangesTitle)).invoke('text');
        return postActualTitle === NoChangesTitle;
      });
    });
  });

  it("Change Published Post Title to 255 characters", () => {
    const pt = new Post();

    cy.fixture("index.json").then((index) => {
      let locators = index.locators;

      const testTitle = faker.string.alpha(255);
      
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
        cy.wait(3000);
      });

      cy.get("main").within(() => {
        const postActualTitle = pt.checkPostTitle(locators.post_title);
        return postActualTitle === testTitle;
      });

      //Clean up
      cy.get("main").within(() => {
        pt.editPostTitle(locators.post_title, faker.string.alpha(5));
        cy.wait(1000);
      });

      cy.get("main").within(() => {
        pt.clickUpdateButton(locators.update_button);
        cy.wait(1000);
      });
    });
  });

  it("Change Published Post Title to 254 characters", () => {
    const pt = new Post();

    cy.fixture("index.json").then((index) => {
      let locators = index.locators;

      const testTitle = faker.string.alpha(254);
      
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
        cy.wait(3000);
      });

      cy.get("main").within(() => {
        const postActualTitle = pt.checkPostTitle(locators.post_title);
        return postActualTitle === testTitle;
      });

      //Clean up
      cy.get("main").within(() => {
        pt.editPostTitle(locators.post_title, faker.string.alpha(5));
        cy.wait(1000);
      });

      cy.get("main").within(() => {
        pt.clickUpdateButton(locators.update_button);
        cy.wait(1000);
      });
    });
  });

  it("Change Published Post Title to > 255 characters", () => {
    const pt = new Post();

    cy.fixture("index.json").then((index) => {
      let locators = index.locators;

      const testTitle = faker.string.alpha(256);
      
      //When
      cy.get("main").within(() => {
        pt.editPostTitle(locators.post_title, testTitle);
        cy.wait(1000);
      });

      cy.get("main").within(() => {
        pt.clickUpdateButton(locators.update_button);
        cy.wait(1000);
        cy.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false
        })
      });

      //Then
      cy.get("article.gh-alert-red").within(() => {
        cy.get("div.gh-alert-content").should('contain', 'Title cannot be longer than 255 characters.');
        cy.wait(3000);
      });

      //Clean up
      cy.get("main").within(() => {
        pt.editPostTitle(locators.post_title, faker.string.alpha(5));
        cy.wait(1000);
      });

      cy.get("main").within(() => {
        pt.clickUpdateButton(locators.update_button);
        cy.wait(1000);
      });
    });
  });
});
