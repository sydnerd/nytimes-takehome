import './App.css';
import { getArticles } from '../../utils/apiCalls'
import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import ArticleList from '../ArticleList/ArticleList'
import Nav from '../../components/Nav/Nav'

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
            return { ...article, num: `${id}`}
          })
          console.log('fetched articles', articlesWId)
          setArticles(articlesWId)
        }
      })
      .catch(() => setError("We're experiencing server technical difficulties, please check back again later!"));
      return () => mounted = false;
  },[sectionType])

  const updateSection = (section) => {
    setSectionType(section)
  }

  return (
    <main>
      <header>
        <Nav updateSection={updateSection}/>
      </header>
      <Switch>
        <Route exact path ='/'>
          <ArticleList articles = {articles}/>
        </Route>
      </Switch>
    </main>  
  )
}

export default App;