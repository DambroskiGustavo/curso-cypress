/// <reference types="cypress" />

describe('Work with alerts...', () => {
    
    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })
    
    beforeEach(() => {
        cy.reload()
    })
    // método para validar mensagens de alert no navegador
    it('Alert', () => {
        cy.get('#alert')
            .click()
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Alert Simples')
        })
    })
    // método para validar mensagens de alert no navegador com dados mokados
    it.only('Alert com mock', () => {
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        })
    })
})