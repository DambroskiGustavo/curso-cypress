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

    it('Its...', () => {
        const obj = {nome: 'User', idade: 20}
        cy.wrap(obj).should('have.property', 'nome', 'User')
        cy.wrap(obj).its('nome').should('be.equal', "User")

        const obj2 = {nome: 'User', idade: 20, endereco: { rua: 'dos bobos' }}
        cy.wrap(obj2).its('endereco.rua').should('contain', 'bobos') // its(A.B) = encadeia a chamada usando o its

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.title().its('length').should('be.equal', 20)
    })

    it.only('Invoke...', () => {
        const getValue = () => 1; 
        const soma = (a, b) => a + b;

        cy.wrap({fn: getValue})
            .invoke('fn') // invoke = invoca a função desejada
            .should('be.equal', 1)

        cy.wrap({fn: soma})
            .invoke('fn', 2, 5) 
            .should('be.equal', 7)  

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').invoke('val', 'Texto via invoke') // o "type" é mais recomendado (normal)

        cy.window().invoke('alert', 'da pra ver?')
        cy.get('#resultado')
           .invoke('html', '<input type="button" value="hacked!"/>')
    
    })

})