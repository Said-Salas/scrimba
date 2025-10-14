
document.addEventListener('DOMContentLoaded', () => {
    const colorPicked = document.getElementById('color-picker')
    const modePicked = document.getElementById('color-scheme-selector')
    const getSchemeBtn = document.getElementById('send-request')
    const container = document.createElement('section')
    const mainContainer = document.getElementById('main-container')

    const initialDisplay = () => {
        container.classList.add('scheme-container')
        for (let i = 0; i < 5; i++) {
            container.innerHTML += `<div class="single-color-container">
                                <div class="box"></div>
                                <p class="hex-value"></p>
                           </div>`
        }
        mainContainer.appendChild(container)
    }

    initialDisplay()

    const sendRequest = e => {
        e.preventDefault()
        container.innerHTML = ''
        fetch(`https://www.thecolorapi.com/scheme/?hex=${colorPicked.value.substring(1)}&mode=${modePicked.value}&count=5`, {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            if (mainContainer.contains(container)) {
                mainContainer.removeChild(container)
            }
            container.innerHTML = ''
            console.log(data)
            const arrayColors = data.colors
            arrayColors.map(color => {
                const singleContainer = document.createElement('div')
                const colorDisplay = document.createElement('div')
                const colorHex = document.createElement('p')
                singleContainer.classList.add('single-color-container')
                colorDisplay.classList.add('box')
                colorHex.classList.add('hex-value')
                colorDisplay.style.backgroundColor = color.hex.value
                colorHex.textContent = color.hex.value
                singleContainer.appendChild(colorDisplay)
                singleContainer.appendChild(colorHex)
                container.appendChild(singleContainer)
            })
            mainContainer.appendChild(container)
        })
        .catch(err =>
            console.error('Error ocurred: ', err)
        )
    }

    getSchemeBtn.addEventListener('click', sendRequest)

    function copyTextToClipboard(text) {
        if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
            return navigator.clipboard.writeText(text)
        }
        // fallback for older browsers
        return new Promise((resolve, reject) => {
            const textarea = document.createElement('textarea')
            textarea.value = text
            textarea.style.position = 'fixed'
            textarea.style.opacity = '0'
            document.body.appendChild(textarea)
            textarea.focus()
            textarea.select()
            try {
                const ok = document.execCommand('copy')
                document.body.removeChild(textarea)
                ok ? resolve() : reject(new Error('execCommand failed'))
            } catch (err) {
                document.body.removeChild(textarea)
                reject(err)
            }
        })
    }
    
    container.addEventListener('click', (event) => {
        const target = event.target
        // click on the hex text itself
        if (target.classList.contains('hex-value')) {
            const hex = target.textContent.trim()
            if (!hex) return
            copyTextToClipboard(hex)
                .then(() => {
                    if (typeof showToast === 'function') {
                        showToast(`${hex} copied`)
                    } else {
                        alert(`${hex} copied`) // temporary fallback
                    }
                })
                .catch(() => {
                    // final fallback
                    alert(`Could not copy ${hex}. Select and copy manually.`)
                })
        }
    })
})

