// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
    //DESAFIO: FAZER SEM REVERSE
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
    //DESAFIO: FAZER SEM SORT
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

    const numerosPares = array.filter ((numero) => {
        return numero % 2 === 0
    })    
    return numerosPares
    //DESAFIO: FAZER SEM FILTER
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numerosPares = array.filter ((numero) => {
        return numero % 2 === 0
    })    
  
    const numerosParesElevadosADois = numerosPares.map ((numero) => {
        return Math.pow (numero, 2)
    })

    return numerosParesElevadosADois
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max(...array)
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const maiorNumero = Math.max(num1, num2)
    const menorNumero = Math.min(num1, num2)
    const maiorDivisivelPorMenor = maiorNumero%menorNumero === 0
    const diferenca = maiorNumero-menorNumero

    return {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const numerosPares = []
    
    let numero = 0

    while (numerosPares.length<n) {
        if (numero % 2 === 0) {
        numerosPares.push(numero)
        }
    numero+=1
    }

return numerosPares   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
        return "Equilátero"
    } 
    
    else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        return "Escaleno"
    } 
    
    else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return "Isósceles"
    }
   
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a, b) => a - b) 

    let novoArray = [array[array.length-2], array[1]]

    return novoArray

}
// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}