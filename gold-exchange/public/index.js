const inputEl = document.getElementById('investment-amount')
inputEl.addEventListener('input', function() {
    if (this.value < 0) this.value = 0
})

const priceValue =  document.getElementById('price-display')

setInterval(async () => {
    try {
        const rawData = await fetch('/api/gold-price')
    const goldPrice = await rawData.json()
    console.log(goldPrice)
    } catch (err) {
        console.error('Error fetching gold price: ', err)
    }
}, 10000)

