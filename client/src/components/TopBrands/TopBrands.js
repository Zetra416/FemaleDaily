import React from 'react';
import TopBrandsCard from '../Cards/TopBrands/TopBrandsCard.js';
import './TopBrands.css';

export default function TopBrands(props) {
  return (
    <div className="top_brands container ">
      <div className="top_brands_wrapper">
        <div className="top_brands_title">
          <h1>Top Brands</h1>
          <div className="top_brands_subtitle">
            <h3 style={{color:"#dddddd"}}>We all know and love</h3>
            <h3 style={{color:"#e0003a"}}>See more ></h3>
          </div>
        </div>
        <TopBrandsCard/>
        <div className="top_brand_footer">
          <div className="top_brand_footer_title" >Female Daily - Find everything you want to know about beauty on Female Daily </div>
          <div className="top_brand_footer_content">Product Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty Tutorials, Discussions, Beauty Workshops, anything! We are here to be your friendly solution to all things beauty, inside and out!</div>
        </div>
      </div>
    </div>
  )
}
