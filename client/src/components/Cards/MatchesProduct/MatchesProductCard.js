import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMatch } from '../../../store/actions/matchAction';
import './MatchesProductCard.css'

export default function MatchesProductCard(props) {
  const dispatch = useDispatch();
  const matches = useSelector(state => state.matchReducer.matchData)
  let url = 'https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp';

  useEffect( () => {
    dispatch(
      getMatch(url)
    )
  }, [url, dispatch])

  return (
    <div className="match_product_card_wrapper">
      <ol>
      {matches
        .filter((_,i) => i < 3)
        .map( (match, index) => {
        return (
          <div className="match_product_cards" key={index}>
            <div className="product_matches">
              <img className="match_image" src={match.product.image} alt={""} style={{maxWidth: "150px" , maxHeight: "300px"}}/>
              <div className="content_bottom">
                <div className="rating">
                  <h3 className="match_rating">{match.product.rating}</h3>
                  <div className="star_rating">
                    {[1,2,3,4,5].map((el,index) => {
                      return el <= match.product.rating ?
                      <span class="fa fa-star checked"></span>
                      : <span class="fa fa-star"></span>
                    })}
                  </div>
                </div>
                <h3 className="match_name">{match.product.name}</h3>
                <h3 className="match_description">{match.product.description}</h3>
              </div>
            </div>
          </div>
          )
        })}
      </ol>
    </div>
  )

}
