/*

Object

propriedade: valor 
marca: LG
cor: preta
tamanho: 43

*/

const person = {
    name: "Alex", 
    age: 21,
    sex: "Male",
    height: 1.6,
    weight: 50,
    address: {
        street:"rua bla",
        number: 21,
        country: "Brasil",
        addons: "também posso por um objeto dentro de um objeto"
    }
}



console.log(person.address.number)