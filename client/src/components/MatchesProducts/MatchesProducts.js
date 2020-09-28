import React from 'react';
import MatchesProductCard from '../Cards/MatchesProduct/MatchesProductCard.js';
import './MatchesProducts.css';
import woman from '../../assets/woman_matches.png';

export default function MatchesProduct(props) {
  return (
    <div className="matches_product">
      <div className="matches_product_wrapper ">
        <div className="matches_product_content">
          <div className="matches_product_content_left">
            <div className="img-woman"><img src={woman} style={{maxWidth:"600px", maxHeight:"400px", marginLeft: "40px"}}/></div>
            <div className="writings">
              <h2>Looking for products that are just simply perfect for you ?</h2>
              <h3>Here are some products that we believe match your skin, hair, and body!
            Have we mentioned that they solve your concerns too ?
            </h3>
            <button>See My Matches</button>
            </div>
          </div>

          <div className="matches_product_content_right">
            <MatchesProductCard/>
          </div>

        </div>

      </div>
    </div>
  )
}
