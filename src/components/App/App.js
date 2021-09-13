import './App.css';
import { getArticles } from '../../apiCalls'
import React, {useEffect, useState} from 'react';

const App = () => {
  const [articles, setArticles] = useState([])
  const [error, setError] = useState('')

  useEffect(()=> {
    let mounted = true
    getArticles()
      .then(data =>{
        if(mounted) {
          setArticles(data.results)
        }
      })
        .catch(() => setError("We're experiencing server technical difficulties, please check back again later!"));
      return () => mounted = false;
  },[])

  return (
    <header>
      NY TIMES APP
    </header>
  )
}

export default App;
