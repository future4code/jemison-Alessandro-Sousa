// A)

type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// B) para converter o arquivo .ts para .js basta criar um scritp no package.json com o comando 'tsc && node' + 'o caminho
// e o nome do arquivo'

// C) Sim. O que mudaria seria na hora de escrever o caminho o arquivo.

// D) para transpilar vários arquivos de uma vez basta rodar o comando 'tsc' seguido dos nomes dos arquivos separados 
// por um espaço simples
