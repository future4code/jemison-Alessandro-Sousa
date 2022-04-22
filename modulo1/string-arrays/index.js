// Exercícios de interpretação de código-----------------------------------------------------------------------------
// 1ª QUESTÃO------------------------------------------------------------------------------------------------------
// let array
// console.log('a. ', array)

//array = null
//console.log('b. ', array)

//array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//console.log('c. ', array.length)


//let i = 0
//console.log('d. ', array[i])


//array[i+1] = 19
//console.log('e. ', array)

// const valor = array[i+6]
// console.log('f. ', valor)

//saídas: 
//a. undefined
//b. null
//c. 11
//d. 3
//e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] 
//f. 10

// 2ª QUESTÃO-------------------------------------------------------------------------------------------------------
//const frase = prompt("Digite uma frase")

//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

//entrada: "Subi num ônibus em Marrocos" 
//saída: SUBI NUM ÔNIBUS EM MIRROCOS 27

// Exercícios de escrita de código----------------------------------------------------------------------------------
// 1ª QUESTÃO------------------------------------------------------------------------------------------------------
// let nome = prompt ("Digite seu nome")
// let eMail = prompt("Digite seu e-mail")

// console.log (`O e-mail ${eMail} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)

// 2ª QUESTÃO-----------------------------------------------------------------------------------------------------
// let array = ["churrasco", "pizza", "suco", "refrigerante", "sushi"]

// console.log(array)
// console.log(`Essas são as minhas comidas preferidas: \n${array[0]} \n${array[1]} \n${array[2]} \n${array[3]}
// ${array[4]}`)

// let comidaPreferida = prompt ("Qual a sua comida preferida?")
// array[1] = comidaPreferida
// console.log(array)

// 3ª QUESTÃO-----------------------------------------------------------------------------------------------------

// let listaDeTarefas = []

// let tarefa1 = prompt ("Digite a primeira tarefa que você precisa realizar hoje")
// let tarefa2 = prompt ("Digite a segunda tarefa que você precisa realizar hoje")
// let tarefa3 = prompt ("Digite a terceira tarefa que você precisa realizar hoje")

// listaDeTarefas[0] = tarefa1
// listaDeTarefas[1] = tarefa2
// listaDeTarefas[2] = tarefa3

// console.log(listaDeTarefas)

// let indice = Number(prompt("Qual o número da tarefa que vc já realizou?"))

// listaDeTarefas.splice ((indice-1), 1)

// console.log(listaDeTarefas)

// DESAFIO--------------------------------------------------------------------------------------------------------
// 1.
// let frase = prompt("Digite uma frase")
// const pct = frase.split(" ")
// console.log(pct)

//2.
// let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

// let i = frutas.indexOf("Abacaxi")

// console.log(`O indícide da palavra "Abacaxi" é: ${i}, e o tamanho do array é: ${frutas.length}`)