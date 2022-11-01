//FILTER

//Cria um novo array  apenas com os elementos filtrados
//Aceita 3 parametros 
/* - item do array
    - index
    - array completo */

//DESAFIO

const list = [20, 3, 234, 12, 17, 541, 6, 1000]

const newList = list.filter(lists => {
    if (lists % 2 !== 0) return false
    if (lists % 5 !== 0) return false
    return true
})

//const newList = list.filter (lists => lists % 2 !== 0 && 5 !== 0)




const company = [{ name: "facebook", value: 500},
{ name: "google", value: 800  },
{ name: "netflix", value: 230 }]

const newCompany = company.filter ( companyes => {
    if (companyes.value >= 500) return true
    else return false
})

console.log(newCompany)