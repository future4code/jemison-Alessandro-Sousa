console.log("exercício 2");

const clientes = [
	{ id: 1, nome: "Fulano" },
	{ id: 2, nome: "Ciclano" },
	{ id: 3, nome: "Beltrano" },
	{ id: 4, nome: "Fulana" }
]

const cadastraCliente = (novoCliente) => {
    if (typeof novoCliente.id !== "number") {
        return "Erro. id inválido, deve ser um número"
    }

    if (typeof novoCliente.nome !== "string") {
        return "Erro. nome inválido, deve ser uma string"
    }

    for (let cliente of clientes ) {
        if (cliente.id === novoCliente.id) {
            return "Erro. Parâmetro inválido ('id já existe')."
        }
    }

    clientes.push(novoCliente)
    return clientes
}

console.log(cadastraCliente({ id: 5, nome: "Fulano" }))
console.log(cadastraCliente({ id: 1, nome: "Ciclana" }))


