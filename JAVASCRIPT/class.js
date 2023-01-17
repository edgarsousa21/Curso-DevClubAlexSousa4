class Person {//sempre letra maiuscula
    constructor(name, age){
        console.log(`Hello, I'm ${name}`)
        this.name = name
        this.age = age
    }


    talk(){
        console.log(`Hello, my name is ${this.name} and i'm ${this.age} years old`)
    }
}
//consigo criar varias pessoas, independente da quantidade no mesmo molde acima, cada uma separada da outra

const newPerson = new Person("Alex", 23)
const newPerson2 = new Person("Maria", 63)
const newPerson3 = new Person("Julio", 43)

newPerson.talk()
newPerson2.talk()
newPerson3.talk()
