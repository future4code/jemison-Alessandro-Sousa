//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO-----------------------------------------------------------------------
//1ª QUESTÃO--------------------------------------------------------------------------------------------------
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

//A)
//Será impresso um novo array, onde cada elemento terá o array correspondente ao index e terá 
//também todos os elementos do array original.

//2ª QUESTÃO------------------------------------------------------------------------------------------------
//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

//A)
//Será impresso um novo array apenas com a categoria "nomes" dos objetos inclusos no array original.
//SAÍDA: ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']

//3ª QUESTÃO-------------------------------------------------------------------------------------------------
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

//A)
//A saída será um novo array contendo os itens(objetos) que não possuem o apelido "Chijo".

//EXERCÍCIOS DE ESCRITA DE CÓDIGO------------------------------------------------------------------------------
//1ª QUESTÃO---------------------------------------------------------------------------------------------------
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

 //A)
//  const listaDeDogs = pets.map ((pet) => {
//      return pet.nome
//  })
//  console.log (listaDeDogs)

//B)
//  const cachorroSalsicha = pets.filter ((pet) => {
//      return pet.raca === "Salsicha"
//  })
//  console.log (cachorroSalsicha)

//C)
// const poodles = pets.filter ((pet) => {
//     return pet.raca === "Poodle"
// })

// const nomePoodles = poodles.map ((poodle) => {
//     return poodle.nome
// })

// const cupom = nomePoodles.map ((poodle) => {
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle}`
// })

// console.log (cupom)

//2ª QUESTÃO---------------------------------------------------------------------------------------------------
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

 //A)
//  const nomesProdutos = produtos.map ((produto) => {
//      return produto.nome
//  })
//  console.log (nomesProdutos)

//B) 

// const nomePreco = produtos.map ((produto) => {
//     return {nome: produto.nome, preco: (produto.preco*0.95).toFixed(2)}
// })
// console.log(nomePreco)


//C)
// const bebidas = produtos.filter ((produto) => {
//     return produto.categoria === "Bebidas"
// })
// console.log (bebidas)

//D)
// const nomeYpe = produtos.filter ((produto) => {
//     return produto.nome.includes("Ypê")
// })
// console.log (nomeYpe)

//E)

// const nomeYpe = produtos.filter ((produto) => {
//     return produto.nome.includes("Ypê")
// })

// const compreYpe = nomeYpe.map ((produto) => {
//     return (`Compre ${produto.nome} por R$ ${produto.preco}`)
// })
// console.log (compreYpe)

//DESAFIO-----------------------------------------------------------------------------------------------------
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 //A)
//  const nomePokemons = pokemons.map ((pokemon) => {
//      return pokemon.nome
//  })

//  console.log (nomePokemons.sort())

//B)
const tipos = pokemons.map ((pokemon) => {
    return pokemon.tipo
})
const tiposUnicos = new Set (tipos)
console.log (tiposUnicos)