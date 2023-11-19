class PostsPage {
    constructor(driver) {
      this.driver = driver;
    }
  
    async doesPublishedPostExist() {
        let publishedPost = await this.driver.$('span.published');
        return !!publishedPost;
    }
  
    async navigateToPostEditPage() {    
      let listItem = await this.driver.$('.gh-content-entry-title');
  
      if (listItem) {
          await listItem.click();
      }
  
      }
  
  }
  module.exports = PostsPage;
