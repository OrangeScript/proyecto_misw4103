//import credentials from '../fixtures/credentials.json'

const credentials = {
    url: "http://localhost:2368/ghost/#/signin",
    email: "hi@imdiego.dev",
    password: "holamundo123",
    badEmail: "bad@email.dev",
    badPassword: "badPassword",
    url_afteLoggin: "http://localhost:2368/ghost/#/dashboard" 
}

describe('Testing basic Login', () => {
    beforeEach(()=>{
       cy.visit(credentials.url)
       cy.wait(7000)

       //cy.fixture('credentials').then(function (data) {
       // this.data = data;
       //})
    })
    it('Login with correct credentials', ()=>{
        cy.get('form').within(() => {
            cy.fixture('index.json').then((locators) => {
                cy.get(locators.email_input).type(credentials.email);
                cy.get(locators.password_input).type(credentials.password);
                cy.get(locators.login_button).click();
                cy.wait(1000);
                cy.url().should('eq', credentials.url_afteLoggin);
            });
        })
    })

    it('Login with bad username', ()=>{
        cy.get('form').within(() => {
            cy.fixture('index.json').then((locators) => {
                cy.get(locators.email_input).type(credentials.badEmail);
                cy.get(locators.password_input).type(credentials.password);
                cy.get(locators.login_button).click();
                cy.wait(1000);
                cy.url().should('eq', credentials.url);
            });
        })
    })

    it('Login with bad password', ()=>{
        cy.get('form').within(() => {
            cy.fixture('index.json').then((locators) => {
                cy.get(locators.email_input).type(credentials.email);
                cy.get(locators.password_input).type(credentials.badPassword);
                cy.get(locators.login_button).click();
                cy.wait(1000);
                cy.url().should('eq', credentials.url);
            });
        })
    })

    it('Login with bad credentials', ()=>{
        cy.get('form').within(() => {
            cy.fixture('index.json').then((locators) => {
                cy.get(locators.email_input).type(credentials.badEmail);
                cy.get(locators.password_input).type(credentials.badPassword);
                cy.get(locators.login_button).click();
                cy.wait(1000);
                cy.url().should('eq', credentials.url);
            });
        })
    })
  })