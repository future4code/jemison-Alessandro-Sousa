console.log("Gerador de tabuada")

const geraTabuada = (num) => {
    if (typeof num !== "number") {
        return "Erro. Parâmetro inválido ('deve ser um número')."
    }

    if (num < 0 || num > 10) {
        return "Erro. Parâmetro inválido ('número precisa valer entre 1 e 10')."
    }

    const resultado = []

    for (let i = 0; i <= 10; i++) {
        resultado.push(`${num} x ${i} = ${num * i}`)
    }

    return resultado
}

console.log(geraTabuada(5))
console.log(geraTabuada("10"))
console.log(geraTabuada(50))