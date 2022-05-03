// [X] Crie 5 objetos nesse formato
// { nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
// Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.

const age = 18
const nationality = "Brazilian"



const person = {
    name: "Alex", 
    age: 21,
    sex: "Male",
    profession: "counter clerk",
    nationality: "Brazilian"
}

const person3 = {
    name: "fabiane",
    age: 13,
    sex: "Female",
    profession: "holistic therapist",
    nationality: "Brazilian"
}

const person4 = {
    name: "thiago",
    age: 35,
    sex: "Male",
    profession: "Driver",
    nationality: "Brazilian"
}

const person5 = {
    name: "Lucia",
    age: 41,
    sex: "Female",
    profession: "housewife",
    nationality: "Brazilian"
}


if (person.nationality >= nationality && person.age >= age) {
    console.log("Essa pessoa foi aprovada!")
} else {
    console.log("Essa pessoa NÃO foi aprovada!")
}