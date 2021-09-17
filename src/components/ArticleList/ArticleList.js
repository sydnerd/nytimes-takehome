import './ArticleList.css'
import ArticleCard from '../ArticleCard/ArticleCard'
import Search from '../Search/Search'

const ArticleList = ({articles, updateSection}) => {
  const articleTitles = articles.map(article => {
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
    <main>
      <nav>
        <h1 className='title'>News</h1>
        <Search updateSection={updateSection}/>
      </nav>
    <section className='article-list-section'>
      {articleTitles}
    </section>
    </main>  
  )
}

export default ArticleList;