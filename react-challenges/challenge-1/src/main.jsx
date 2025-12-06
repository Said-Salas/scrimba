import { createRoot } from "react-dom/client"
import reactLogo from './assets/react.png'

const root = createRoot(document.getElementById("root"))

const Header = () => (
	<header>
		<img src={reactLogo} alt="React logo"/>
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

/** Challenge: 
 * Move the `main` element into its own component called "MainContent" 
 * and render that component inside the Page component.
 * 
 * Do the same with the `footer` element, moving it into a new
 * component called "Footer"
*/

