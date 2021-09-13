import './ArticleCard.css'

const ArticleCard = ({title, image}) => {
  return (
    <section>
      <img src={image.url}/>
      <h1>{title}</h1>
    </section>
  )
}

export default ArticleCard;