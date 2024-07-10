/// <reference types="cypress" />

describe('should test at a functional level', () => {
  let token

  before('', () => {
    cy.getToken('gustavodambroski@gmail.com', 'gustavo621')
      .then(tkn => {
        token = tkn
      })
  })

  beforeEach('', () => {
    // cy.resetApp()
  })

  it('Should create an account', () => {
    // método utilizado para requisições de API, utilizando Cypress (cy.request)
    cy.request({
        method: 'POST',
        headers: { Authorization: `JWT ${token}`}, // O uso de "JWT" é devido a versão da API, então em aplicações mais novas, se utilizará o "bearer" + ${token}
        url: 'https://barrigarest.wcaquino.me/contas',
        body: {
          nome: 'Conta via rest'
            }
        }).as('response')
    cy.get('@response').then(res =>{
        expect(res.status).to.be.equal(201)
        expect(res.body).to.have.property('id')
        expect(res.body).to.have.property('nome','Conta via rest')
    })
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