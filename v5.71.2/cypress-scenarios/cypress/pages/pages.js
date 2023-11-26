class Pages {

    clickPages(locator)
    {
        cy.get(locator).click()
        //cy.screenshot()
    }

    verifyUrlPage(tags_url)
    {
        cy.url().should('contain', tags_url)
        //cy.screenshot()
    }

    writeData(locator, text)
    {
        cy.get(locator).type(text)
    }

    verifyContent(text)
    {
        cy.contains(text)
        cy.screenshot()
    }

    getFirstPage(locator)
    {
        cy.get(locator).first().click()
        cy.screenshot()
    }
    
    pasteText(locator, text)
    {
        cy.get(locator).invoke('val', text)
    }

    verifyNotExist(locator)
    {
        cy.get(locator).should('not.exist')
    }


}

export default Pages