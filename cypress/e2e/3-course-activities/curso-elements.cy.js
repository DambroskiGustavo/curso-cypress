/// <reference types="cypress" />

describe('Work with basic elements', () => { 
    // before(() => { // before = comando de realizar ação(ou ações) específicamente antes dos testes
    beforeEach(() => { // before = comando de realizar ação(ou ações) específicamente antes de cada teste
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    /* Validações de elementos por texto */
    it('Text...', () => {
        cy.get('body').should('contain', 'Cuidado') // JQuery selector + busca via body (muito ampla)
    //  cy.get('body').should('have.text', 'Cuidado') // Have text busca o texto exato (não considera apenas o contain)
        cy.get('span').should('contain', 'Cuidado') // JQuery selector + busca via span ("menos" amplo)
        /* Validação mais adequada */
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...') // have.text = texto exato
        // "." é o identificador de classes
    })

    it('Links...', () => {
        /* Validações de elementos por links */
        // usando o href, ou "a"
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
        // "#" é o identificador de id
        
        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click() // usando o contais para validar o elemento (não é a melhor práticas)
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    it('TextFields', () => {
        cy.get('#formNome')
            .type('Cypress test') // type = comando de escrever
            .should('have.value', 'Cypress test') // "value" para textos
        
        cy.get('#elementosForm\\:sugestoes') // \\para interpretar corretamente, sempre que tiver ":" use o \\ antes
            .type('textarea')
            .should('have.value', 'textarea')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('???')

        cy.get('[data-cy="dataSobrenome"]')
            .type('Teste12345{backspace}{backspace}') // {backspace} = o comando irá apagar a última letra em order final
            .should('have.value', 'Teste123')  

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto', {delay:100}) // {delay:100} = comando de delay no comando (type)
            .should('have.value','acerto')
        
    })

    it('Radiobutton', () => {
        cy.get('#formSexoFem')
            .click()
            .should('be.checked') // be.checked = garantir que o campo selecionado está checado

        cy.get('#formSexoMasc')
            .should('not.be.checked') // not.be.checked = garante que que o campo não está selecionado / checado

        cy.get("[name='formSexo']")
            .should('have.length', 2)

    })

    it('Checkbox', () => {
        cy.get('#formComidaPizza')
        .click()
        .should('be.checked')

        cy.get('[name=formComidaFavorita]')
            .click({multiple: true}) // {multiple: true} = opção de seleção de todos os valores disponíveis em um grupo

        cy.get('#formComidaPizza')
            .should('not.be.checked')
        
        cy.get('#formComidaCarne')
            .should('be.checked')
        
        cy.get('#formComidaFrango')
            .should('be.checked')

        cy.get('#formComidaVegetariana')
            .should('be.checked')
            
    })
    
    it('Combo', () => {
        cy.get('[data-test="dataEscolaridade"]')
            .select('2o grau completo') // no select, é possível selecionar o valor visível ou o valor do campo (código)
            .should('have.value', '2graucomp') // no should, só é possível validar o valor do campo (código)

        cy.get('[data-test="dataEscolaridade"]')
            .select('1graucomp') // no select, é possível selecionar o valor visível ou o valor do campo (código)
            .should('have.value', '1graucomp')

        cy.get('[data-test="dataEscolaridade"] option')
            .should('have.length', 8)

        cy.get('[data-test="dataEscolaridade"] option')
            .then($arr => {
                const values = []
                $arr.each(function() {
                    values.push(this.innerHTML)
                })
                expect(values).to.include.members(["Superior", "Mestrado"])
            })

    })

    it.only('Combo multiplo', () => {
        cy.get('[data-testid="dataEsportes"]')
            .select(['natacao', 'Corrida', 'nada']) // via array, o select deve ser feito pelo 'value', não pela string visível

        //cy.get('[data-testid="dataEsportes"]')
          //  .should('have.value', ['natacao', 'Corrida', 'nada'])

        cy.get('[data-testid="dataEsportes"]')
            .then($el => {
                expect($el.val()).to.be.deep.equal(['natacao', 'Corrida', 'nada'])
                expect($el.val()).to.have.length(3)

        cy.get('[data-testid="dataEsportes"]')
            .invoke('val')
            .should('eql', ['natacao', 'Corrida', 'nada'])

        })
    })
})        