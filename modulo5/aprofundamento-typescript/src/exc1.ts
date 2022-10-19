let minhaString: string = "Labenu"

console.log(minhaString);

// A) a partir do momento que declaro que a variável é do tipo 'string' não é possível atribuir um número à ela, já que
// número é do tipo 'number'.

let meuNumero: number | string = 27

console.log(meuNumero);

// B) para que a variável aceite 'number' e 'string' simultaneamente basta utilizar o sinal pipe(|)


//C)
type pessoa = {
    nome: string,
    idade: number
    corFavorita: string
}

const person1 = {nome: "Yuri Alberto", idade: 27, corFavorita: "preto"}
const person2 = {nome: "Roger Guedes", idade: 22, corFavorita: "branco"}
const person3 = {nome: "Renato Augusto", idade: 30, corFavorita: "cinza"}

//D)
enum coresArcoIris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

const person4 = {nome: "Cássio", idade: 33, corFavorita: coresArcoIris.AZUL}

console.table(person4);

