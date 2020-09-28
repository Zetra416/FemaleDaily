import React from 'react';
// import GroupCard from '../Cards/Group/PopularGroupCard';
import './LatestVideos.css';


export default function LatestVideos(props) {

  return(
    <div className="latest_videos container">
      <div className="latest_videos_wrapper ">
        <div className="latest_videos_title">
          <h1>Latest Videos</h1>
          <div className="latest_videos_subtitle">
            <h3 style={{color:"#dddddd"}}>Watch and learn ladies</h3>
            <h3 style={{color:"#e0003a"}}>See more ></h3>
          </div>

          <div className="videos_wrapper">
            <div className="videos container">
              <div className="video_left">
                <iframe width="720" height="360" src="https://www.youtube.com/embed/6LUdS0VFOJc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>

              <div className="video_right">
                <iframe width="320" height="180" src="https://www.youtube.com/embed/sKYjtapD5Sg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="320" height="180" src="https://www.youtube.com/embed/kSQmhvgN7So" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
