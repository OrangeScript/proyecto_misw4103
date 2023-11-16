class Tag {

    clickTags(locator)
    {
        cy.get(locator).click()
        cy.screenshot()
    }

    verifyTagsPage(tags_url)
    {
        cy.url().should('contain', tags_url)
    }

    writeDate(locator, text)
    {
        cy.get(locator).type(text)
    }

}


export default Tag