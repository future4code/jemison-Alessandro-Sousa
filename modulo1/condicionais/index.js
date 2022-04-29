//Exercícios de interpretação de código----------------------------------------------
//1º QUESTÃO-------------------------------------------------------------------------
/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
*/
//A) O código recebe um número e verifica, por meio de um condicional, se ele tem resto 0.
//B) Para números que, quando divididos por 2 tenham resto 0, ou seja, números pares.
//C) Para números que, quando divididos por 2 tenham resto diferente de 0, ou seja, números ímpares.

//2º QUESTÃO-------------------------------------------------------------------------
/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
     // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
*/

//A) O código serve para imprimir o valor (em reais) da fruta escolhida.
//B) "O preço da fruta maça é R$ 2.25"
//C) Seria impresso o valor 5, ao invés de 5.5.

//3º QUESTÃO-------------------------------------------------------------------------
/*const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
  let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)*/

//A) Criando uma constante chamada "numero" e armazenando nela um número fornecido pelo usuário.
//B) Para o número 10: "Esse número passou no teste". Para o número -10: dará erro.
/*C) Sim. Quando um número menor que 0 é digitado, o código não entra no bloco do condicional "if". O bloco 
seguinte instrui o programa a imprimir o que contém na variável mensagem, que não foi definida no escopo 
global do programa, apenas dentro do bloco do condicional.*/

//Exercícios de escrita de código----------------------------------------------------
//1º QUESTÃO-------------------------------------------------------------------------
// let idade = Number(prompt("Digite sua idade"))

// if (idade>=18) {
//     console.log("Você pode dirigir")
// } else {
//     console.log("Você não pode dirigir")
// }

//2º QUESTÃO-------------------------------------------------------------------------
// const turno = prompt("Digite o turno em que você estuda, sendo M para Matutino, V para Vespertino ou N para Noturno")

// if (turno==="M") {
//     console.log ("Bom dia!")
// } else if (turno==="V") {
//     console.log("Boa tarde!")
// } else if (turno==="N") {
//     console.log ("Boa noite!")
// }

//3º QUESTÃO-------------------------------------------------------------------------

// const turno = prompt("Digite o turno em que você estuda, sendo M para Matutino, V para Vespertino ou N para Noturno").toLowerCase()

// switch (turno) {
//     case 'm':
//         console.log("Bom dia!")
//         break
//     case 'v':
//         console.log("Boa tarde!")
//         break
//     case 'n':
//         console.log("Boa noite!")
//         break
// }

//4º QUESTÃO-------------------------------------------------------------------------

// let generoDoFilme = prompt("Qual o gênero do filme?")
// let precoDoIngresso = Number(prompt("Qual o valor do ingresso?"))

// if (generoDoFilme.toLowerCase()==="fantasia" && precoDoIngresso<=15) {
//     console.log("Bom filme!")
// } else { 
//     console.log("Escolha outro filme :(")
// }

//DESAFIOS----------------------------------------------------------------------------
//1ª QUESTÃO--------------------------------------------------------------------------
// let generoDoFilme = prompt("Qual o gênero do filme?")
// let precoDoIngresso = Number(prompt("Qual o valor do ingresso?"))

// if (generoDoFilme.toLowerCase()==="fantasia" && precoDoIngresso<=15) {
//     let lanchinho = prompt("Qual snack você quer comprar?")
//     console.log(`Bom filme!
//     Aproveite seu/sua ${lanchinho}!`)
// } else { 
//     console.log("Escolha outro filme :(")
// }
//2ª QUESTÃO--------------------------------------------------------------------------
// let nome = prompt("Digite seu nome")
// let tipoDeJogo = prompt("Qual o tipo de jogo? (IN - Internacional ou DO - Doméstico)")
// let etapaDeJogo = prompt("Qual a etapa de jogo? (SF - Semi-final, DT - Decisão de terceiro lugar ou FI - Final")
// let categoria = prompt("Qual a categoria? (1, 2, 3 ou 4)")
// let quantindadeDeIngressos = prompt("Qual a quantidade de ingressos?")
// let operador = "vazio"

// switch (tipoDeJogo.toLocaleLowerCase()) {
//     case 'in':
//         operador = "U$"
//         tipoDeJogo = "Internacional"
//         switch (etapaDeJogo.toLocaleLowerCase()) {
//             case 'sf':
//                 etapaDeJogo = "Semi-final"
//                 switch (categoria) {
//                     case '1':
//                         precoDoIngresso = 1320*4.1
//                         break
//                     case '2':
//                         precoDoIngresso = 880*4.1
//                         break
//                     case '3':
//                         precoDoIngresso = 550*4.1
//                         break
//                     case '4':
//                         precoDoIngresso = 220*4.1
//                         break 
//                 }
//             break
//             case 'dt':
//                 etapaDeJogo = "Decisão de terceiro lugar"
//                 switch (categoria) {
//                     case '1':
//                         precoDoIngresso = 660*4.1
//                         break
//                     case '2':
//                         precoDoIngresso = 440*4.1
//                         break
//                     case '3':
//                         precoDoIngresso = 330*4.1
//                         break
//                     case '4':
//                         precoDoIngresso = 170*4.1
//                         break
//                 }
//             break 
//                 case 'fi':
//                     etapaDeJogo = "Final"
//                     switch (categoria) {
//                         case '1':
//                             precoDoIngresso = 1980*4.1
//                             break
//                         case '2':
//                             precoDoIngresso = 1320*4.1
//                             break
//                         case '3':
//                             precoDoIngresso = 880*4.1
//                             break
//                         case '4':
//                             precoDoIngresso = 330*4.1
//                             break 
//                     }
//                 break


//         }
//     break

//     case 'do': 
//     operador = "R$"
//     tipoDeJogo = "Nacional"
//     switch (etapaDeJogo.toLocaleLowerCase()) {
//         case 'sf':
//             etapaDeJogo = "Semi-final"
//             switch (categoria.toLocaleLowerCase()) {
//                 case '1':
//                     precoDoIngresso = 1320
//                     break
//                 case '2':
//                     precoDoIngresso = 880
//                     break
//                 case '3':
//                     precoDoIngresso = 550
//                     break
//                 case '4':
//                     precoDoIngresso = 220
//                     break 
//             }
//         break
//         case 'dt':
//             etapaDeJogo = "Decisão de terceiro lugar"
//             switch (categoria) {
//                 case '1':
//                     precoDoIngresso = 660
//                     break
//                 case '2':
//                     precoDoIngresso = 440
//                     break
//                 case '3':
//                     precoDoIngresso = 330
//                     break
//                 case '4':
//                     precoDoIngresso = 170
//                     break 
//             }
//         break
//             case 'fi':
//                 etapaDeJogo = "Final"
//                 switch (categoria) {
//                     case '1':
//                         precoDoIngresso = 1980
//                         break
//                     case '2':
//                         precoDoIngresso = 1320
//                         break
//                     case '3':
//                         precoDoIngresso = 880
//                         break
//                     case '4':
//                         precoDoIngresso = 330
//                         break 
//                 }
//             break


//     }
// break
// }

// console.log(
// `---Dados da compra--- 
// Nome do cliente: ${nome}
// Tipo de jogo: ${tipoDeJogo}
// Etapa do jogo: ${etapaDeJogo}
// Categoria: ${categoria}
// Ingressos: ${quantindadeDeIngressos}

// ---Valores---
// Valor do ingresso: ${operador} ${precoDoIngresso}
// Valor total: ${operador} ${quantindadeDeIngressos*precoDoIngresso}`)