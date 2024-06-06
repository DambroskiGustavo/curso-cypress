/// <reference types="cypress" />

describe('Work with Iframe...', () => {
    beforeEach(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.reload()
    })

    // Jquery selectors: https://www.w3schools.com/jquery/jquery_selectors.asp
    it('Using jquery selector', () => {
        cy.get(':nth-child(1) > :nth-child(3) > [type="button"]')
        cy.get('table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3) > input')
            .click()
        cy.get("[onclick*='Francisco']")
        cy.get('#tabelaUsuarios td:contains(\'Doutorado\'):eq(0) ~ td:eq(3)')
        cy.get('#tabelaUsuarios tr:contains(\'Doutorado\'):eq(0) td:eq(6) input')
    })

    it.only('Using xpath', () => {
        cy.xpath('//input')
        cy.xpath('//input[contains(@onclick, \'Francisco\')]')
        cy.xpath("//table[@id='tabelaUsuarios']//td[contains(.,'Francisco')]/following-sibling::td/input")
        cy.xpath("//table[@id='tabelaUsuarios']//td[contains(.,'Francisco')]/..//input[@type='text']")
        cy.xpath("//*[@data-test='data2']")
        cy.xpath("//td[contains(., 'Usuario A')]/following-sibling::td[contains(.,'Mestrado')]/..//input[@type='text']")
            .type('Funciona?')
    })
})