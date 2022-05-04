//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO---------------------------------------------------------------------------
//1ª QUESTÃO---------------------------------------------------------------------------------------------------
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

//O código acima está incrementando o valor da variável "i", até que "i" atinja o valor "4", onde não poderá
//mais entrar no loop(laço). O valor apresentado será "10".

//2ª QUESTÃO---------------------------------------------------------------------------------------------------
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

//A) 19,21,23,25,27,30
//B) Não. Seria necessário ter algum contador a ser incrementando em cada interação, para que o programa 
//pudesse percorrer todos os índices. 

//3ª QUESTÃO---------------------------------------------------------------------------------------------------
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

//SAÍDA
// *
// **
// ***
// ****

//EXERCÍCIOS DE ESCRITA DE CÓDIGO------------------------------------------------------------------------------
//1ª QUESTÃO---------------------------------------------------------------------------------------------------
// let quantidadeDeBichinhos = Number(prompt("quanto bichinhos de estimação você tem?"))
// let nomesDosBichinhos = []

// if (quantidadeDeBichinhos === 0) {
//     console.log("Que pena! Você pode adotar um pet")
// } else {
//     for (let i = 0; i < quantidadeDeBichinhos; i++) {
//         nomesDosBichinhos[i] = prompt("digite o nome do pet")
//     }
    
//     console.log (nomesDosBichinhos)
// }

//2ª QUESTÃO---------------------------------------------------------------------------------------------------
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//A)
// for (let valores of arrayOriginal) {
//     console.log (valores)
// }

//B)
// for (let valores of arrayOriginal) {
//         console.log (valores/10)
// }

//C)
// let valor = []

// for (let i=0;i<arrayOriginal.length;i++) {
//     if (arrayOriginal[i]%2 === 0) {
//         valor.push(arrayOriginal[i])
//     }
// }

// console.log (valor)

//D)
// for (let i = 0; i < arrayOriginal.length; i++) {

// console.log(`O elemento do índex ${i} é ${arrayOriginal[i]}`)

// }

//E)
// let maiorValor = 0
// let menorValor = 200

// for (let i=0;i<arrayOriginal.length;i++) {

//     if (arrayOriginal[i] > maiorValor) {
//         maiorValor = arrayOriginal[i]
//     } if (arrayOriginal[i]<menorValor) { 
//         menorValor = arrayOriginal[i]
//     }
// }
  
// console.log(`O maior valor é: ${maiorValor} e o menor valor é: ${menorValor}`)

//DESAFIOS----------------------------------------------------------------------------------------------------
//1)
// let numeroEscolhido = Number(prompt("Digite o número escolhido"))
// console.log("Vamos jogar!")
// let tentativas = 0

// let palpite = Number(prompt("Digite um palpite"))

// while (palpite !== numeroEscolhido) {
//     if (palpite < numeroEscolhido) {
//         tentativas +=1
//         console.log(`O seu palpite foi ${palpite} mas o número escolhido é maior`)
//         palpite = Number(prompt("Digite outro palpite"))
//     } else {
//         tentativas += 1
//         console.log(`O seu palpite foi ${palpite} mas o número escolhido é menor`)
//         palpite = Number(prompt("Digite outro palpite"))
//     } 
// }
// if (palpite === numeroEscolhido) {
//     tentativas += 1
//     console.log(`O seu palpite foi ${palpite}.
//     Parabéns! Você acertou com ${tentativas} tentativas`)
// }

//2)----------------------------------------------------------------------------------------------------------

// function numeroAleatorio(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
//   }

// let numeroEscolhido = numeroAleatorio (1,100)
// console.log("Vamos jogar!")
// let tentativas = 0

// let palpite = Number(prompt("Digite um palpite"))

// while (palpite !== numeroEscolhido) {
//     if (palpite < numeroEscolhido) {
//         tentativas +=1
//         console.log(`O seu palpite foi ${palpite} mas o número escolhido é maior`)
//         palpite = Number(prompt("Digite outro palpite"))
//     } else {
//         tentativas += 1
//         console.log(`O seu palpite foi ${palpite} mas o número escolhido é menor`)
//         palpite = Number(prompt("Digite outro palpite"))
//     } 
// }
// if (palpite === numeroEscolhido) {
//     tentativas += 1
//     console.log(`O seu palpite foi ${palpite}.
//     Parabéns! Você acertou com ${tentativas} tentativas`)
// }