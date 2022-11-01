
const company = [{ name: "facebook", value: 500},
{ name: "google", value: 800  },
{ name: "netflix", value: 230 }]

const value = company.reduce ( (acc, current) => acc + current.value, 0)

console.log (value)