import React from 'react';
import { main_body } from '../content/content';
import NavBar from '../components/NavBar';
import { withRouter } from 'react-router-dom';
import FeatureSection from './FeaturedSection';

function LandingPage(props) {
  return (
      <div id="main-content-container">
        <div id="main-content-body-container">
          <nav>{NavBar()}</nav>
          <div id="main-content-desc-container">
            <div id="main-content-background-image"></div>
            <div id="main-content-header-1"><h2>Curate Your Collection</h2></div>
            <div id="main-content-header-2"><h1>Display All the Things You Love</h1></div>
            <div id="main-content-body">{main_body}</div>
            <button id="main-content-button">Start Your Collection</button>
          </div>
        </div>
        <div>{FeatureSection()}</div>
      </div>
    )
};

export default withRouter(LandingPage);
