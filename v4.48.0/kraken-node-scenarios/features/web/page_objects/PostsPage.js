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
  
  }
  module.exports = PostsPage;