import React from 'react';
import EditorChoiceProductCard from '../Cards/EditorChoice/EditorChoiceProductCard.js';
import './EditorChoiceProducts.css';

export default function EditorsChoice(props) {

  return (
    <div className="editor_choice container">
      <div className="editor_choice_product_wrapper">
        <div className="editor_choice_product_title">
          <h1>Editor's Choice</h1>
          <h3 style={{color:"#dddddd"}}>Curated with love</h3>
        </div>
        <EditorChoiceProductCard/>
      </div>
    </div>
  )
}
