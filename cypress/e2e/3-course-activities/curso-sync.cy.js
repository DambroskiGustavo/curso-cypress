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

    it('Uso do find', () => { // uso do find pelos elementos 
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
    /*o cypress possui um timeout de 4 segundos, por default*/
    it('Uso do timeout', () => {
        //cy.get('#buttonDelay').click()
        //cy.get('#novoCampo', {timeout: 1000}).should('exist')
        
    //    cy.get('#buttonListDOM').click()
    //    /* O wait não vai aguardar o carregamento de algum componente, ele vai parar toda a aplicação */
    //    //cy.wait(5000) 
    //    cy.get('#lista li span', {timeout: 30000 })
    //    /* O timeout dentro do get, dá o comando para aguardar o tempo definido para o carregamento do elemento ou antes*/
    //        .should('contain', 'Item 2')

        cy.get('#buttonListDOM').click()
        cy.get('#lista li span')
            .should('have.length', 1)
        cy.get('#lista li span')
            .should('have.length', 2)
        
    })
    /* retry no cypress */
    it('Click retry', () => {
        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value', '111')
    })

    it('Should vs Then 1', () => {
        cy.get('#buttonListDOM').click()
        cy.get('#lista li span').then($el => { // then = aguarda até o elemento ser carregado e ai trás o "log"
    //  cy.get('#lista li span').should($el => { // should = verificar até o elemento ser carregado e ai trás o "log"
            //.should('have.length', 1)
            console.log($el)
            expect($el).to.have.length(1)
        })           
    })

    it.only('Should vs Then 2', () => {
        cy.get('#buttonListDOM').then($el => { //should ignorará o retorno*
            //console.log($el)
            expect($el).to.have.length(1)
            cy.get('#buttonList')
        })
    })
})