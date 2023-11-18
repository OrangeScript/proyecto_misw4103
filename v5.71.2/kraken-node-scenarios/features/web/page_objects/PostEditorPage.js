class EditorPage {
    constructor(driver) {
      this.driver = driver;
    }
  
    async editPostTitle(newTitle) {
      let titleArea = await this.driver.$('textarea[data-test-editor-title-input]');
  
      if (titleArea) {
        await titleArea.setValue(newTitle);
      }
      
    }
  
    async editPostContent(newContent) {
      let contentArea = await this.driver.$('p[data-koenig-dnd-droppable=true]');
  
      if (contentArea) {
        await contentArea.click();
        await contentArea.keys(['Control', 'a']);
        await contentArea.keys('Backspace')
        await contentArea.setValue(newContent);
      }
    }
  
    async clickUpdateButton() {
      let updateButton = await this.driver.$('button[data-test-button="publish-save"]');
      await updateButton.click();
    }
  
    async isUpdateConfirmationDisplayed() {
      let notification = await this.driver.$('.gh-notification-passive');
  
      if (notification) {
  
        let titleElement = await notification.$('.gh-notification-title');
        let titleText = await titleElement.getText();
  
        if (titleText.trim() === 'Updated') {
          return true;
        }
      }
  
    }
  
    async checkPostTitle() {
      let titleArea = await this.driver.$('textarea[data-test-editor-title-input]');
      let titleText = await titleArea.getValue();
      return titleText;
  
    }
  
    async checkPostContent() {
      let contentArea = await this.driver.$('p[data-koenig-dnd-droppable=true]');
      await contentArea.click();
      let contentText = await contentArea.getText();
      return contentText;
    }
  
    async isUpdateButtonDisabled() {
      const updateButton = await this.driver.$('[data-test-button="publish-save"]');
  
      const isDisabled = await updateButton.getAttribute('disabled');
      return isDisabled !== null;
    }
  
    async clickLeaveButton() {
      const postsLink = await this.driver.$('a[data-test-link="posts"]');
      await postsLink.click();
  
      const leaveButton = await this.driver.$('button.gh-btn-red');
      await leaveButton.click();
    }
  
  }
  module.exports = EditorPage;