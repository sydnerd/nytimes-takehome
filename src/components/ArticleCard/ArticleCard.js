import './ArticleCard.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const ArticleCard = ({title, image, section, id }) => {
  return (
    <section className='article-card'>
      <div className='article-header'>
        <h1 className='article-title'>{title}</h1>
        <p className='article-section'><em>{section}</em></p>
      </div>
      <div className='photo-container'>
        <img className='article-image' alt='image' src={image.url}/>
        <Link
          to={`/${id}`}
        >
          <button className='info-button'>Click for more info</button>
        </Link>
        
      </div>
    </section>
  )
}

export default ArticleCard;