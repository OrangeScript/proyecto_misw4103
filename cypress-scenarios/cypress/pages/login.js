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
        cy.url().should('eq', dashboard_url)
    }
}

export default Login