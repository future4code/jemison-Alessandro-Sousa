//Exercícios de interpretação de código------------------------------------------------------------------------------
// 1ª QUESTÃO--------------------------------------------------------------------------------------------------------
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a) 10
// 50

// b)apareceria nada, pois é o comando "console.log" que imprime as informações na tela

// 2ª QUESTÃO--------------------------------------------------------------------------------------------------------
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a) a função verifica se na frase inserida pelo usuário há a palavra "cenoura", retornando "true" caso haja
// b) I. true, II. true e III. true

//Exercícios de interpretação de código------------------------------------------------------------------------------
// 1ª QUESTÃO--------------------------------------------------------------------------------------------------------
//a)
// const apresentacao = function(){
//     "Eu sou Alessandro, tenho 26 anos, moro no Ceará e sou Engenheiro Civil"
    
// }
// console.log(apresentacao)

//b)
// const apresentacao = function (nome,idade,cidade,profissao){
    
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
// }

// apresentacao('Alessandro',26,'Sobral','Engenheiro')

// 2ª QUESTÃO-----------------------------------------------------------------------------------------------

//a.
// function somaDoisNumeros(num1, num2) {
//     const soma = num1+num2

//     return soma
// }
// console.log (somaDoisNumeros(2,3))

//b.
// function primeiroNumeroMaiorQueSegundoNumero(num1, num2) {
//     const maiorQue = num1>=num2

//     return maiorQue
// }
// console.log (primeiroNumeroMaiorQueSegundoNumero(5,10))

//c.
// function parOuNao (num) {
//     const par = num%2 === 0

//     return par
// }
// console.log(parOuNao(4))
// console.log(parOuNao(3))
// console.log(parOuNao(120))

//d.
// function mensagem(string) {
//     const tamanho = string.length
//     const maiuscula = string.toUpperCase()
//     console.log(tamanho,maiuscula)

// }

// console.log(mensagem('O céu está azul hoje'))

//3ª QUESTÃO--------------------------------------------------------------------------------------------------

// const num1 = Number(prompt('Digite o primeiro número'))
// const num2 = Number(prompt('Digite o segundo número'))

// function soma(num1, num2) {
//     const Soma = num1 + num2

//     return Soma
// }

// function sub(num1, num2) {
//     const Sub = num1 - num2

//     return Sub
// }

// function mult(num1, num2) {
//     const Mult = num1 * num2

//     return Mult
// }

// function div(num1, num2) {
//     const Div = num1 / num2

//     return Div
// }



// console.log("Soma:", soma(num1,num2))
// console.log("Subtração:", sub(num1,num2))
// console.log("Multiplicação:", mult(num1,num2))
// console.log("Divisão:", div(num1,num2))
