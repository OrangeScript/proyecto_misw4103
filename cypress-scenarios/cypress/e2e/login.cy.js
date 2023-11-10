describe('Testing basic Login', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:2368/ghost/#/signin')
        cy.wait(7000)
    })
    it('Create an user and login', ()=>{
        cy.get('form').within(() => {
            cy.get('input.gh-input.email').type('Monitor')
            cy.get('input.gh-input.password').type('Pruebas')
            cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view').click()
        })
        cy.wait(1000) 
    })
  })