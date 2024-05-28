/// <reference types="cypress" />

describe('Cypress basics', () => { 
    it.only('Should visit a page and assert title', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html') // visit = visita/acessa
        
        // const title = cy.title()
        // console.log(title)

        /* Validação de Pause */
        // cy.pause() = Usa o metótodo de pausar a aplicação

        /* Uso do SHOULD para validar */
        cy.title().should('be.equal', 'Campo de Treinamento') // should (deve) + be equal = ser igual
        cy.title().should('contain', 'Campo') //  should (deve) + contain = deve conter
            // .debug() = usa o debug do console para depurar o código

        /* Uso de forma mais "estruturada" e "legível" */
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .should('contain','Campo')

        let syncTitle

        cy.title().then(title => {
                console.log(title)
            
        cy.get('#formNome').type('Campo de Treinamento')

        syncTitle = title
        }) 

        cy.get('[data-cy="dataSobrenome"]').then($el => {
            $el.val(syncTitle)
        })
    
        cy.get('#elementosForm\\:sugestoes').then($el => {
            cy.wrap($el).type(syncTitle)
        })
    })

    it('Should find and interact with an element', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')      

        cy.get('#buttonSimple')
            .click() // Click = comando de click em elementos
            .should('have.value', 'Obrigado!') // have.value = possui o valor 
    })
})