import React from 'react';
import ArticleCard from '../Cards/Article/ArticleCard';
import './LatestArticles.css';


export default function LatestArticles(props) {

  return(
    <div className="latest_article container">
      <div className="article_product_wrapper">
        <div className="article_title">
          <h1>Latest Article</h1>
          <div className="article_subtitle">
              <h3 style={{color:"#dddddd"}}>So you can make better purchase decision</h3>
              <h3 style={{color:"#e0003a"}}>See more ></h3>
          </div>
        </div>
        <ArticleCard/>
      </div>
    </div>
  )
}
