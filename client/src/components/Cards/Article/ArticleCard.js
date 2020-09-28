import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArticle } from '../../../store/actions/articleAction';
import './ArticleCard.css';

export default function LatestArticle(props) {
  const dispatch = useDispatch();
  const articles = useSelector(state => state.articleReducer.articleData);
  let url = 'https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp';

  useEffect( ()=> {
    dispatch(
      getArticle(url)
    )
  }, [url, dispatch])

  return(
    <div className="article_wrapper">
      <div className="article__wrapper--products">
        {articles.map( (article, index) => {
          return(
            <div className="articles_cards" key={index}>
              <div className="article_card">
                <img className="article_image" src={article.image} alt={"..."}/>
                  <h3 className="article_title">{article.title}</h3>
                  <div className="article_bottom" >
                    <h3 className="article_author" style={{color:"#969696"}}>{article.author}</h3> <h3 style={{color:"#dddddd", letterSpacing:"5px"}}>|</h3><h3 className="article_published_at" style={{color:"#dddddd"}}>{article.published_at}</h3>
                  </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
