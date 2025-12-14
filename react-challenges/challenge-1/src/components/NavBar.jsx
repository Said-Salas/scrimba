import reactLogo from '../assets/react.png'

export const NavBar = () => {
	return (
		<header className='header-el'>
			<nav className='nav-el'>
				<img src={reactLogo} alt='React logo' className='react-logo'/>
				<h1>ReactFacts</h1>
			</nav>
		</header>
	)	
}

/**
 * Challenge: complete the Navbar to match the Figma design
 * 
 * Hints:
 * - for semantic HTML purposes, the Navbar should render
 *   a <header> with a <nav> nested inside. The image and "ReactFacts"
 *   text elements can both be rendered as children inside the <nav>
 * - reference the Figma design for the most accurate info about
 *   colors, sizes, font information, etc.
 */
