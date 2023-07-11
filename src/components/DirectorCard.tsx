import {useState} from 'react'
import crossIcon from '../assets/icon-cross.svg'
import closeIcon from '../assets/icon-close.svg'
import twitterLogo from '../assets/icon-twitter.svg'
import linkedinLogo from '../assets/icon-linkedin.svg'

type DirectorCardProps = {
    imgUrl: string,
    name: string,
    jobTitle: string,
    quote: string
}

export default function DirectorCard({imgUrl, name, jobTitle, quote} : DirectorCardProps) {
    const [showFront, setShowFront] = useState(true)

    // const btnStyle = {
    //     backgroundColor: showFront ? '#F67E7E' : '#79C8C7'
    // }

    const cardStyle = {
        backgroundColor: showFront ? '#012F34' : '#002529'
    }

    function toggle() {
        setShowFront(prev => !prev)
    }

  return (
    <div className="director-card" style={cardStyle}>
        {showFront && <img className='avatar' src={`/${imgUrl}`} alt={`avatar for ${name}`} />}
        <h3 className="blue">{name}</h3>
        {showFront && <p className="job-title">{jobTitle}</p>}
        {!showFront && 
            <>
                <p>{quote}</p>
                <div className='director-social-media'>
                    <img src={twitterLogo} alt="twitter logo" />
                    <img src={linkedinLogo} alt="linkedin logo" />
                </div>
            </>}
        <div className={`director-card-btn ${showFront && 'director-card-front'}`} onClick={toggle}>
            <img src={showFront ? crossIcon : closeIcon}  />
        </div>
    </div>
  )
}
