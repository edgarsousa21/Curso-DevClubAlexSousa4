// [X] Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior


const number = (number1, number2) => {
    if (number1 > number2) console.log("O primeiro é o maior")
    else console.log("O segundo é o maior")
}

number(2, 5)