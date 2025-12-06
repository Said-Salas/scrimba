import { createRoot } from "react-dom/client"
import reactLogo from './assets/react.png'

const root = createRoot(document.getElementById("root"))

const Header = () => (
	<header className="header-el">
		<img src={reactLogo} alt="React logo" className="react-logo"/>
		<nav>
			<ul className="nav-list">
				<li>Pricing</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</nav>
	</header>
)

const Main = () => (
	<main>
		<h1>
			Fun facts about React
		</h1>
		<ol>
			<li>React is a popular library, so I will be able to
			fit in with all the coolest devs out there! 😎</li>
			<li>I am more likely to get a job as a front end developer
			if I know React</li>
		</ol>
	</main>
)

const Footer = () => (
	<footer>
		© 2025 Said Salas Development. All rights reserved.
	</footer>
)

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


