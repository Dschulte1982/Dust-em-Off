import React from 'react';

export default function FeatureSection(props) {

    return (
      <>
        <div id="main-featured">
        <div id="main-featured-header">Featured Items</div>
        <div id="main-featured-collection">
          <div id="main-featured-image-container">
            <div id="main-featured-image">
              <img className="images" src="https://cdn-3d.niceshops.com/upload/image/product/large/default/revell-millennium-falcon-1-pc-312173-en.jpg" alt="Featured" object-fit="contain"></img>
            </div>
          </div>
          <div id="main-featured-content-container">
            <div id="main-featured-profile-header">
              <div id="main-featured-profile-image">
                <img id="featured-profile-img" className="images" src={require("../images/profile_photo_luke_skywalker.png")} alt="" object-fit="contain"></img>
              </div>
              <div id="featured-profile-user">lukeskywalker82 <br/><span id="featured-item-count">653 Items</span></div>
            </div>
            <div id="main-featured-item-container">
              <div id="main-featured-item-title">1979 Millenium Falcon Vehicle with Figures</div>
              <div id="main-featured-item-description">Playset comes with multiple figures. Original box still intact and in good condition. Inherited from my uncle and moderately played with, but all pieces still intact.</div>
            </div>
          </div>
        </div>
        </div>
      </>
    )
}
