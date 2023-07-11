import logo from '../assets/logo.svg'
import menuIcon from '../assets/icon-hamburger.svg'
import closeIcon from '../assets/icon-close.svg'
import menuImg from '../assets/bg-pattern-about-1-mobile-nav-1.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)


  return (
    <header>
      <img className='logo' src={logo} alt="myteam logo" />
      {menuOpen && <div className='menu-overlay'></div>}
      <nav className={menuOpen ? 'open' : ''}>
        <img className='menu-close-btn' src={closeIcon} alt="close menu button" onClick={() => setMenuOpen(false)}/>
        <Link to='/' onClick={() => setMenuOpen(false)}>home</Link>
        <Link to='/about'onClick={() => setMenuOpen(false)}>about</Link>
        <Link className='header-contact-btn' to='/contact'onClick={() => setMenuOpen(false)}>
          <button className='btn-light'>contact us</button>
        </Link>
        {menuOpen && <img className='menu-img' src={menuImg} /> }
      </nav>
      <img className='menu-btn' src={menuIcon} alt="menu button" onClick={() => setMenuOpen(true)}/>
    </header>
  )
}
