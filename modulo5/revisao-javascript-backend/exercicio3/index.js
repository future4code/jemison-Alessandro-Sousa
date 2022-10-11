console.log("exercicio 3");

const accounts = [
	{
		email: "astrodev@labenu.com",
		password: "abc123"
	},
	{
		email: "bananinha@gmail.com",
		password: "bananinha"
	}
]

const login = (email, password) => {
	if (typeof email !== "string") {
		return "Erro. Parâmetro inválido (email)"
	}

	if (typeof password !== "string") {
		return "Erro. Parâmetro inválido (password)"
	}

	if (!email.includes("@")) {
		return "Erro. email inválido."
	}

	if (password.length < 6) {
		return "Erro. password deve possuir no mínimo 6 caracteres."
	}

	for (let account of accounts) {
		if (account.email === email) {
			if (account.password === password) {
				return "login bem-sucedido."
			}
		}
	}

	return "email ou password incorretos."
}

console.log(login("astrodev@labenu.com", "abc123"))
console.log(login("bananinha@gmail.com", "banana"))
console.log(login("astrodev.labenu.com", "abc123"))
console.log(login("bananinha@gmail.com", "ba"))

