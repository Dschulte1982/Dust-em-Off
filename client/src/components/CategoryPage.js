import React from 'react';
import Search from './Search';
import Footer from './Footer';
import GalleryFrame from './GalleryFrame';


export default function CategoryPage() {
    return (
        <>
          <div id="category-master-container">
            <div id="header-nav-bar">
                Nav Bar Goes Here
            </div>
            <div id="category-type-header">
                <img id="category-img" className="images" width="100%" src={require("../images/comic-header.png")} object-fit="contain" alt=""/>
                <div id="category-img-layer"></div>
                <div id="category-header">Comic Books</div>
            </div>
            <div id="category-search-container">
              <div>{Search()}</div>
            </div>
            <div id="category-gallery-container">
              <div id="category-gallery-1">
              <div id="category-gallery-1-1">{GalleryFrame()}</div>
                <div id="category-gallery-1-2">{GalleryFrame()}</div>
                <div id="category-gallery-1-3">{GalleryFrame()}</div>
              </div>
              <div id="category-gallery-2">
                <div id="category-gallery-2-1">{GalleryFrame()}</div>
                <div id="category-gallery-2-2">{GalleryFrame()}</div>
                <div id="category-gallery-2-3">{GalleryFrame()}</div>
              </div>
            </div>
            <div id="category-footer">{Footer()}</div>
          </div>
        </>
    )
}
