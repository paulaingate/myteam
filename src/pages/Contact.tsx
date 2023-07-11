import personIcon from '../assets/icon-person.svg'
import cogIcon from '../assets/icon-cog.svg'
import chartIcon from '../assets/icon-chart.svg'
import contactImg1 from '../assets/bg-pattern-about-2-contact-1.svg'
import contactImg2 from '../assets/bg-pattern-contact-2.svg'
import { useState } from 'react'

export default function Contact() {
  const [submitAttempted, setSubmitAttempted] = useState(false)

  const textAreaStyle = {
    width: '100%'
  }

  const inputRequired : React.ReactNode = <span className='input-required'>This is a required field</span>

  function onSubmit() {
    setSubmitAttempted(true)
  }

  return (
    <section className="contact-section">
      <div className="section-content">
        <div>
          <h1>Contact</h1>
          <h2 className="pink">Ask us about</h2>

          <div className="contact-ask">
            <img src={personIcon} alt="person icon" />
            <p>The quality of our talent network</p>
            <img src={cogIcon} alt="cog icon" />
            <p>Usage & implementation of our software</p>
            <img src={chartIcon} alt="chart icon" />
            <p>How we help drive innovation</p>
          </div>
        </div>
        <form className={submitAttempted ? `submit-attempted` : ''}>
          <input type="text" name='name' placeholder='Name' required/>
          {inputRequired}

          <input type="email" name='email' placeholder='Email Adress'required/>
          {inputRequired}

          <input type="text" name='company' placeholder='Company Name'/>

          <input type="text" name='title' placeholder='Title'/>

          <textarea name="message" placeholder='Message' style={textAreaStyle}></textarea>

          <button className='btn-filled' onClick={onSubmit}>submit</button>
        </form>
      </div>
      <img className='contact-img-1' src={contactImg1} />
      <img className='contact-img-2' src={contactImg2} />
    </section>
  )
}
