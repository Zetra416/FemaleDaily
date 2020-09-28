import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGroup } from '../../../store/actions/groupAction';
import './PopularGroupCard.css'

export default function PopularGroupCard(props) {
  const dispatch = useDispatch();
  const groups = useSelector(state => state.groupReducer.groupData)
  let url = 'https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp';

  useEffect( () => {
    dispatch(
      getGroup(url)
    )
  }, [url])

  return (
    <div className="popular_group">
      <ol>
      {groups
        .filter((_,i) => i < 4)
        .map( (group, index) => {
        return (
          <div className="popular_group_wrapper" key={index}>

            <div className="popular_group_cards ">
              <img className="group_image_product" src={group.product.image}/>
              <div className="content_group_bottom">
                <h3 className="group_title">Embrace the Curl</h3>
                <div className="group_icons">
                  <ion-icon name="person-circle-outline"></ion-icon>
                  <ion-icon name="menu-outline"></ion-icon>
                  <ion-icon name="chatbox-outline"></ion-icon>
                </div>
                <h3 className="group_description">May our curls pop and never stop!</h3>
              </div>
            </div>

          </div>
          )
        })}
      </ol>
    </div>
  )

}
