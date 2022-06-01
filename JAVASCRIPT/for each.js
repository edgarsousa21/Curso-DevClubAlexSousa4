/*FOR
    EACH*/

// student - mostra item por item do array (pode ser qualquer nome que quiser)
// index - mostra a posição do array em numeros(pode ser qualquer nome)
// array - mostra o numero aonde a posição do array está 

const students = [
    { name: "Rodolfo", age: 25 },
    { name: "Maria", age: 43 },
    { name: "João", age: 21 },
    { name: "Bruno", age: 43 },
    { name: "Carla", age: 13 },
    { name: "Ana", age: 20 },
    { name: "Julio", age: 26 },
];

let allStudentsAge = 0
students.forEach((student, index) => {
    allStudentsAge += student.age
})

const averageAge = allStudentsAge / students.length

console.log(`A média da idade dos alunos é ${averageAge.toFixed(0)}`)