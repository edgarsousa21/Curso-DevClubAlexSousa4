// MAP
//  -Cria um novo array,apartir do array percorrido(array original)
//    Cria um novo array,com a mesma quantidade de itens do array original
//      -Aceita 3 parâmetros
//           - item do array
//           -index
//           -array completo

const numbers = [1, 2, 3, 4]
const students = [
    { name: "Rodolfo", age: 25 },
    { name: "Maria", age: 43 },
    { name: "João", age: 21 },
    { name: "Bruno", age: 43 },
    { name: "Carla", age: 13 },
    { name: "Ana", age: 20 },
    { name: "Julio", age: 26 },
];
//qualquer  nome aqui --------------->
const newArray = numbers.map((number) => {
    return number * 45 // não esquecer de retornar SEMPRE
})

console.log(newArray)

const newStudents = students.map((student) => {
    const newStudent = {
        name: student.name + ' de Sousa ',
        age: student.age + 4
    }
    return newStudent
})

console.log(newStudents)

const double = number => number * 2
const triple = number => number * 3
const quad = number => number*4
const division = number => number / 2

const NewArray2 = numbers.map (double).map(triple).map(quad).map(division)

console.log(NewArray2)