import homeImg1 from '../assets/bg-pattern-home-1.svg'
import homeImg2 from '../assets/bg-pattern-home-2.svg'
import homeImg3 from '../assets/bg-pattern-home-3.svg'
import personIcon from '../assets/icon-person.svg'
import cogIcon from '../assets/icon-cog.svg'
import chartIcon from '../assets/icon-chart.svg'

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

                <img src={personIcon} alt="person icon" />
                <h3>Experienced Individuals</h3>
                <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>

                <img src={cogIcon} alt="cog icon" />
                <h3>Easy to Implement</h3>
                <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                
                <img src={chartIcon} alt="chart icon" />
                <h3>Enhanced Productivity</h3>
                <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
            </div>
        </section>
    </div>
  )
}
