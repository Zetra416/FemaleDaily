import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReview } from '../../../store/actions/reviewAction';
import ItemsCarousel from 'react-items-carousel';
import './ReviewCard.css'

export default function ReviewCard(props) {
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.reviewReducer.reviewData)
  let url = 'https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp';

  useEffect( () => {
    dispatch(
      getReview(url)
    )
  }, [url, dispatch])

  const [activeItemIndex, setActiveItemIndex] = useState(1)

  return (
    <div className="review_card_wrapper">
      <ItemsCarousel
        infiniteLoop={true}
        chevronWidth={60}
        numberOfCards={2}
        showSlither={true}
        activeItemIndex={activeItemIndex}
        requestToChangeActive={value => setActiveItemIndex(value)}
        rightChevron={'>'}
        leftChevron={'<'}
        >
        {reviews.map( (review, index) => {
          const {profile, user, product, comment, star} = review;
          const [type, color, character, age] = profile;
          return (
            <div className="review_product_cards" key={index}>

              <div className="review_product">

                <div className="review_product_top">
                  <div className="review_product_image">
                    <img className="review_image" src={product.image} alt={""} style={{width: "70px" , height: "70px"}}/>
                  </div>

                  <div className="review_product_top_desc">
                    <h3 className="review_name">{product.name}</h3>
                    <h3 className="review_desc">{product.desc}</h3>
                  </div>
                </div>

                <div className="review_product_middle">
                  <div className="star_rating">
                    {[1,2,3,4,5].map((el,index) => {
                      return el <= star ?
                      <span class="fa fa-star checked"></span>
                      : <span class="fa fa-star"></span>
                    })}
                  </div>
                  <h3 className="review_comment">{comment}</h3>
                </div>

                <div className="review_product_bottom">
                  <div className="review_user_detail">
                    <h3 className="review_user">{user}</h3>
                    <div className="user_characteristic">
                      <h3 className="review_age">{age}</h3>
                      <h3 className="review_type">{type}</h3>
                      <h3 className="review_color">{color}</h3>
                      <h3 className="review_character">{character}</h3>
                    </div>
                  </div>
                </div>

              </div>

            </div>
            )
          })}
      </ItemsCarousel>
    </div>
  )

}
