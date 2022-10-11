console.log("Exercício 1")

//A)utilizamos o comando process.argv, mais especificamente o process.argv[2], já que os parâmetros de índice 0 e 1 são fixos.

//B) e C)
let nome = process.argv[2]
let idade = Number(process.argv[3])


console.log(`Olá ${nome}! Você tem ${idade} anos. Em 7 anos vc terá ${idade+7}`)