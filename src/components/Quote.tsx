import quoteImg from '../assets/icon-quotes.svg'

type QuoteProps = {
    quote: string,
    name: string,
    jobTitle: string,
    imgUrl: string
}

export default function Quote({quote, name, jobTitle, imgUrl} : QuoteProps) {
  return (
    <div className="quote">
      <img className='quote-icon' src={quoteImg}/>
      <p>{quote}</p>
      <h3 className="blue">{name}</h3>
      <p className="job-title">{jobTitle}</p>
      <img className='avatar' src={`/${imgUrl}`} alt={`avatar for ${name}`} />
    </div>
  )
}
