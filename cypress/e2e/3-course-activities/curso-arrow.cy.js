it('nada agora', function() {})

// função padrão
/*function soma(a, b) {
    return a+b;
}*/

// const, do qual é constante e não alterável
/*const soma = function (a, b) {
    return a + b
}*/

// let, do qual poderá ter alterações com mais frequência
/*let soma = (a, b) => {
    return a + b
}*/

// outro exemplo, apenas com o arrow
// o return só é "implícito" no exemplo abaixo
/*const soma = (a, b) => a + b*/

// modelo "explícito"
/*const soma = (a, b) => {
    return a + b
}*/

/*const soma = (a) => a + a*/

// const soma = a => a + a

const soma = () => 5 + 5

console.log(soma(1,4))

// onde o 'this' referencia a função que a chamou
it('a function test...', function () {
    console.log(Function, this)
})

// onde o 'this' não consegue referenciar quem a chamou
it('a arrow test...', () => {
    console.log(Function, this)
})