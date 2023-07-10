import homeImg1 from '../assets/bg-pattern-home-1.svg'
import homeImg2 from '../assets/bg-pattern-home-2.svg'
import homeImg3 from '../assets/bg-pattern-home-3.svg'
import homeImg4 from '../assets/bg-pattern-home-4-about-3.svg'
import homeImg5 from '../assets/bg-pattern-home-5.svg'
import homeImg6 from '../assets/bg-pattern-home-6-about-5.svg'
import personIcon from '../assets/icon-person.svg'
import cogIcon from '../assets/icon-cog.svg'
import chartIcon from '../assets/icon-chart.svg'
import { Link } from 'react-router-dom'
import Quote from '../components/Quote'

export default function Home() {
  return (
    <div className='home'>
        <section className='home-section-1'>
            <img className='home-img-1' src={homeImg1} />
            <div className='section-content'>
                <h1 className='main-title'>Find the <br />best <span className='pink'>talent</span></h1>
                <p className='large-p'>Finding the right people and building high performing teams can be hard. 
                    Most companies aren't tapping into the abundance of global talent. 
                    We're about to change that.</p>
            </div>
            <img className='home-img-2' src={homeImg2} />
        </section>

        <section className='home-section-2'>
            <img className='home-img-3' src={homeImg3} />
            <div className="section-content">
                <h2>Build & manage distributed teams like no one else.</h2>

                <div>
                    <div className='home-section-2-details'>
                        <img src={personIcon} alt="person icon" />
                        <h3>Experienced Individuals</h3>
                        <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                    </div>

                    <div className='home-section-2-details'>
                        <img src={cogIcon} alt="cog icon" />
                        <h3>Easy to Implement</h3>
                        <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                    </div>
                    
                    <div className='home-section-2-details'>
                        <img src={chartIcon} alt="chart icon" />
                        <h3>Enhanced Productivity</h3>
                        <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className='home-section-3'>
            <img className='home-img-4' src={homeImg4} />
            <img className='home-img-5' src={homeImg5} />
            <div className="section-content">
                <h2>Delivering real results for top companies. Some of our <span className='blue'>success stories.</span></h2>
                <div className='quotes'>
                    <Quote 
                        quote={`“The team perfectly fit the specialized skill set required. 
                                They focused on the most essential features helping us launch the 
                                platform eight months faster than planned.”`} 
                        name='Kady Baker' 
                        jobTitle='Product Manager at Bookmark' 
                        imgUrl='avatar-kady.jpg' 
                    />
                    <Quote 
                        quote={`“We needed to automate our entire onboarding process. 
                                The team came in and built out the whole journey. 
                                Since going live, user retention has gone through the roof!”`} 
                        name='Aiysha Reese' 
                        jobTitle='Founder of Manage' 
                        imgUrl='avatar-aiysha.jpg' 
                    />
                    <Quote 
                        quote={`“Amazing. Our team helped us build an app that delivered 
                                a new experience for hiring a physio. The launch was an 
                                instant success with 100k downloads in the first month.”`} 
                        name='Arthur Clarke' 
                        jobTitle='Co-founder of MyPhysio' 
                        imgUrl='avatar-arthur.jpg' 
                    />
                </div>
            </div>
        </section>

        <section className='home-section-4'>
            <div className="section-content">
                <img className='home-img-6' src={homeImg6} />
                <h2>Ready to get started?</h2>
                <Link className='header-contact-btn' to='/contact'><button className='btn-dark'>contact us</button></Link>
            </div>
        </section>
    </div>
  )
}
