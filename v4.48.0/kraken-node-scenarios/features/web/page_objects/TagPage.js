class TagPage {
    constructor(driver) {
        this.driver = driver;
    }

    async checkTagCreation() {
        let confirmationButton = await this.driver.$('button.gh-btn.gh-btn-primary.gh-btn-icon.gh-btn-green.ember-view')
        let confirmationButtonText = await confirmationButton.getText()
        return confirmationButtonText
    }

    async checkCreationError() {
        let confirmationButton = await this.driver.$('button.gh-btn.gh-btn-primary.gh-btn-icon.gh-btn-red.ember-view')
        let confirmationButtonText = await confirmationButton.getText()
        return confirmationButtonText
    }

    async getFirstTag() {
        let allTags = await this.driver.$$("li.gh-list-row.gh-tags-list-item")
        return await allTags[0].click();
    }
}

module.exports = TagPage;