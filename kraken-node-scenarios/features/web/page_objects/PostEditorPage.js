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

}
module.exports = EditorPage;
