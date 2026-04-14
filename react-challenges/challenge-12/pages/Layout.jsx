import {Link, Outlet} from 'react-router-dom'
import logo from '../assets/logog.png'

export default function Layout() {
  return (
    <>
      <nav className='menu'>
        <Link to='/'>
          <img src={logo} alt='van life logo'/>
        </Link>
        <div className='nav-links'>
          <Link to='/about' className='btn-c-two'>About</Link>
          <Link to='/vans' className='btn-c-two'>Vans</Link>
        </div>
      </nav>
      <Outlet />
      <footer>
        <p>Ⓒ 2026 #VANLIFE</p>
      </footer>
    </>
  );
}
