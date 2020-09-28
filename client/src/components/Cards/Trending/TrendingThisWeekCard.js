import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTrending } from '../../../store/actions/trendingAction';
import ItemsCarousel from 'react-items-carousel';
import './TrendingThisWeekCard.css'

export default function TrendingTHisWeekCard(props) {
  const dispatch = useDispatch();
  const trendings = useSelector(state => state.trendingReducer.trendingData);
  const [activeItemIndex, setActiveItemIndex] = useState(1);
  let url = 'https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp';

  useEffect( () => {
    dispatch(
      getTrending(url)
    )
  }, [url, dispatch])

  return (
    <div className="trending_this_week_card_wrapper">
    <ItemsCarousel
      infiniteLoop={true}
      chevronWidth={60}
      numberOfCards={5}
      showSlither={true}
      activeItemIndex={activeItemIndex}
      requestToChangeActive={value => setActiveItemIndex(value)}
      rightChevron={'>'}
      leftChevron={'<'}
      >
      {trendings.map( (trending, index) => {
        return (
          <div className="trending_this_week_cards" key={index}>

            <div className="trending_product">
              <img className="trending_image_product" src={trending.product.image} alt={"..."}/>
              <div className="trending_bottom">
              <div className="rating">
                <div className="star_rating">
                  {[1,2,3,4,5].map((el,index) => {
                    return el <= trending.product.rating ?
                    <span class="fa fa-star checked"></span>
                    : <span class="fa fa-star"></span>
                  })}
                </div>
                </div>
                <h3 className="trending_name">{trending.product.name}</h3>
                <h3 className="trending_description">{trending.product.description}</h3>
              </div>
            </div>

          </div>
          )
        })}
      </ItemsCarousel>
    </div>
  )

}
