//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO---------------------------------------------------------------------------
//1ª QUESTÃO---------------------------------------------------------------------------
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

//SAÍDAS
//"Matheus Nachtergaele"
//"Virginia Cavendish"
//canal: "Globo"
//horario: "14h"

//2ª QUESTÃO---------------------------------------------------------------------------
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

//a) nome: "Juca"
// idade: 3
// raca: "SRD"

// nome: "Juba"
// idade: 3
// raca: "SRD"

// nome: "Jubo"
// idade: 3
// raca: "SRD"
//b) os três pontos indicam que está sendo criada uma cópia de outro objeto

//3ª QUESTÃO---------------------------------------------------------------------------
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

//a)false
//undefined

//b) o valor "false" foi impresso porque o console.log solicitou o valor referente à chave "backender". 
// A saída "undefined" foi por conta que o segundo console.log solicitou um valor referente à chave "altura", 
// algo que não foi declarado

//EXERCÍCIOS DE ESCRITA DE CÓDIGO---------------------------------------------------------------------------
//1ª QUESTÃO---------------------------------------------------------------------------
//A)
// const pessoa = {
//     nome: "Alessandro", 
//     apelidos: ["Ale", "Alex", "Alan"]
//  }

// function apresentacao (objeto) {
// console.log(`Eu sou ${objeto.nome}, mas pode me chamar de ${objeto.apelidos[0]}, ${objeto.apelidos[1]} e ${objeto.apelidos[2]}`)
// }

// console.log(apresentacao(pessoa))

//B)
// const novaPessoa = {
//     ...pessoa,
//     apelidos: ["Du", "Dudu", "Edu"]
//  }

//  console.log(apresentacao(novaPessoa))

//2ª QUESTÃO---------------------------------------------------------------------------
//A)
// const pessoa = {
// 	nome: "Alessandro", 
//     idade: 27, 
// 	profissao: "Engenheiro"
// }

// const novaPessoa = {
// 	nome: "Luanda", 
//     idade: 26, 
// 	profissao: "Enfermeira"
//}

//B)
// function retorno (entrada) {
//     const array = []
//     array.push(entrada.nome)
//     array.push(entrada.nome.length)
//     array.push(entrada.idade)
//     array.push(entrada.profissao)
//     array.push(entrada.profissao.length)

//     console.log(array)

// } 

// console.log(retorno(pessoa))
// console.log(retorno(novaPessoa))

//3ª QUESTÃO---------------------------------------------------------------------------
// const carrinho = []

// const morango = {
//     nome: "morango",
//     disponibilidade: true
// }

// const banana = {
//     nome: "banana",
//     disponibilidade: true
// }

// const maca = {
//     nome: "maca",
//     disponibilidade: true
// }

// function sacola (fruta) {
    
//    carrinho.push(fruta)

// }

// sacola(morango)
// sacola(banana)
// sacola(maca)

// console.log(carrinho)