import homeImg6 from '../assets/bg-pattern-home-6-about-5.svg'
import { Link } from 'react-router-dom'

export default function GetStarted() {
  return (
    <section className='get-started'>
            <div className="section-content">
                <img className='home-img-6' src={homeImg6} />
                <h2>Ready to get started?</h2>
                <Link className='header-contact-btn' to='/contact'><button className='btn-dark'>contact us</button></Link>
            </div>
        </section>
  )
}
