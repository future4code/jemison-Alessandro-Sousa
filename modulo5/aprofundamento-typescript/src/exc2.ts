type Estatistica={
	maior:number,
	menor:number,
	media:number
}
function obterEstatisticas(numeros: any): Estatistica{

    const numerosOrdenados: any = numeros.sort(
        (a:any, b:any) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: any = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.table(obterEstatisticas([4,6,5]))

// A) ENTRADA: array com 3 números      SAÍDA: array com indicação do maior e do menor número e com a média dos 3 valores


// B) numeroOrdenados (ANY), soma (NUMBER) e estatisticas (ANY)

type amostraDeDados = {
    numeros: number,
    obterEstatisticas: any
}