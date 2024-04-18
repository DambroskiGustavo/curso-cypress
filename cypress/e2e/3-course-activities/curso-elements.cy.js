/// <reference types="cypress" />

/* Validações de elementos por texto */
describe('Worj with basic elements', () => { 
    it.only('Text...', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    //  cy.get('body').should('contain', 'Cuidado') // JQuery selector + busca via body (muito ampla)
    //  cy.get('body').should('have.text', 'Cuidado') // Have text busca o texto exato (não considera apenas o contain)
        cy.get('span').should('contain', 'Cuidado') // JQuery selector + busca via span ("menos" amplo)
        /* Validação mais adequada */
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...') // have.text = texto exato
    })
})        