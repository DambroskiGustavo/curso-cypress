/// <reference types="cypress" />

describe('Helpers...', () => {
    it('Wrap', () => {
        const obj = {nome: 'User', idade: 20}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        //cy.get('#formNome')
        //    .then($el => {
        //        //$el.val('Funciona via Jquery')
        //       cy.wrap($el).type('Funciona via cypress')
        //    })
        
        const promise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 500)
        })

        cy.get('#buttonSimple')
            .then (() => 
                console.log('Encontrei o primeiro botão'))

        //promise.then(num => 
        //        console.log(num))

        /* é necessário encapsular no wrap para que o código rodar o teste dentro do cypress */
        cy.wrap(promise)
            .then(ret =>
                console.log(ret))

        cy.get('#buttonList')
            .then (() => 
                console.log('Encontrei o segundo botão'))

        cy.wrap(1)
                .then(num => {
                    return 2
        }).should('be.equal', 2)
    })
})