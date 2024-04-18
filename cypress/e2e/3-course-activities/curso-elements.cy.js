/// <reference types="cypress" />

describe('Worj with basic elements', () => { 
    /* Validações de elementos por texto */
    it('Text...', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    //  cy.get('body').should('contain', 'Cuidado') // JQuery selector + busca via body (muito ampla)
    //  cy.get('body').should('have.text', 'Cuidado') // Have text busca o texto exato (não considera apenas o contain)
        cy.get('span').should('contain', 'Cuidado') // JQuery selector + busca via span ("menos" amplo)
        /* Validação mais adequada */
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...') // have.text = texto exato
        // "." é o identificador de classes
    })

    it.only('Links', () => {
        /* Validações de elementos por links */
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        // usando o href, ou "a"
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
        // "#" é o identificador de id

        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click() // usando o contais para validar o elemento (não é a melhor práticas)
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

})        