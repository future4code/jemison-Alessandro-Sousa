console.log("Exercício 2")

let operation = process.argv[2]
let num1 = Number(process.argv[3])
let num2 = Number(process.argv[4])

const calculate = (operation, num1, num2) => {
    if(operation === 'add') {
        return num1+num2
    } else if(operation === 'sub') {
        return num1-num2
    } else if(operation === 'mult') {
        return num1*num2
    } else if(operation === 'div') {
        return num1/num2
    }
}

console.log(calculate(operation, num1, num2))