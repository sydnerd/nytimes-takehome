import './ArticleList.css'
import ArticleCard from '../ArticleCard/ArticleCard'

const ArticleList = ({articles}) => {
  const articleTitles = articles.map(article => {
    return (
      <ArticleCard 
        key={article.title}
        title={article.title}
        image={article.multimedia[0]}
      />
    )
  })
  return (
    <section>
      {articleTitles}
    </section>
  )
}

export default ArticleList;