const baseUrl = Cypress.config().baseUrl;

class Post
{
    clickPost(locator)
    {
        cy.get(locator).click()
        cy.screenshot()
    }

    verifyPostPage(post_url)
    {
        cy.url().should('contain', baseUrl + post_url)
        cy.screenshot()
    }

    getFirstPost(locator)
    {
        cy.get(locator).first().click()
        cy.screenshot()
    }

    openPostSettings(locator) {
        cy.get(locator).click()
        cy.screenshot()
    }

    deletePost(locator) {
        cy.get(locator).click({force: true})
        cy.screenshot()
    }

    verifyPostSettings(locator, text) {
        cy.get(locator).then(($header)=>{
            expect($header[0].innerText).to.equal(text)
        })
        cy.screenshot()
    }

    verifyDeletePopUp(locator, text) {
        cy.get(locator).then(($header)=>{
            expect($header[0].innerText).to.equal(text)
        })
        cy.screenshot()
    }

    deleteConfirmation(locator) {
        cy.get(locator).click()
        cy.screenshot()
    }

    cancelDelete(locator) {
        cy.get(locator).first().click()
        cy.screenshot()
    }

    getPublishedPost(locator) {
        cy.get(locator).first().click()
        cy.screenshot()
    }

    editPostTitle(locator, newTitle) {
        cy.get(locator).clear()
        cy.get(locator).type(newTitle);
        cy.screenshot();
    }

    clickUpdateButton(locator) {
        cy.get(locator).click()
        cy.screenshot()
    }

    verifyUpdatePopUp(locator) {
        const titleElement = `${locator} .gh-notification-title`;
        cy.get(locator).should('exist')

        const titleText = cy.get(titleElement).invoke('text');
        

        return titleText === 'Updated';
    }

    checkPostTitle(locator) {
        return cy.get(locator).invoke('val')
    }

    editPostContent(locator, newContent) {
        cy.get(locator).clear()
        cy.get(locator).type(newContent);
        cy.screenshot()
    }

    checkPostContent(locator) {
        return cy.get(locator).invoke('val')
    }

    isUpdateButtonDisabled(locator) {
        return cy.get(locator).should('be.disabled')
    }

    clickLeaveButton(locator) {
       
        cy.get(locator).click();
        cy.screenshot()
    }

    verifyPostPageWithoutBaseURL(post_url)
    {
        cy.url().should('contain', post_url)
        cy.screenshot()
    }

    static closeAlertInfo() {

        // Listen for uncaught exceptions
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Cypress will fail the test if an unhandled exception occurs
            // To prevent the failure, you can return false here
            return false;
        });
        cy.get('button.gh-alert-close').should('exist').click();
  
        // Add other test steps as needed
            // Ensure the uncaught:exception listener is removed after the test
            Cypress.removeListener('uncaught:exception', (err, runnable) => {
                return false;
        });

    }


}
export default Post
