import './App.css';
import { getArticles } from '../../apiCalls'
import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import ArticleList from '../ArticleList/ArticleList'

const App = () => {
  const [articles, setArticles] = useState([])
  const [sectionType, setSectionType] = useState('home')
  const [error, setError] = useState('')

  useEffect(()=> {
    let mounted = true
    getArticles(sectionType)
      .then(data =>{
        if(mounted) {
          setArticles(data.results)
        }
      })
        .catch(() => setError("We're experiencing server technical difficulties, please check back again later!"));
      return () => mounted = false;
  },[])

  return (
    <main>
      <header>
        <h1>News</h1> 
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
