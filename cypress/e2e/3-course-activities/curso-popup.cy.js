/// <reference types="cypress" />

describe('Work with Popup...', () => {
    // validação de elementos através do iframe, para validá-los e utilizá-los de maneira correta
    it('Deve testar popup diretamente', () => {
        cy.visit('https://www.wcaquino.me/cypress/frame.html')
        cy.get('#otherButton')
            .click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
        })
    })
   
    it('Deve verificar se o popup foi invocado', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        // com o stub o teste pode executar a abertura do pop, porém sem abri-lo durante o teste
        // em resumo, o cypress consegue fazer a validação + assertiva de que o popup foi aberto
        cy.window().then(win => {
            cy.stub(win, 'open').as('winOpen')
        })
        cy.get('#buttonPopUp')
            .click()
        cy.get('@winOpen') // @+stub trás o alias no get
            .should('be.called')
    })

    describe.only('With links...', () => {
        beforeEach(() => {
            cy.visit('https://www.wcaquino.me/cypress/componentes.html')          
        }) 
                        
        it('Check popup url', () => {
            // no caso de popups, o uso do 'have.prp' é mais indicado e trará a propriedade do elemento
            cy.contains('Popup2')
                .should('have.prop', 'href')
                .and('equal', 'https://www.wcaquino.me/cypress/frame.html')
        })

        it('Should access popup dinamically', () => {
            // Neste contexto, o cypress irá validar o href pelo próprio site e posterioremnte validará se o acessará
            cy.contains('Popup2').then($a => {
                const href = $a.prop('href')
                cy.visit(href)
                cy.get('#tfield')
                    .type('Funciona?')
                    .should('have.value', 'Funciona?')
            })          
        })

        it('Should force link on same page', () => {
            // Neste contexto, removendo o atributo "target", o acesso é feito pela mesma página
            cy.contains('Popup2')
                .invoke('removeAttr', 'target')
                .click()
            cy.get('#tfield')                
                .type('Funciona?')
                .should('have.value', 'Funciona?')
        })
    })
})