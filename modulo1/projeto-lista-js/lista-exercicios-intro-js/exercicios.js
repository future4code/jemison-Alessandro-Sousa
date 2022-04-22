// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt('Digite a altura do retângulo: ')
  const largura = prompt('Digite a largura do retângulo: ')
  const area = altura*largura
  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Digite o ano atual: '))
  const anoDeNascimento = Number(prompt('Digite o seu ano de nascimento: '))
  const idade = anoAtual-anoDeNascimento

  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = (peso/(altura*altura))

  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Digite seu nome')
  let idade = prompt('Digite sua idade')
  const email = prompt('Digite seu email')

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt('Digite sua primeira cor favorita')
  const cor2 = prompt('Digite sua segunda cor favorita')
  const cor3 = prompt('Digite sua terceira cor favorita')

  const array = [cor1, cor2, cor3]

  console.log(array)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const frase = string
  const fraseMaiuscula = frase.toUpperCase()

  return fraseMaiuscula

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const pontoDeEquilibrio = custo/valorIngresso

  return pontoDeEquilibrio

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const verificacao = string1.length === string2.length

  return verificacao

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  
  return array[(array.length)-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let variavelCoringa = []

  variavelCoringa = array[0]
  array[0] = array[array.length-1]
  array[array.length-1] = variavelCoringa

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const comparacao = string1.toUpperCase()===string2.toUpperCase()

  return comparacao
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = prompt('Digite o ano atual')
  const anoDeNascimento = prompt('Qual o seu ano de nascimento?')
  const emissaoCarteira = prompt('Em qual ano sua carteira foi emitida?')
  let idade = anoAtual - anoDeNascimento


  const cond1 = idade < 20
  

  return cond1

}

console.log(cond1)

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}