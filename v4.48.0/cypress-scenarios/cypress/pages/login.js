const baseUrl = Cypress.config().baseUrl;
class Login
{
    setUserName(locator, username)
    {
        cy.get(locator).type(username)
    }

    setPassword(locator, username)
    {
        cy.get(locator).type(username)
    }

    clickLogin(locator) {
        cy.get(locator).click()
    }

    verifyLogin(dashboard_url) {
        cy.url().should('eq', baseUrl + dashboard_url)
    }

    verifyBadLogin() {
        cy.url().should('contains', '/ghost/#/signin')
    }
}

export default Login