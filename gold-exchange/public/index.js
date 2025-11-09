const inputEl = document.getElementById('investment-amount')
inputEl.addEventListener('input', function() {
    if (this.value < 0) this.value = 0
})

const priceValue =  document.getElementById('price-display')
let lastPrice = JSON.parse(localStorage.getItem('lastPrice'))
priceValue.textContent = lastPrice

const fetchGoldPrice = async () => {
    try {
        const res = await fetch('/api/gold-price', {method: 'GET'})
        if (!res.ok) {
            const text = await res.text()
            throw new Error(`Server ${res.status}: ${text}`)
        }
        const data = await res.json()
        const pricePerOunce = (1 / data.rates.XAU).toFixed(2)
        localStorage.setItem('lastPrice', JSON.stringify(pricePerOunce))
        lastPrice = JSON.parse(localStorage.getItem('lastPrice'))
        priceValue.textContent = lastPrice
        console.log(data)
        return priceValue
    } catch (err) {
        console.error('Error fetching gold price:', err)
        return null
    }
}

const investBtn = document.getElementById('invest-btn')
const modalEl = document.querySelector('dialog.outputs')
const investmentSummary =  document.getElementById('investment-summary')

investBtn.addEventListener('click', async (e) => {
    e.preventDefault()
    modalEl.showModal()
    
    const investmentAmount = document.getElementById('investment-amount').value
    investmentSummary.textContent = `You just bought ${(investmentAmount / lastPrice).toFixed(2)} (ozt) for £${investmentAmount}. You will receive documentation shortly`
    
    modalEl.querySelector('button').addEventListener('click', () => modalEl.close())
    return investmentSummary
})

setInterval(() => {
   return fetchGoldPrice()
}, 500000)

