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
  }, [url])

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
              <img className="trending_image_product" src={trending.product.image}/>
              <div className="trending_bottom">
                <h3 className="trending_rating">{trending.product.rating}</h3>
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
