console.log("exercicio 4");

const primeiraLista = [
	{
		nome: "Banana"
	},
	{
		nome: "Laranja"
	}
]

const segundaLista= [
	{
		nome: "Laranja"
	},
	{
		nome: "Cebola"
	}
]

// 1. unir as duas listas e guardá-la em uma variável
// 2. cria a lista de resultado começando vazia
// 3. itera a lista unida
// 3.1 a cada iteração, procurar na lista de resultado pelo item iterado
// 3.2 o item já existe?
// 3.2.1 se sim, não faça nada
// 3.2.2 se não, adicione-o na lista de resultado
// 4. retorne o resultado

const geraItensUnicos = (arr1, arr2) => {
    const arrConcat = arr1.concat(arr2)
    const resultado = []

    for (let itemConcat of arrConcat) {
        const itemResultado = resultado.find((item) => item.nome === itemConcat.nome)

        if(!itemResultado) {
            resultado.push(itemConcat)
        }
    }

    return resultado
}

console.log(geraItensUnicos(primeiraLista, segundaLista))



