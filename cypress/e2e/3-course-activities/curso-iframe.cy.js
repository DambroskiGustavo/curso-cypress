/// <reference types="cypress" />

describe('Work with Iframe...', () => {
    // validação de elementos através do iframe, para validá-los e utilizá-los de maneira correta
    it('Deve preecnher campo de texto', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#frame1').then(iframe => {
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#tfield')
                .type('Funciona?')
                .should('have.value', 'Funciona?')
        })
    })

    it('Deve testar frame diretamente', () => {
        cy.visit('https://www.wcaquino.me/cypress/frame.html')
        cy.get('#otherButton')
            .click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
        })
    })
})