/// <reference types="cypress" />

/* Comandos */
// ".skip" = vai "esquipar", ou seja, não vai executar o it ou describe associado (não define como falha)
// e pode ser associado a mais de um it ou describe
// ".only" = vai rodar apenas o it ou describe associado (não define como falha e sempre executa 
// o útlimo do código)
// NOTA: Se tiver um skip e um only no mesmo código, o comando executado será o ".only", ignorando o ".skip"

it('A external test...', () => {

})

describe('Should group test...', () => {
    describe('Should group more specific tests...', () => {
        it('specific tests...', () => {

        })
    })

    describe('Should group more specific tests 2...', () => {
        it('specific tests 2...', () => {

        })
    })


    it('A external test...', () => {

    })
})