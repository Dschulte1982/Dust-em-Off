import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {ReactComponent as heart } from '../images/heart.svg';


export default function GalleryFrame(galleryId) {
  const galleryNum = galleryId;
  const user = useSelector(state => state.auth.user);
  const item_master = useSelector(state => state.item.userItems)

  let galleryTitle = "";
  let likes = 0;

  //Function to sort - get information from Items and sort by most likes
  // Slice of state that holds items, useSelector to subscribe to that slice of state.
  const galleryLoader = () => {
    if (item_master) {
      const itemIds = []

      // Create the IDs array in order to index correctly.
      for (const Id in item_master.userItems) {
        itemIds.push(Id)
      }

      // Cross-reference the item from the list with the correct Id.
      const referenceNum = itemIds[galleryNum]
      // Set the item to that referenced.
      // This should match the array index set as a GalleryFrame parameter.
      const item_to_load = item_master.userItems[referenceNum]
      return item_to_load;
    }
    return null;
  }
  // galleryLoader();
  const set_item = galleryLoader()
  if (set_item) {
  galleryTitle = set_item.item_name;
  likes = set_item.likes;
  }

  console.log(galleryTitle)
  // Action Comics #1 - Rise of Superman

    if (user) {
    return (
        <>
        <div className="category-gallery-card">
          <div className="category-gallery-frame">
           <img className="category-gallery-img" src="https://cdn.guff.com/site_1/media/14000/13732/items/184bda4149a6d070a3522e92.jpg" object-fit="contain" alt="" />
          </div>
          <div className="category-gallery-info-container">
            <div className="category-gallery-info">
              <div className="category-gallery-user">{user.username}</div>
              <div className="category-gallery-title">{galleryTitle}</div>
            </div>
            <div id="category-gallery-likes-container">
              <div id="category-gallery-likes">
                  <img href={heart} alt="" width="20" height="20" object-fit="contain"/>
              </div>
              <div id="category-gallery-likes-count">{likes}</div>
            </div>
          </div>
        </div>
      </>
    )
  } return (
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
              <img href={heart} alt="" width="20" height="20" object-fit="contain"/>
          </div>
          <div id="category-gallery-likes-count">115</div>
        </div>
      </div>
    </div>
  </>
  )
}
