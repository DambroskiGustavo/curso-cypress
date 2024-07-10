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
    cy.resetRest()
  })

  it('Should create an account', () => {
    // método utilizado para requisições de API, utilizando Cypress (cy.request)
    cy.request({
        method: 'POST',
        headers: { Authorization: `JWT ${token}`}, // O uso de "JWT" é devido a versão da API, então em aplicações mais novas, se utilizará o "bearer" + ${token}
        url: '/contas',
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
    cy.request({
      method: 'GET',
      url: '/contas',
      headers: { Authorization: `JWT ${token}`},
      qs: {
        nome: 'Conta para alterar'
      }
    }).then(res => {
      cy.request({
        url: `/contas/${res.body[0].id}`,
        method: 'PUT',
        headers: { Authorization: `JWT ${token}`},
        body: {
          nome: 'Conta alterada via rest'
        }
      }).as('response')
    })
    
    cy.get('@response').its('status').should('to.equal', 200)
  })

  it.only('should not create an account with same name', () => {
    cy.request({
      method: 'POST',
      headers: { Authorization: `JWT ${token}`}, // O uso de "JWT" é devido a versão da API, então em aplicações mais novas, se utilizará o "bearer" + ${token}
      url: '/contas',
      body: {
        nome: 'Conta mesmo nome'
          },
          failOnStatusCode: false
      }).as('response')

    cy.get('@response').then(res =>{
      console.log(res)
        expect(res.status).to.be.equal(400)
        expect(res.body.error).to.be.equal('Já existe uma conta com esse nome!')
    })
  })

  it('Should create a transaction', () => {

  })

  it('Should get balance', () => {

  })

  it('Should remove a transaction', () => {

  })
})