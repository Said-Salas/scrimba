import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const root = createRoot(document.getElementById('root'))
const reactEl = createElement("h1", null, 'Hello, React!')
console.log(reactEl)
root.render(
    reactEl
)