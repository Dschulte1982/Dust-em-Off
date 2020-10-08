import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {connect} from 'react-redux';


class HomePage extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.user)
  }
  getUser() {

  }

  render(){
  return (
    <>
    <div id="home-page-main-div">
      <nav id="homepage-nav-bar">
        <div id="homepage-nav-bar-logo">
          <Link to="/" className="nav-bar-link">Dust 'Em Off</Link>
        </div>
        <div id="homepage-nav-bar-account">
          <Link to="/profile" className="nav-bar-link">My Account</Link>
        </div>
      </nav>
      <div id="homepage-featured-container">
        <div id="homepage-featured-header">Featured Item</div>
        <div id="homepage-featured-image"></div>
        <button id="homepage-featured-user-pic"></button>
        <div id="homepage-featured-user">UserName</div>
        <div id="homepage-featured-item-name">Item Name</div>
        <div id="homepage-featured-item-description">Description</div>
        <div id="homepage-featured-item-features">Features</div>
        <div id="homepage-featured-item-condition">Condition</div>
        <div id="homepage-featured-item-year">Year</div>
        <div id="homepage-featured-items-additional">
          <div id="additional-img-1">Image 1</div>
          <div id="additional-img-2">Image 2</div>
          <div id="additional-img-3">Image 3</div>
        </div>
        <div id="homepage-featured-likes-container">
          <button id="homepage-likes-image"></button>
          <div id="homepage-likes-count">Likes</div>
        </div>
      </div>
      <div id="homepage-body-container">
        <div id="homepage-body-header">Body Header Here</div>
        <div id="homepage-category-1-container">
          <div id="homepage-category-1-header"></div>
          <div id="homepage-category-1-content-container">
            <div id="homepage-category-1-content-1"></div>
            <div id="homepage-category-1-content-2"></div>
            <div id="homepage-category-1-content-3"></div>
          </div>
        </div>
      </div>
    </div>
    </>
  );}

}


const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.auth.user
});

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
