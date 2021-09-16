import './ArticleList.css'
import ArticleCard from '../ArticleCard/ArticleCard'

const ArticleList = ({articles}) => {
  const articleTitles = articles.map(article => {
    console.log('article in article list', article)
    return (
      <ArticleCard 
        key={article.title}
        id={article.id}
        title={article.title}
        image={article.multimedia}
        section={article.section}
        article = {article}
      />
    )
  })
  return (
    <section className='article-list-section'>
      {articleTitles}
    </section>
  )
}

export default ArticleList;