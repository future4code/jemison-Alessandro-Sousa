```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
 contador = 0
 
 for (let i=0; i<arrayDeNumeros.length; i++) {
   if (numeroEscolhido===arrayDeNumeros[i]) {
     contador += 1
   } 
 }
 if (contador===0) {
   return "Número não encontrado"
 }
return `O número ${numeroEscolhido} aparece ${contador}x`
}
```