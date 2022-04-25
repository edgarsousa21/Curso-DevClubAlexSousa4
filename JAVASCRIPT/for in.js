// ESTRUTURAS DE REPETIÇÃO - FOR IN 

const alunos = {
    Name: "Alex",
    Age: 22,
    genre: "Male"
}

for (let property in alunos) {
console.log (`${property}:${alunos[property]}`)

}