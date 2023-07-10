import logo from '../assets/logo.svg'
import menuIcon from '../assets/icon-hamburger.svg'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <img className='logo' src={logo} alt="myteam logo" />
      <nav>
        <Link to='/'>home</Link>
        <Link to='/about'>about</Link>
        <Link className='header-contact-btn' to='/contact'><button className='btn-light'>contact us</button></Link>
      </nav>
      <img className='menu-btn' src={menuIcon} alt="menu button" />
    </header>
  )
}
