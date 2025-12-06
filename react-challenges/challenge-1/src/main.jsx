import { createRoot } from "react-dom/client"
import reactLogo from './assets/react.png'

const root = createRoot(document.getElementById("root"))

const Header = () => (
	<header>
		<img src={reactLogo} alt="React logo"/>
	</header>
)

function Page() {
    return (
		<>
			<Header />
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
			<footer>
				© 2025 Said Salas Development. All rights reserved.
			</footer>
		</>
    )
}

root.render(
    <Page />
)

/** Mini Challenge:
 * 
 * Move the `header` element from the Page component into 
 * its own component called "Header"
 * 
 * Then render an instance of the Header component inside
 * the Page component where the `header` used to be.
 */
