/// <reference types="cypress" />

describe('should test at a functional level', () => {
  before('', () => {
    // cy.login('gustavodambroski@gmail.com', 'gustavo621')
  })

  beforeEach('', () => {
    // cy.resetApp()
  })

  it('Should create an account', () => {
    // método utilizado para requisições de API, utilizando Cypress (cy.request)
    cy.request({
        method: 'POST',
        url: 'https://barrigarest.wcaquino.me/signin',
        body: { //objeto na requisição*
            email: "gustavodambroski@gmail.com",
            redirecionar: false,
            senha: "gustavo621"
        }
    }).its('body.token').should('not.be.empty')
  })

  it('Should update an account', () => {

  })

  it('should not create an account with same name', () => {

  })

  it('Should create a transaction', () => {

  })

  it('Should get balance', () => {

  })

  it('Should remove a transaction', () => {

  })
})