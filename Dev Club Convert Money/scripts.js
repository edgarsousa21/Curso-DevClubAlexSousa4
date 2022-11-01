const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")
const dolar = 5.2
const euro = 5.9
const bitcoin = 0.0000095
const convertValues = () => {
    const inputReals = document.getElementById("input-real").value
    const realTextValue = document.getElementById('real-text-value')
    const currencyTextValue = document.getElementById('currency-text-value')
    

    realTextValue.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReals)

    if (select.value === 'US$ Dolar Americano') {
        currencyTextValue.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReals / dolar)
    }

    if (select.value === '€ Euro') {
        currencyTextValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReals / euro)
    }
    if (select.value === 'BitCoin') {
        currencyTextValue.innerHTML = new Intl.NumberFormat('de-DE',
         { style: 'currency', currency: 'XBT' })
            .format(inputReals / bitcoin)
    }
}
changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.getElementById("currency-image")
    if (select.value === 'US$ Dolar Americano') {
        currencyName.innerHTML = "Dolar Americano"
        currencyImage.src = "./assets/Estados-Unidos.png"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }
    if (select.value === 'BitCoin') {
        currencyName.innerHTML = "BitCoin"
        currencyImage.src = "./assets/BitCoin.png"
    }
    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener("change", changeCurrency)