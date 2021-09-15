import './ArticleCard.css'
import React, { useState } from 'react';

const ArticleCard = ({title, image, section }) => {
  // const [article, setArticle] = useState('')
  return (
    <section className='article-card'>
      <div className='article-header'>
        <h1 className='article-title'>{title}</h1>
        <p className='article-section'><em>{section}</em></p>
      </div>
      <div className='photo-container'>
        <img className='article-image' alt='image' src={image.url}/>
        <button className='info-button'>Click for more info</button>
      </div>
    </section>
  )
}

export default ArticleCard;