import React from 'react';
import './LandingPage.css';
import { main_body } from '../content/content';
import NavBar from '../components/NavBar';
import { withRouter } from 'react-router-dom';
import FeatureSection from './FeaturedSection';
import Search from './Search';
import Footer from './Footer';

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
        <div id="explore-collections-master">
          <div id="main-search-bar-container">
            <div id="main-search-bar">{Search()}</div>
          </div>
          <div id="main-categories-container">
            <div id="main-categories-1">
              <div id="main-category-1-1" className="main-categories">
                <a href="/category/1" className="landing-page-links">Antiques</a>
              </div>
              <div id="main-category-2-1" className="main-categories">
                <a href="/category/5" className="landing-page-links">Star Wars</a>
              </div>
            </div>
            <div id="main-categories-2">
              <div id="main-category-1-2" className="main-categories">
                <a href="/category/2" className="landing-page-links">Comic Books</a>
              </div>
              <div id="main-category-2-2" className="main-categories">
                <a href="/category/6" className="landing-page-links">Trading Cards</a>
              </div>
            </div>
            <div id="main-categories-3">
              <div id="main-category-1-3" className="main-categories">
                <a href="/category/3" className="landing-page-links">Dolls & Toys</a>
              </div>
              <div id="main-category-2-3" className="main-categories">
                <a href="/category/7" className="landing-page-links">Video Games</a>
              </div>
            </div>
            <div id="main-categories-4">
              <div id="main-category-1-4" className="main-categories">
                <a href="/category/4" className="landing-page-links">Sports Memorabilia</a>
              </div>
              <div id="main-category-2-4" className="main-categories">
                <a href="/category/8" className="landing-page-links">Vinyl Records</a>
              </div>
            </div>
          </div>
          <div>{Footer()}</div>
        </div>
      </div>
    )
};

export default withRouter(LandingPage);
