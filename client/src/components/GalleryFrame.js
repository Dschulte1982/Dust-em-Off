import React from 'react';
import {ReactComponent as heart } from '../images/heart.svg';


export default function GalleryFrame() {

    return (
        <>
        <div className="category-gallery-card">
          <div className="category-gallery-frame">
           <img className="category-gallery-img" src="https://cdn.guff.com/site_1/media/14000/13732/items/184bda4149a6d070a3522e92.jpg" object-fit="contain" alt="" />
          </div>
          <div className="category-gallery-info-container">
            <div className="category-gallery-info">
              <div className="category-gallery-user">lukeskywalker82</div>
              <div className="category-gallery-title">Action Comics #1 - Rise of Superman</div>
            </div>
            <div id="category-gallery-likes-container">
              <div id="category-gallery-likes">
                {/* <svg width="20" height="20"> */}
                  <img href={heart} alt="" width="20" height="20" object-fit="contain"/>
                {/* </svg> */}
              </div>
              <div id="category-gallery-likes-count">115</div>
            </div>
          </div>
        </div>
      </>
    )
}
