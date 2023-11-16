class Tag {

    clickTags(locator)
    {
        cy.get(locator).click()
        cy.screenshot()
    }

    verifyTagsPage(tags_url)
    {
        cy.url().should('contain', tags_url)
        cy.screenshot()
    }

    writeDate(locator, text)
    {
        cy.get(locator).type(text)
    }

    verifyContennt(text)
    {
        cy.contains(text)
        cy.screenshot()
    }

    getFirstTag(locator)
    {
        cy.get(locator).first().click()
        cy.screenshot()
    }

}


export default Tag