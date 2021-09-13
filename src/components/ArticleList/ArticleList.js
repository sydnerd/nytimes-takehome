import './ArticleList.css'
import ArticleCard from '../ArticleCard/ArticleCard'

const ArticleList = ({articles}) => {
  const articleTitles = articles.map(article => {
    return (
      <ArticleCard 
        key={article.title}
        title={article.title}
        image={article.multimedia[0]}
        section={article.section}
      />
    )
  })
  return (
    <section>
      <h1>News</h1>
      {articleTitles}
    </section>
  )
}

export default ArticleList;