const inputEl = document.getElementById('investment-amount')
inputEl.addEventListener('input', function() {
    if (this.value < 0) this.value = 0
})

const fetchGoldPrice = async () => {
    try {
        const res = await fetch('/api/gold-price', {method: 'GET'})
        if (!res.ok) {
            const text = await res.text()
            throw new Error(`Server ${res.status}: ${text}`)
        }
        return await res.json()
    } catch (err) {
        console.error('Error fetching gold price:', err)
        return null
    }
}

const investBtn = document.getElementById('invest-btn')

investBtn.addEventListener('click', async (e) => {
    e.preventDefault()
    const data = await fetchGoldPrice()
    console.log(data)
})

const priceValue =  document.getElementById('price-display')
priceValue.textContent = await fetchGoldPrice()

setInterval(() => {
   fetchGoldPrice()
}, 200000)

