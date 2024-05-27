/// <reference types="cypress" />

describe('Esperas...', () => {
    
    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })
    
    beforeEach(() => {
        cy.reload()
    })
  
    it('Deve aguardar elemento estar disponível', () => { //aqui o próprio cypress aguarda o elemento
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })

    it('Deve fazer retrys', () => { //aqui o cypress realiza os "retries" até ele conseguir validar os elementos
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo')    
            .should('exist')
            .type('Funciona')    
            
    })

    it.only('Uso do find', () => { // uso do find pelos elementos 
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')

        /*Uso não recomendado para o find, utilizando o mesmo uso de get com should de item diferente*/    
        //cy.get('#lista li') 
        //    .find('span')
        //    .should('contain', 'Item 2')

        cy.get('#Lista li span')
            .should('contain', 'Item 2')
    
    })

})