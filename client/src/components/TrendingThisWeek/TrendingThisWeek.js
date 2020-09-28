import React from 'react';
import TrendingThisWeekCard from '../Cards/Trending/TrendingThisWeekCard.js';
import './TrendingThisWeek.css';

export default function TrendingThisWeek(props) {
  return (
    <div className="trending_this_week container ">
      <div className="trending_this_week_wrapper">
        <div className="trending_this_week_title">
          <h1>Trending This Week</h1>
          <div className="trending_this_week_subtitle">
            <h3 style={{color:"#dddddd"}}>See our weekly most reviewed products</h3>
          </div>
        </div>
        <TrendingThisWeekCard/>
      </div>
    </div>
  )
}
