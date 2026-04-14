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
          <Link to='/about' className='btn-c-one'>About</Link>
          <Link to='/vans' className='btn-c-one'>Vans</Link>
        </div>
      </nav>
      <Outlet />
      <footer>
        <p>Ⓒ 2022 #VANLIFE</p>
      </footer>
    </>
  );
}
