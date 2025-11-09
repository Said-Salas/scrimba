const inputEl = document.getElementById('investment-amount')
inputEl.addEventListener('input', function() {
    if (this.value < 0) this.value = 0
})

const priceValue =  document.getElementById('price-display')
priceValue.textContent = JSON.parse(localStorage.getItem('lastPrice'))

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
        priceValue.textContent = pricePerOunce
        console.log(data)
        return priceValue
    } catch (err) {
        console.error('Error fetching gold price:', err)
        return null
    }
}

const investBtn = document.getElementById('invest-btn')
const modalEl = document.querySelector('dialog.outputs')

investBtn.addEventListener('click', async (e) => {
    e.preventDefault()
    modalEl.showModal()
    modalEl.querySelector('button').addEventListener('click', () => modalEl.close())

})

setInterval(() => {
   return fetchGoldPrice()
}, 500000)

