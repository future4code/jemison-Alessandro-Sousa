

const func1 = (nome:string, dataNascimento:string) => {
    const [dia,mes,ano] = dataNascimento.split("/")

    const frase = `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}` 

    return frase 
}

console.log(func1("Alessandro","15/06/1995"))