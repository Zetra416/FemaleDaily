import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getChoice } from '../../../store/actions/editorAction';
import './EditorChoiceProductCard.css'

export default function EditorChoiceProductCard(props) {
  const dispatch = useDispatch();
  const choices = useSelector(state => state.editorReducer.editorData)
  let url = 'https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp';

  useEffect( () => {
    dispatch(
      getChoice(url)
    )
  }, [url])

  return (
    <div className="product_card_wrapper">
      <ol>
      {choices.map( (choice, index) => {
        return (
          <div className="editor_choice_product_cards" key={index}>

            <div className="choice_top">
              <img className="choice_image" src={choice.product.image}/>
                <div className="content_top">
                  <h3 className="choice_editor">{choice.editor}</h3>
                  <h3 className="choice_role" style={{color:"#dddddd"}}>{choice.role}</h3>
                </div>
            </div>

            <div className="product">
              <img className="choice_image_product" src={choice.product.image} style={{maxWidth: "150px" , maxHeight: "300px"}}/>
              <div className="content_bottom">
                <h3 className="choice_rating">{choice.product.rating}</h3>
                <h3 className="choice_name">{choice.product.name}</h3>
                <h3 className="choice_description">{choice.product.description}</h3>
              </div>
            </div>

          </div>
          )
        })}
      </ol>
    </div>
  )

}
