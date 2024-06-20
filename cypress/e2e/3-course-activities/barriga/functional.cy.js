/// <reference types="cypress" />

describe('should test at a functional level', () => {
    beforeEach(() => {
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('.input-group > .form-control')
            .type('gustavodambroski@gmail.com')
        cy.get(':nth-child(2) > .form-control')
            .type('gustavo621')
        cy.get('.btn')
            .click()
        cy.get('.toast-message')
            .should('contain', 'Bem vindo')
    })

    it('Should create an account', () => {
        // Criando uma conta
        cy.get('[data-test="menu-settings"]')
            .click()
        cy.get('[href="/contas"]')
            .click()
        cy.get('[data-test="nome"]')
            .type('Conta de teste')
        cy.get('.btn')
            .click()
        cy.get('.toast-message')
            .should('contain', 'Conta inserida com sucesso!')
    })
    
    it('Should update an account', () => {
        // Alterando uma conta
        cy.get('[data-test="menu-settings"]')
            .click()
        cy.get('[href="/contas"]')
            .click()
        cy.xpath("//table//td[contains(., 'Conta de teste')]/..//i[@class='far fa-edit']")
            .click()
        cy.get('[data-test="nome"]')
            .clear()    
            .type('Conta alterada')
        cy.get('.btn')
            .click()
        cy.get('.toast-message')
            .should('contain', 'Conta atualizada com sucesso!')
    })
})