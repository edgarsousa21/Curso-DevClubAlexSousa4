// PEGUEI DA AULA
const calculate = (number1, number2, operation) => {

let result

    switch (operation) {
        case "+":
            
            break;

        case "-":
            result = number1 - number2
            break;

        case "*":
            result = number1* number2
            break;

        case "/":
            result = number1 / number2
            break;

        default: result = number1 + number2
            break;
    }
    return result
}

console.log (calculate(6,9,'/'))

// FEITO SOLO

const calculator = (numberOne, number2, operation) => {
    let result

switch ("operation") {
    case "-":
        result = number1 - number2
        break;

        case "+":
            result = number1 + number2
        break;

        case "/":
            result = number1 / number2
        break;

        case "*":
            result = number1 * number2
        break;
    default:"a conta não existeeeeeeee"
        break;
}
return result

}

console.log (calculate(6555,8798,'*'))