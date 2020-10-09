import React from 'react';
import GalleryFrame from './GalleryFrame';

export default function CategoryGallery() {
    return (
        <>
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
        </>
    )
}
