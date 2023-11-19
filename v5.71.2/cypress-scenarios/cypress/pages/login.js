const baseUrl = Cypress.config().baseUrl;
class Login
{
    setUserName(locator, username)
    {
        cy.get(locator).type(username)
        cy.screenshot()
    }

    setPassword(locator, username)
    {
        cy.get(locator).type(username)
        cy.screenshot()
    }

    clickLogin(locator) {
        cy.get(locator).click()   
    }

    verifyLogin(dashboard_url) {
        cy.url().should('eq', baseUrl + dashboard_url)
    }
}

export default Login
