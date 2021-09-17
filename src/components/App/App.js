import './App.css';
import { getArticles } from '../../utils/apiCalls'
import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import ArticleList from '../ArticleList/ArticleList'
import Details from '../../components/Details/Details'

const App = () => {
  const [articles, setArticles] = useState([])
  const [sectionType, setSectionType] = useState('home')
  const [error, setError] = useState('')

  useEffect(()=> {
    let mounted = true
      getArticles(sectionType)
      .then(data =>{
        if(mounted) {
          let articlesWId = data.results.map((article, i) => {
            let id = i
            return { ...article, id: `${id}`}
          })
          setArticles(articlesWId)
        }
      })
      .catch(() => setError("We're experiencing server technical difficulties, please check back again later!"));
      return () => mounted = false;
  },[sectionType])

  const updateSection = (section) => {
    setSectionType(section)
  }

  const noArticles = !articles.length && <h2>There are no articles in this section! :(</h2>

  return (
    <main>
      <Switch>
        <Route exact path ='/'>
          {noArticles}
          <ArticleList updateSection={updateSection}articles = {articles}/>
        </Route>
        <Route exact path ='/:id'
          render={({ match }) => {
            console.log('match', match)
            let foundArticle = articles.find(article => article.id === match.params.id)
            console.log(match.params.id, 'id')
            if (!foundArticle) {
              return <h2>No information found.</h2>
            }
            return <Details foundArticle={ foundArticle } media = {foundArticle.multimedia}/>
          }}
        />
      </Switch>
    </main>  
  )
}

export default App;