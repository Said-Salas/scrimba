import reactLogo from '../assets/react.png'

export const Header = () => (
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

