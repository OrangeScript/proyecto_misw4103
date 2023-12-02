class PostsPage {
  
  
    async doesPublishedPostExist() {
        let publishedPost =  cy.get('span.published');
        return !!publishedPost;
    }
  
    async navigateToPostEditPage() {    
      let listItem = cy.get('span.published');
  
      if (listItem) {
           listItem.first().click();
      }
  
    }

    async navigateToPublishedPosts() {
      let listItem = cy.get('a[href="#/posts/?type=published"]');

      if (listItem) {
        listItem.click();
      }

    }

    async createNewPost() {
      const uuid = () => Math.floor(Math.random() * 1e6);
      const id = uuid();
      const testTitle = `testTitle${id}`;
      const testContent = `testContent${id}`;

      let newPostButton = cy.get('a[data-test-nav="new-story"]');
      newPostButton.click();
      let titleArea = cy.get('textarea[data-test-editor-title-input]');
  
      if (titleArea) {
        titleArea.type(testTitle);
      }

      let contentArea = cy.get('p[data-koenig-dnd-droppable=true]');
  
      if (contentArea) {
        contentArea.click();
        contentArea.keys(['Control', 'a']);
        await contentArea.keys('Backspace')
        await contentArea.setValue(testContent);
      }

      let element = cy.get(".gh-publish-trigger");
      await element.click();

      let element2 = cy.get(".gh-publish-cta > button");
      element2.click();

      let element3 = cy.get(
        'button[data-test-button="confirm-publish"]'
      );
      element3.click();

      let element4 = cy.get(
        'button[data-test-button="close-publish-flow"]'
      );
      element4.click();

      let element5 = cy.get(
        'a[href="#/posts/"]'
      );
      return element5.click();
    }

    async ensureMinPosts() {    
    let existingPosts = cy.get('span.published');

    while (existingPosts.length < 5) {
         this.createNewPost();

        existingPosts = cy.get('span.published');
    }
  
  }
}
module.exports = PostsPage;
