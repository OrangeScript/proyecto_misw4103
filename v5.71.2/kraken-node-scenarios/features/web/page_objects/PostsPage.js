class PostsPage {
    constructor(driver) {
      this.driver = driver;
    }
  
    async doesPublishedPostExist() {
        let publishedPost = await this.driver.$('span.published');
        return !!publishedPost;
    }
  
    async navigateToPostEditPage() {    
      let listItem = await this.driver.$('span.published');
  
      if (listItem) {
          await listItem.click();
      }
  
    }

    async navigateToPublishedPosts() {
      let listItem = await this.driver.$('a[href="#/posts/?type=published"]');

      if (listItem) {
        await listItem.click();
      }

    }

    async createNewPost() {
      const uuid = () => Math.floor(Math.random() * 1e6);
      const id = uuid();
      const testTitle = `testTitle${id}`;
      const testContent = `testContent${id}`;

      let newPostButton = await this.driver.$('a[data-test-nav="new-story"]');
      await newPostButton.click();
      let titleArea = await this.driver.$('textarea[data-test-editor-title-input]');
  
      if (titleArea) {
        await titleArea.setValue(testTitle);
      }

      let contentArea = await this.driver.$('p[data-koenig-dnd-droppable=true]');
  
      if (contentArea) {
        await contentArea.click();
        await contentArea.keys(['Control', 'a']);
        await contentArea.keys('Backspace')
        await contentArea.setValue(testContent);
      }

      let element = await this.driver.$(".gh-publish-trigger");
      await element.click();

      let element2 = await this.driver.$(".gh-publish-cta > button");
      await element2.click();

      let element3 = await this.driver.$(
        'button[data-test-button="confirm-publish"]'
      );
      await element3.click();

      let element4 = await this.driver.$(
        'button[data-test-button="close-publish-flow"]'
      );
      await element4.click();

      let element5 = await this.driver.$(
        'a[href="#/posts/"]'
      );
      return await element5.click();
    }

    async ensureMinPosts() {    
    let existingPosts = await this.driver.$$('span.published');

    while (existingPosts.length < 5) {
        await this.createNewPost();

        existingPosts = await this.driver.$$('span.published');
    }
  
  }
}
module.exports = PostsPage;
