const companies = [
    { name: 'samsung', marketvalue: 50, foundedOn: 1938 },
    { name: 'microsoft', marketvalue: 415, foundedOn: 1975 },
    { name: 'intel', marketvalue: 117, foundedOn: 1968 },
    { name: 'facebook', marketvalue: 383, foundedOn: 2004 },
    { name: 'spotify', marketvalue: 30, foundedOn: 2006 },
    { name: 'apple', marketvalue: 845, foundedOn: 1976 }]

    const add10PercentMarket = companies => {
        companies.marketvalue = companies.marketvalue + companies.marketvalue / 10
        return companies
    }
    const oldCompanies =  companies => companies.foundedOn <= 2000

    const allOldCompanies = (acc, current) => acc + current.marketvalue

const firstPercentage = companies.map(add10PercentMarket).filter(oldCompanies).reduce(allOldCompanies,0)

console.log(firstPercentage)