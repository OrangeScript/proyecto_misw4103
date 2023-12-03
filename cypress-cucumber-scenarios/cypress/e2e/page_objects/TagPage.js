class TagPage {

    checkTagCreation() {
      return cy.get('span[data-test-task-button-state="success"]').invoke('text').then((text) => {
        return text;
      });
    }
  
    checkCreationError() {
      return cy.get('span[data-test-task-button-state="failure"]').invoke('text').then((text) => {
        return text;
      });
    }
  
    getFirstTag() {
      return cy.get('li.gh-list-row.gh-tags-list-item').first().click();
    }

  
}

module.exports = TagPage;