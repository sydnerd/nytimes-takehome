import './ArticleList.css'
import ArticleCard from '../ArticleCard/ArticleCard'

const ArticleList = ({articles}) => {
  const articleTitles = articles.map(article => {
    return (
      <ArticleCard 
        key={article.id}
        title={article.title}
        image={article.multimedia[0]}
        section={article.section}
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