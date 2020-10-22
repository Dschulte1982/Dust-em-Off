import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from './NavBar';
import { itemActions } from '../actions/itemActions';
import star_wars_banner from '../images/star_wars_banner.jpg';
import profile_photo_luke_skywalker from '../images/profile_photo_luke_skywalker.png';
import GalleryFrame from './GalleryFrame';
import Footer from './Footer';

export default function ProfilePage() {
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch();
    useEffect(() => {
      function loadCollections() {
        dispatch(itemActions.getCollections(user.id))
      }
      loadCollections();
    }, [dispatch, user.id])
    return (
        <>
          <div id="profile-page-master">
            <div id="profile-page-nav">{NavBar()}</div>
            <div id="profile-page-banner-container">
                <div id="profile-banner-img-container">
                  <img id="profile-banner-img" className="images" src={star_wars_banner} alt="" />
                </div>
                <div id="profile-img-container">
                  <img id="profile-page-img" className="images" src={profile_photo_luke_skywalker} alt="Profile Pic"/>
                </div>
            </div>
            <div id="profile-user-details-container">
              <div id="profile-user-details">
                <div id="profile-username">{user.username}</div>
                <div id="profile-user-item-total">653 Items</div>
                <button id="profile-user-follow">Follow +</button>
              </div>
              <div id="profile-user-gallery-container">
                  <div id="profile-user-gallery-1">{GalleryFrame()}</div>
                  <div id="profile-user-gallery-2">{GalleryFrame()}</div>
                  <div id="profile-user-gallery-3">{GalleryFrame()}</div>
              </div>
            </div>
            <div id="profile-categories-container">
              <div id="profile-category-1-container">
                <div id="profile-category-1-header-container" className="profile-header-container">
                  <div id="profile-category-1-header" className="profile-category-header">Star Wars</div>
                  <button id="profile-category-1-show" className="profile-category-show">Show More</button>
                </div>
                <div id="profile-category-1-content" className="profile-category-content-container">
                  <div id="profile-user-content-1-1" className="profile-content-gallery">{GalleryFrame()}</div>
                  <div id="profile-user-content-2-1" className="profile-content-gallery">{GalleryFrame()}</div>
                  <div id="profile-user-content-3-1" className="profile-content-gallery">{GalleryFrame()}</div>
                  <div id="profile-user-content-4-1" className="profile-content-gallery">{GalleryFrame()}</div>
                </div>
              </div>
              <div id="profile-category-2-container">
                <div id="profile-category-2-header-container" className="profile-header-container">
                  <div id="profile-category-2-header" className="profile-category-header">Comic Books</div>
                  <button id="profile-category-2-show" className="profile-category-show">Show More</button>
                </div>
                <div id="profile-category-2-content">
                  <div id="profile-user-content-1-2" className="profile-content-gallery">{GalleryFrame()}</div>
                  <div id="profile-user-content-2-2" className="profile-content-gallery">{GalleryFrame()}</div>
                  <div id="profile-user-content-3-2" className="profile-content-gallery">{GalleryFrame()}</div>
                  <div id="profile-user-content-3-2" className="profile-content-gallery">{GalleryFrame()}</div>
                </div>
              </div>
            </div>
            <div id="profile-page-footer-container">{Footer()}</div>
          </div>
        </>
    )
}
