import React from 'react';
import ReviewCard from '../Cards/Review/ReviewCard';
import './LatestReviews.css';


export default function LatestReviews(props) {

  return(
    <div className="latest_review ">
      <div className="review_product_wrapper">
        <div className="review_title">
          <h1>Latest Reviews</h1>
          <div className="review_subtitle">
            <h3 style={{color:"#dddddd"}}>So you can make better purchase decision</h3>
            <h3 style={{color:"#e0003a"}}>See more ></h3>
          </div>
        </div>
        <ReviewCard/>
      </div>
    </div>
  )
}
