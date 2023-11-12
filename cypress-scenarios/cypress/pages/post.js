class Post
{
    clickPost(locator)
    {
        cy.get(locator).click()
    }

    verifyPostPage(post_url)
    {
        cy.url().should('contain', post_url)
    }

    getFirstPost(locator)
    {
        cy.get(locator).first().click()
    }

    openPostSettings(locator) {
        cy.get(locator).click()
    }

    deletePost(locator) {
        cy.get(locator).click({force: true})
    }

    verifyPostSettings(locator, text) {
        cy.get(locator).then(($header)=>{
            expect($header[0].innerText).to.equal(text)
        }) 
    }

    verifyDeletePopUp(locator, text) {
        cy.get(locator).then(($header)=>{
            expect($header[0].innerText).to.equal(text)
        })
    }

    deleteConfirmation(locator) {
        cy.get(locator).click()
    }

    cancelDelete(locator) {
        cy.get(locator).first().click()
    }

    getPublishedPost(locator) {
        cy.get(locator).first().click()
    }

    editPostTitle(locator, newTitle) {
        cy.get(locator).clear()
        cy.get(locator).type(newTitle);
    }

    clickUpdateButton(locator) {
        cy.get(locator).click()
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
    }

    checkPostContent(locator) {
        return cy.get(locator).invoke('val')
    }

    isUpdateButtonDisabled(locator) {
        return cy.get(locator).should('be.disabled')
    }

    clickLeaveButton(locator) {
        cy.get("a[data-test-link='posts']").click()
        cy.get("div.modal-content").within(() => {
            cy.get(locator).click()
        })
    }

}
export default Post
