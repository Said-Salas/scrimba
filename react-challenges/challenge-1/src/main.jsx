import { createRoot } from "react-dom/client"
import Header from "./components/Header"
import Main from "./components/Main"
import { Footer } from "./components/Footer"

const root = createRoot(document.getElementById("root"))



function Page() {
    return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
    )
}

root.render(
    <Page />
)

/**
 * Challenge:
 * 
 * - Add a `nav` > `ul` > `li` (x3). The 3 items should say:
 *   "Pricing", "About", and "Contact"
 */


