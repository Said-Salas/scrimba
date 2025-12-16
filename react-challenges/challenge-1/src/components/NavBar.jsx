import reactLogo from '../assets/react.png'

export const NavBar = () => {
	return (
		<header className='header-el'>
			<nav className='nav-el'>
				<img src={reactLogo} alt='React logo' className='react-logo'/>
				<span>ReactFacts</span>
			</nav>
		</header>
	)	
}

