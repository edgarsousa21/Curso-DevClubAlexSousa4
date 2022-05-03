// [X] Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES
// Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.

const numberOne = 1
const numberTwo = 1
const numberThree = 1
const numberFour = 1

if (numberOne % 2 ===0 && numberTwo % 2 ===0 && numberThree % 2 ===0 && numberFour % 2 ===0 ){
    console.log ("Todos os números são pares")
} else if (numberOne % 2 !==0 && numberTwo % 2 !==0 && numberThree % 2 !==0 && numberFour % 2 !==0){
    console.log ("Todos os números são impares.")
} else (
    console.log ("Há números pares e impares")
)