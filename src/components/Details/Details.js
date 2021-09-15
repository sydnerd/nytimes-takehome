import './Details.css'

const Details = ({ foundArticle, media }) => {
  return (
    <section className='details-container'>
      <img className='detail-img'alt={foundArticle.title} src={media[0].url} />
      <h2>{foundArticle.title}</h2>
      <p>{foundArticle.byline}</p>
      <p><em>{foundArticle.abstract}</em></p>
    </section>
  )
}

export default Details 