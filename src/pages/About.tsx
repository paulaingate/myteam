import GetStarted from "../components/GetStarted";
import aboutImg1 from '../assets/bg-pattern-about-1-mobile-nav-1.svg'
import aboutImg2 from '../assets/bg-pattern-about-2-contact-1.svg'
import aboutImg3 from '../assets/bg-pattern-home-4-about-3.svg'
import aboutImg4 from '../assets/bg-pattern-about-4.svg'
import vergeLogo from '../assets/logo-the-verge.png'
import jakartaLogo from '../assets/logo-jakarta-post.png'
import guardianLogo from '../assets/logo-the-guardian.png'
import techLogo from '../assets/logo-tech-radar.png'
import gadgetsLogo from '../assets/logo-gadgets-now.png'
import DirectorCard from "../components/DirectorCard";


export default function About() {
  return (
    <div>
      <section className="about-section-1">
        <div className="section-content">
          <h1>About</h1>
          <p>We help companies build dynamic teams made up of top global talent. 
             Using our network of passionate professionals we drive innovation and 
             deliver incredible outcomes. Talented, diverse teams shape the best 
             products and experiences. We'll bring those teams to you.</p>
        </div>
        <img className="about-img-1" src={aboutImg1} />
      </section>

      <section className="about-section-2">
        <img className="about-img-2" src={aboutImg2} />
        <div className="section-content">
          <h2>Meet the directors</h2>
          <div className="directors">
            <DirectorCard 
              imgUrl="avatar-nikita.jpg" 
              name="Nikita Marks" 
              jobTitle="Founder & CEO" 
              quote={`“It always amazes me how much talent there is in every corner of the globe.”`}
            />
            <DirectorCard 
              imgUrl="avatar-christian.jpg" 
              name="Christian Duncan" 
              jobTitle="Co-founder & COO" 
              quote={`“Distributed teams required unique processes. You need to approach work in a new way.”`}
            />
            <DirectorCard 
              imgUrl="avatar-cruz.jpg" 
              name="Cruz Hamer" 
              jobTitle="Co-founder & CTO" 
              quote={`“Technology is at the forefront of enabling distributed teams. That's where we come in.”`}
            />
            <DirectorCard 
              imgUrl="avatar-drake.jpg" 
              name="Drake Heaton" 
              jobTitle="Business Development Lead" 
              quote={`“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”`}
            />
            <DirectorCard 
              imgUrl="avatar-griffin.jpg" 
              name="Griffin Wise" 
              jobTitle="Lead Marketing" 
              quote={`“Unique perspectives shape unique products, which is what you need to survive these days.”`}
            />
            <DirectorCard 
              imgUrl="avatar-aden.jpg" 
              name="Aden Allan" 
              jobTitle="Head of Talent" 
              quote={`“Empowered teams create truly amazing products. Set the north star and let them follow it.”`}
            />
          </div>
        </div>
        <img className="about-img-3" src={aboutImg3} />
      </section>

      <section className="about-section-3">
        <img className="about-img-4" src={aboutImg4} />
        <div className="section-content">
          <h2>Some of our clients</h2>
          <div className="clients">
            <img src={vergeLogo} alt="the verge logo" />
            <img src={jakartaLogo} alt="jakarta post logo" />
            <img src={guardianLogo} alt="the guardian logo" />
            <img src={techLogo} alt="techradar logo" />
            <img src={gadgetsLogo} alt="gadgets now logo" />
          </div>
        </div>
      </section>

      <GetStarted />
    </div>
  )
}
