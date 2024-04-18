/// <reference types="cypress" />

describe('Cypress basics', () => { 
    it('Should visit a page and assert title', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html') // visit = visita/acessa
        
        // const title = cy.title()
        // console.log(title)

        /* Uso do SHOULD para validar */
        cy.title().should('be.equal', 'Campo de Treinamento') // should (deve) + be equal = ser igual
        cy.title().should('contain', 'Campo') //  should (deve) + contain = deve conter

        /* Uso de forma mais "estruturada" e "legível" */
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .should('contain','Campo')
    })
})