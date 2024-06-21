/// <reference types="cypress" />

import loc from '../../../support/locators'
import '../../../support/commandsContas'

describe('should test at a functional level', () => {
    before(() => {
        cy.login('gustavodambroski@gmail.com', 'gustavo621')
        cy.resetApp()
    })

    it('Should create and update an account', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Conta de teste')
        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso!')
        cy.acessarMenuConta()
        cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click()
        cy.get(loc.CONTAS.NOME)
            .clear()    
            .type('Conta alterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso!')
    })
})