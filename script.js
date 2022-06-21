const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')
    

const dolar = 5.2
const euro = 5.9
const bitcoin = 109094

const convertValues = () =>{
    const inputReal = document.getElementById('value-exchange').value
    const realValueText = document.getElementById('real-to-exchange-text')
    const currencyValueText = document.getElementById('dolar-exchange')
    
    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputReal)

    if (select.value === "US$ American Dolar"){
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputReal/dolar)
    }
    if (select.value === "€ Euro"){
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputReal/euro)
    }
    if (select.value === "Bitcoin")
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC"
    }).format(inputReal/bitcoin)

}
changeCurrency = () =>{
    const currencyName = document.getElementById("currency-name-exchange")
    const currencyImg = document.getElementById("currency-img")
    if (select.value === '€ Euro'){
        currencyName.innerHTML = "€ Euro" 
        currencyImg.src = "./assets/image/euro.png"
    }
    else if(select.value === 'US$ American Dolar'){
        currencyName.innerHTML = "US$ American Dolar"
        currencyImg.src = "./assets/image/usa.png"

    }
    else if(select.value === 'Bitcoin'){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/image/bit.png"
    }    
    convertValues()
}   

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)
