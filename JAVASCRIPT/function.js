// FUNCTIONS


function learningAboutCodeClub(){
        console.log ("Mostra o que eu preciso sem executar varias e varias vezes")
}

learningAboutCodeClub () 
// ASSIM EU CHAMO UMA FUNÇÃO QUANTAS VEZES EU PRECISAR SEM FICAR COPIANDO CODIGO ALGUM OU REFAZENDO



// ARGUMENTS E PARAMATERS 

function sum (numberOne, numberTwo) {

    console.log (numberOne + numberTwo)
// PARA A FUNCTION FUNCIONAR, ASSIM QUE ENVIAR O COMANDO, PRECISAMOS DE 2 PARAMETROS, NO CASO O 2,3, QUE SERÃO SUBSTITUIDOS PELO "numberOne e numberTwo"
}

sum (2,3)
sum (0, 4)

const numberOne = 10
const numberTwo = 20
// POSSO TAMBÉM UTILIZAR FUNCÕES COMO PARAMETROS
sum (numberOne, numberTwo)


// RETURN FUNCTION 


function sum (numberOne, numberTwo) { //PODE SER UTILIZADO COMO UMA CONSTANTE EX: (CONST SUM = FUNCTION ())

    return (numberOne + numberTwo)
}

console.log (`O primeiro número é ${numberOne}`)
console.log (`O segundo número é ${numberTwo}`)
console.log (`O resultado é ${sum (numberOne, numberTwo)}`)

// RETURN COMO JA DIZ O NOME RETORNA O QUE ESTÁ SOLICITADO DENTRO DA FUNCTION PARA ALGO QUE ESTÁ FORA DA FUNCTION
// PARA PODER "TIRAR" UMA PARTE DA FUNCTION PARA ALGUEM QUE ESTÁ SOLICITANDO FORA 


// ARROW FUNCTION 

const sum = (number1, number2) => number1 + number2
// automaticamente o return está incluso nessa arrow function
// caso ponha colchetes entre "number1 e number2" o return não é incluido automaticamente
// para se criar uma arrow function se precisar usar const ao inves de function


