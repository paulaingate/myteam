import logo from '../assets/logo.svg'
import facebook from '../assets/icon-facebook.svg'
import pinterest from '../assets/icon-pinterest.svg'
import twitter from '../assets/icon-twitter.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className='footer-content'>
        <img className='logo' src={logo} alt="myteam logo" />
        <div className='footer-links'>
          <Link to='/'>home</Link>
          <Link to='/about'>about</Link>
        </div>
        <p>
          987 Hillcrest Lane<br/>Irvine, CA<br />California 92714<br />Call Us : 949-833-7432
        </p>
        <div className='social-media'>
          <img src={facebook} alt="facebook logo" />
          <img src={pinterest} alt="pinterest logo" />
          <img src={twitter} alt="twitter logo" />
        </div>
        <p>Copyright 2020. All Rights Reserved</p>
      </div>
    </footer>
  )
}
