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

    async navigateToFirstPostEditPage() {
      console.log("----- HERE HERE HERE HERE -----")
      let listItem = await this.driver.$('li.gh-list-row gh-posts-list-item');
      console.log("----- HERE HERE HERE HERE -----")
      console.log(listItem)
  
      if (listItem) {
          await listItem[0].click();
      }
  
      }
  
  }
  module.exports = PostsPage;