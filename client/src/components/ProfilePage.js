import React, { useEffect } from 'react';
import './ProfilePage.css';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from './NavBar';
import { itemActions } from '../actions/itemActions';
// import star_wars_banner from '../images/star_wars_banner.jpg';
// import profile_photo_luke_skywalker from '../images/profile_photo_luke_skywalker.png';
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

    useEffect(() => {
      function loadItems() {
        const userId = user.id
        dispatch(itemActions.getUserItems(userId))
      }
      loadItems();
    }, [dispatch, user.id])

    return (
        <>
          <div id="profile-page-master">
            <div id="profile-page-nav">{NavBar()}</div>
            <div id="profile-page-banner-container">
                <div id="profile-banner-img-container">
                  <img id="profile-banner-img" className="images" src="https://lh3.googleusercontent.com/bWn3c7I3c2aWxZfdp3hA5v-aYhSkQB6WGk7XjQOi3H76ZxssRI22rVFlUtcsn52bJEtpYzPJxBv8fvIFkSOzououbHUjUqbtb5pZoGtgWdWtY8DMx7HC77PVq67Ipd1ijfHPARXLdoasHC8z9z8jnHbG99UFvDocvqqZIBCrJYVyVMs96vgLk3SaD10zT0JxGxwuRFu67NvE16kYJ5fAVLxWYNv_o1d8QB2KThc7T0B2oaK7xcu_EoMUURi5GYErRJIhypPWwR_jqix3SM8LpEuZXgsyKNIPomzvMPCLwNiJAQSz_ubKwyNZRbx5IXigidt0q2iF1NmQ9U_SUszICSlvMbk4KMZOx5_2Ky1FjB6yus3DyrZHF1nVScZJPwSS_ZHG5PaS4FTzlGz1xPcpRaTa1mw-wZ03I1N-iOzwaGWhxXG-ETyimlqVQxwC3EtfpWaLWsJLPojPhu1djvCwqkvEQl23WhKxAtEVmKT8RgtTN-J12FDZo-gdC3yPImryfHaSbNHN6x9x7BEYTxoQg6SyCnbUZA_BZtEckUU8K_5j7iR5w_eXGGqSa6E3Y6q9Qnz4ykJdvA42O4y5kPmzAViHgR-83-EI4ttOLzQhCNS_xcpTkSWnct8xMXhQFpaUBqBhJSTZzCuPhPXyQlnthUEIS6DUTCCbXF6_XYfR9iSveOI5X6yuUQFofJ7FKg=w1000-no-tmp.jpg" alt="" />
                </div>
                <div id="profile-img-container">
                  <img id="profile-page-img" className="images" src="https://lh3.googleusercontent.com/tU1IxF0kiBSxRu_Io8nv-xlijEM4bl8EXiAOzaftUV65jOwJmYYz-Nee-DjRfLqokHro5plG3Cbp16hmXLx2OUW0x2HLQS4Ls79yhn_Hkol8lyHKho47sXw3trJo9RCwMYiMtOnvDzkUm1-xuAxb8TAO396eWkdRH5IzJhlbL3xKiFLFDBPEEKRizNgztn0OpwIpWkTLMFNoScoHDT9prCz8tzIFlii-1OJgnJ037CWdtHS2AcNiJbOM_ialPW1PSrFiLs5kankp0XPkL4XxfNVza20pgM4meRjqv-lxIi9OFEI_xnjemPbjXCPWP1VbGSMTZZWWhFuFhMBygHly_fWzDwDFnOYIhRx2YxwIRImPHKeKhAWfriWQ2W8DAR651qeYwUOJmdB7jovrinj_gvfezxdxBrxlzTqVpL6FHU53n6TcAUCwKsFVlDHgdzcR8xIYxy4sHztZTuFfK6kDk1CpSfoF5NQ0qLU3gLo2bT2V6-dWcveciwZq96tgtzzCZkdL-s1Re9uaZ9vzSPERJpzztG-M8Zi1UgD76LgfFHLFQIDy3IyP4rg1D01wFA6AnyPgMynXvr8eS2tQ-IO7hLW2EPdN74n0iGtSeYblYEBxml4iL1YW6m7AEVt3wFrYdo8BNn5rGqDgWkCx3ij8aXviljg2FjLpo8kdU3MjXjJ56zdmvxmjJqMjJG15pw=w1000-no-tmp.jpg" alt="Profile Pic"/>
                </div>
            </div>
            <div id="profile-user-details-container">
              <div id="profile-user-details">
                <div id="profile-username">{user.username}</div>
                <div id="profile-user-item-total">653 Items</div>
                <button id="profile-user-follow">Follow +</button>
              </div>
              <div id="profile-user-gallery-container">
                  <div id="profile-user-gallery-1">{GalleryFrame(1)}</div>
                  <div id="profile-user-gallery-2">{GalleryFrame(2)}</div>
                  <div id="profile-user-gallery-3">{GalleryFrame(3)}</div>
              </div>
            </div>
            <div id="profile-categories-container">
              <div id="profile-category-1-container">
                <div id="profile-category-1-header-container" className="profile-header-container">
                  <div id="profile-category-1-header" className="profile-category-header">Star Wars</div>
                  <button id="profile-category-1-show" className="profile-category-show">Show All</button>
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
                  <button id="profile-category-2-show" className="profile-category-show">Show All</button>
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
