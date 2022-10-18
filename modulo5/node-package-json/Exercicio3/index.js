console.log("Exercício 3")


let newTask = process.argv[2]

const tasks = ["Lavar louça", "Arrumar quarto"]

tasks.push(newTask)

console.table(tasks)



