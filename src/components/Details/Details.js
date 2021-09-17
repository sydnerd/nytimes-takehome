import './Details.css'
import { Link } from 'react-router-dom'

const Details = ({ foundArticle, media }) => {
  return (
    <section className='details-container'>
      <Link to ='/'><button className='home-btn'>home</button> </Link>
      <img className='detail-img'alt={foundArticle.title} src={media[0].url} />
      <h2>{foundArticle.title}</h2>
      <p>{foundArticle.byline}</p>
      <p><em>{foundArticle.abstract}</em></p>
      <a className='read-more-btn' href={foundArticle.url}>Read more!</a>
    </section>
  )
}

export default Details 