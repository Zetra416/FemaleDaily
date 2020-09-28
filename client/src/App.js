import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import TopFrame from './components/FrameBillboard/TopFrame';
import Billboard from './components/FrameBillboard/Billboard';
import EditorChoice from './components/EditorChoiceProducts/EditorChoiceProducts';
import MatchesProduct from './components/MatchesProducts/MatchesProducts';
import InternationalCampaign from './components/FrameBillboard/InternationalCampaign';
import Article from './components/LatestArticles/LatestArticles';
import Review from './components/LatestReviews/LatestReviews';
import MR2 from './components/FrameBillboard/MR2';
import PopularGroups from './components/PopularGroups/PopularGroups';
import LatestVideos from './components/LatestVideos/LatestVideos';
import TrendingThisWeek from './components/TrendingThisWeek/TrendingThisWeek';
import TopBrands from './components/TopBrands/TopBrands';
import Footer from './components/Footer/Footer';
import BottomFrame from './components/FrameBillboard/BottomFrame';
import './App.css';

function App() {
  return (
      <div className="App">
          <Header/>
          <Navbar/>
          <TopFrame/>
          <Billboard/>
          <EditorChoice/>
          <MatchesProduct/>
          <InternationalCampaign/>
          <Article/>

          <div className="latestReviewAndMR2 container">
            <div className="left_content">
              <Review/>
            </div>
            <div className="right_content">
              <MR2/>
            </div>
          </div>

          <PopularGroups/>
          <LatestVideos/>
          <TrendingThisWeek/>
          <TopBrands/>
          <div className="border_footer"></div>
          <Footer/>
          <BottomFrame/>
      </div>
  );
}

export default App;
