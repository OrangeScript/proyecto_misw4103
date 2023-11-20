class EditorPage {
    constructor(driver) {
      this.driver = driver;
    }
  
    async editPostTitle(newTitle) {
      let titleArea = await this.driver.$('textarea.gh-editor-title.ember-text-area.gh-input.ember-view');
  
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
      let updateButton = await this.driver.$('.gh-btn.gh-btn-editor.green.gh-publishmenu-trigger');
      await updateButton.click();
      let finalUpdateButton = await this.driver.$('.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon');
      await finalUpdateButton.click();
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
      let titleArea = await this.driver.$('textarea.gh-editor-title.ember-text-area.gh-input.ember-view');
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

    async checkPostTitleInsideList() {
      let listTitles = await this.driver.$$('.gh-content-entry-title');
        for (let i = 0; i < listTitles.length; i++) {
            let titleText = await listTitles[i].getText();
            if (titleText.includes(this.noChangeTitle)) {
                console.log(`El elemento en la posiciĆ³n ${i} contiene el texto ${this.noChangeTitle}`);
                return true;
            } else {
                return false
            }
        }
    }
  
  }
  module.exports = EditorPage;
