class EditorPage {
  constructor() {
    // Cypress commands are automatically available
  }

  editPostTitle(newTitle) {
    cy.get('textarea[data-test-editor-title-input]').type(newTitle);
  }

  editPostContent(newContent) {
    cy.get('p[data-koenig-dnd-droppable=true]')
      .click()
      .type('{selectall}{backspace}')
      .type(newContent);
  }

  clickUpdateButton() {
    cy.get('button[data-test-button="publish-save"]').click();
  }

  isUpdateConfirmationDisplayed() {
    cy.get('.gh-notification-title')
      .invoke('text')
      .then((titleText) => titleText.trim() === 'Updated');
  }  
  
  checkPostTitle() {
    return cy.get('textarea[data-test-editor-title-input]').invoke('val').then((titleText) => {
      return titleText;
    });
  }
  

  checkPostContent() {
    return cy.get('p[data-koenig-dnd-droppable=true]').invoke('text').then((titleText) => {
      return titleText;
    });
  }

  isUpdateButtonDisabled() {
    cy.get('[data-test-button="publish-save"]').then((updateButton) =>
      updateButton.attr('disabled') !== null
    );
  }

  clickLeaveButton() {
    cy.get('a[data-test-link="posts"]').click();
    cy.get('button.gh-btn-red').click();
  }

  checkPostTitleInsideList(noChangeTitle) {
    cy.get('.gh-content-entry-title').then((listTitles) => {
      for (let i = 0; i < listTitles.length; i++) {
        cy.wrap(listTitles[i])
          .invoke('text')
          .then((titleText) => {
            if (titleText.includes(noChangeTitle)) {
              console.log(`El elemento en la posición ${i} contiene el texto ${noChangeTitle}`);
              return true;
            } else {
              return false;
            }
          });
      }
    });
  }
}

module.exports = EditorPage;
