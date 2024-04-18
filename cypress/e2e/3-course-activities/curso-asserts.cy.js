/// <reference types="cypress" />

it('Equality', () => {
    const a = 1;

    expect(a).equal(1);
    expect(a, 'Deveria ser 1').equal(1);
    expect(a).to.be.equal(1); // usando metodo "to.be." para agradar mais a leitura
    expect('a').not.be.equal('b'); // "not.be" para informar de forma positiva que deva ser diferente
})

it('Truthy', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true; // validando que a é verdadeiro
    expect(true).to.be.true; // validando que true é true
    expect(true).not.be.equal('true'); // validação via true é igual true
    expect(b).to.be.null; // validação que é nulo
    expect(a).to.be.not.null; // validação que não é nulo
    expect(c).to.be.undefined; // validação que é indefinido
})

it('Object Equality', () => {
    const obj = { //objeto no js fica entre chaves
        a: 1, // sintax: nome da propriedade + : + valor
        b: 2 // tendo mais valor, é propriedade + : + valor e vírgula (,) até o peluntimo
    }
    /* Usando propriedades "equal" dos quais todos tem a mesma finalidade, porém escritos de forma */
    expect(obj).equal(obj) // equal
    expect(obj).equals(obj) // equals
    expect(obj).eq(obj) // eq
    expect(obj).to.be.equal(obj) // to be equal
    
    /* Deep = valida as propriedades do objeto para validar se de fato são iguais (utilizando "equal") */
    expect(obj).to.be.deep.equal({a: 1, b: 2})
    expect(obj).eql({a: 1, b: 2}) // mesma ideia do "deep", mais simplificado
    
    /* Include = valida se dentro do objeto está "incluído" a propriedade esperada */
    expect(obj).include({a: 1})
    expect(obj).include({b: 2})

    /* Have = valida se dentro do objeto possui a propriedade esperada */
    expect(obj).to.have.property('b')
    expect(obj).to.have.property('b', 2) // validando que possui a propriedade e valor
    expect(obj).to.not.be.empty // validando de forma generica se as propeirdades não estão vazias
    expect({}).to.be.empty // validando de forma generica se as propeirdades estão vazias
})

it('Arrays', () => {
    const arr = [1, 2, 3] // array
    
    /* Validações via Array */
    expect(arr).to.have.members([1, 2, 3]) // via array, validando se os membros do array possui o esperado
    expect(arr).to.include.members([1, 2, 3]) // via array, validando se os membros do array incluem valores esperados
    expect(arr).to.not.be.empty
    expect([]).to.be.empty
})

it('Types', () => {
    const num = 1 // número
    const str = 'String' // string

    /* ValidaçÕes via Tipos */
    expect(num).to.be.a('number') // se o número possui número
    expect(str).to.be.a('string') // se string possui string
    expect({}).to.be.an('object') // se objeto possui objeto
    expect([]).to.be.an('array') // se array possui array
})

it('Strings', () => {
    const str = 'String de teste'

    /* ValidaçÕes via String */
    expect(str).to.be.equal('String de teste') // se a string é igual a const
    expect(str).to.have.length(15) // se o tamanho da string é igual a quantidade de caracteres
    expect(str).to.contains('de') // se a string contem parte da string
    expect(str).to.match(/de/) // se na string existe parte da string
    expect(str).to.match(/^String/) // ^String = Valda se a string começa com a palavra esperada
    expect(str).to.match(/teste$/) // teste$ = Valda se a string finaliza com a palavra esperada
    expect(str).to.match(/.{15}/) // teste$ = Valda se a string possui a quantidade de caracteres esperada
    expect(str).to.match(/\w+/) // \w+ = valida se a string possui apenas letras
    expect(str).to.match(/\D+/) // \D+ = valida se a string não contem números
}) 

it('Numbers', () => {
    const number = 4
    const floatnumber = 5.2123

    /* Validações via Números inteiros */
    expect(number).to.be.equal(4) // equal (normal)
    expect(number).to.be.above(3) // above = acima
    expect(number).to.be.below(7) // below = abaixo

    /* Validações via Números flutuantes */
    expect(floatnumber).to.be.equal(5.2123) // equal = igual exato (sem variação nas casas decimais)
    expect(floatnumber).to.be.closeTo(5.2, 0.1) // closeTO = aproximado com uma precisão de "0.1" (Exemplo)
    expect(floatnumber).to.be.above(5)  // above = acima
    expect(floatnumber).to.be.below(7)  // below = abaixo

})