/// <reference types="cypress" />

describe('Work with alerts...', () => {
    
    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })
    
    beforeEach(() => {
        cy.reload()
    })

    /* 
     * DESAFIO 1 DO CURSO
     * Acessar a página e realizar a validação dos alerts através do botão "Cadastrar"
     * do qual irá validar se os campos "Nome", "Sobrenome" e "Sexo" estarão preenchidos e selecionados
     */

    it('Desafio 1', () => {
        cy.get('#formCadastrar')
            .click()
        
        cy.on('window:Confirme', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Nome eh obrigatorio')
        })
        
        cy.on('window:Alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Ok')
        })
        
        cy.get('#formNome')
            .type('Gustavo')
        
        cy.get('#formCadastrar')
            .click()
        
        cy.on('window:Confirm', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Sobrenome eh obrigatorio')
        })
        
        cy.on('window:Alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Ok')
        })
        
        cy.get('[data-cy="dataSobrenome"]')
            .type('Dambroski')

        cy.get('#formCadastrar')
            .click()

        cy.on('window:Confirme', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Sexo eh obrigatorio')
        })
        
        cy.on('window:Alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Ok')
        })
        
        cy.get('#formSexoMasc')
            .click()

        cy.get('#formCadastrar')
        .click()

        cy.on('#resultado > :nth-child(1)', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Cadastrado!')
        })

    })

})