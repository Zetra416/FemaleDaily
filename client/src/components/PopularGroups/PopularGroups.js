import React from 'react';
import GroupCard from '../Cards/Group/PopularGroupCard';
import './PopularGroups.css';


export default function PopularGroups(props) {

  return(
    <div className="popular_group container">
      <div className="popular_group_wrapper ">
        <div className="popular_group_title">
          <h1>Popular Groups</h1>
          <div className="popular_group_subtitle">
            <h3 style={{color:"#dddddd"}}>Where the beauty TALK here</h3>
            <h3 style={{color:"#e0003a"}}>See more ></h3>
          </div>
        </div>
        <GroupCard/>
      </div>
    </div>
  )
}
