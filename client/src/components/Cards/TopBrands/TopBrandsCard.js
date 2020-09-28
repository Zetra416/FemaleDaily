import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBrand } from '../../../store/actions/brandAction';
import './TopBrandsCard.css'

export default function TopBrandsCard(props) {
  const dispatch = useDispatch();
  const brands = useSelector(state => state.brandReducer.brandData)
  let url = 'https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp';

  useEffect( () => {
    dispatch(
      getBrand(url)
    )
  }, [url, dispatch])

  return (
    <div className="top_brand">
      <ol>
      {brands
        .filter((_,i) => i < 6)
        .map( (brand, index) => {
        return (
          <div className="top_brand_wrapper" key={index}>

            <div className="top_brand_cards ">
              <img className="top_brand_image" src={brand.product.image} alt={"..."}/>
            </div>
          </div>
          )
        })}
      </ol>
    </div>
  )

}
