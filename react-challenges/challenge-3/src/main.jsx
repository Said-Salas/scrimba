import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'

createRoot(document.getElementById('root')).render(
  <App />
)
/**
 * Challenge:
 * 
 * - Create an App component in a separate file.
 *   Import it here and render it
 * - Create a "components" folder and a Header component.
 *   Render the Header inside the App component.
 * - Follow the Travel Journal design to build the Header
 *   for our page.
 */