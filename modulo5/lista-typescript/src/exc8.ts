const func8 = (palavra: string): number => {
    const quantidadeLetras = palavra.length;
  
    if (quantidadeLetras === 0) {
      return 1;
    }
  
    let resultado = 1;
  
    for (let i = quantidadeLetras; i > 0; i--) {
      resultado *= i;
    }
  
    return resultado;
  };
   console.log(func8("labenu"))