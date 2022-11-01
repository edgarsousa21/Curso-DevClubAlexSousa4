/*
    REDUCE 
    -  Retorna um valor (  pode ser um novo array, objeto, string, number...)
    - Aceita 4 parametros
        - acumulador
        - valor atual
        - index 
        - array completo 
*/

const list = [1,2,3,4,5];

const sum =  list.reduce ((acc, current) => {
    return acc /*acumula numero a cada passagem */+ current /*pega valor por valor*/
}, 0 /*valor inicial do acumulador*/)

console.log (sum)