const list = [{name: "Alex", vip: true},
    {name: "Jorge", vip: false},
    {name: "Ana", vip: false},
    {name: "Andressa", vip: true},
    {name: "leticia", vip: true},]


    const newList = list.map ( peopleList => {
            const newList = {
                name: peopleList.name,
                vip: peopleList.vip,
                sector: peopleList.vip ? 'Black' : 'Green'
            }
            return newList
        })

    console.log (newList)

    

    const students = [{name: "Alex", testGrade: 9},
    {name: "Jorge", testGrade: 6},
    {name: "Ana", testGrade: 4},
    {name: "Andressa", testGrade: 2},
    {name: "leticia", testGrade: 10},]

    const newArray2 = students.map (approvedList=> {
        let  approvedOrNot

        if (approvedList.testGrade >= 7) {
            approvedOrNot = 'Approved'
        } else {
            approvedOrNot = 'Disapproved'
        }
            const approvedListFinal = {
                Name: approvedList.name,
                finalResult : approvedOrNot
            }

        return approvedListFinal
    })

    console.log (newArray2)
