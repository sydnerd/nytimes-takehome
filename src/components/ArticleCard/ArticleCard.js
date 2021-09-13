import './ArticleCard.css'

const ArticleCard = ({title, image, section}) => {
  return (
    <section className='article-card'>
      <div className='article-header'>
        <h1 className='article-title'>{title}</h1>
        <p className='article-section'>Section: {section}</p>
      </div>
      <img className='article-image' src={image.url}/>
      <button className='info-button'>Click for more info</button>
    </section>
  )
}

export default ArticleCard;