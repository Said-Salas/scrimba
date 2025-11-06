const inputEl = document.getElementById('investment-amount')
inputEl.addEventListener('input', function() {
    if (this.value < 0) this.value = 0
})