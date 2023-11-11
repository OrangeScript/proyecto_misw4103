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

}

export default Post