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
    it('Alert com mock', () => {
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        })
    })
    // método para validar o confirm + o alert, em caso positivo
    it('Confirm', () => {
        cy.get('#confirm')
            .click()
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Confirm Simples')
        })
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Confirmado')
      })
        cy.get('#confirm')
            .click()
    })
    // método para validar o confirm + o alert, em caso negativo
    it('Deny', () => {
        cy.get('#confirm')
            .click()
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Confirm Simples')
            return false
        })
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Negado')
        })
        cy.get('#confirm')
            .click()
    })

    it('Prompt', () => {
        cy.window().then(win => {
            cy.stub(win, 'prompt')
                .returns('42')
        })
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Era 42?')
        })
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal(':D')
        })
        cy.get('#prompt')
            .click()
    })

    it.only('Validando mensagens', () => {
        
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)
        
        cy.get('#formCadastrar')
            .click()
            .then(() => expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio'))

        cy.get('#formNome')
            .type('Wagner')
        cy.get('#formCadastrar')
            .click()
            .then(() => expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio'))
                
        cy.get('[data-cy="dataSobrenome"]')
            .type('Aquino')
        cy.get('#formCadastrar')
            .click()
            .then(() => expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio'))
            
        cy.get('#formSexoMasc')
            .click()
        cy.get('#formCadastrar')
            .click()

        cy.get('#resultado > :nth-child(1)')
            .should('contain', 'Cadastrado!')

        
    })
})