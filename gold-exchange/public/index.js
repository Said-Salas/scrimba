const inputEl = document.getElementById('investment-amount')
inputEl.addEventListener('input', function() {
    if (this.value < 0) this.value = 0
})

const priceValue =  document.getElementById('price-display')
let pricePerOunce = 0

const fetchGoldPrice = async () => {
    try {
        const res = await fetch('/api/gold-price', {method: 'GET'})
        if (!res.ok) {
            const text = await res.text()
            throw new Error(`Server ${res.status}: ${text}`)
        }
        const data = await res.json()
        if (!data?.rates?.XAU) throw new Error('Invalid API payload')
        pricePerOunce = (1 / data.rates.XAU).toFixed(2)
        priceValue.textContent = pricePerOunce
        console.log(data)
        return pricePerOunce
    } catch (err) {
        console.error('Error fetching gold price:', err)
        return null
    }
}

const investBtn = document.getElementById('invest-btn')
const modalEl = document.querySelector('dialog.outputs')
const investmentSummary =  document.getElementById('investment-summary')

 modalEl.querySelector('button').addEventListener('click', () => modalEl.close())

investBtn.addEventListener('click', async (e) => {
    e.preventDefault()
    
    const investmentAmount = Number(document.getElementById('investment-amount').value)
    investmentSummary.textContent = `You just bought ${(investmentAmount / pricePerOunce).toFixed(2)} (ozt) for £${investmentAmount}. You will receive documentation shortly`
    modalEl.showModal()

    return investmentSummary
})

fetchGoldPrice()
setInterval(fetchGoldPrice, 500000)

