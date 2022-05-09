/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


console.log("Bem vindo ao jogo!")

if(confirm("Quer começar uma nova rodada?")) {
   console.log("Vamos começar!")
const carta1Usuario = comprarCarta()
const carta2Usuario = comprarCarta ()
const somaUsuario = carta1Usuario.valor+carta2Usuario.valor

const carta1Pc = comprarCarta()
const carta2Pc = comprarCarta ()
const somaComputador = carta1Pc.valor+carta2Pc.valor

console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - pontuação: ${somaUsuario}`)
console.log(`Computador - cartas: ${carta1Pc.texto} ${carta2Pc.texto} - pontuação: ${somaComputador}`)

if (somaComputador>somaUsuario) {
   console.log ("O computador ganhou!")
} else if (somaComputador<somaUsuario) {
   console.log ("O usuário ganhou!")
} else {
   console.log("Empate!")
}
// o que fazer se o usuário clicar "ok"
} else {
   console.log("Fim de jogo!")
// o que fazer se o usuário clicar "cancelar"
}



