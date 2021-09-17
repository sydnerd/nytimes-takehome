import './Details.css'
import { Link } from 'react-router-dom'

const Details = ({ foundArticle, media }) => {
  return (
    <main className='details'>
      <Link to ='/'><button className='home-btn'>home</button> </Link>
      <section className='details-container'>
      <img className='detail-img'alt={foundArticle.title} src={media[0].url} />
      <h2>{foundArticle.title}</h2>
      <p>{foundArticle.byline}</p>
      <p><em>{foundArticle.abstract}</em></p>
      <a className='read-more-btn' href={foundArticle.url}>Read more!</a>
    </section>
    </main>
   
  )
}

export default Details 