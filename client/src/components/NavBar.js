import React, { useState, useEffect } from 'react';
import { NavLink, Redirect, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions/userActions';
import Example from './Example';

export default function NavBar(props) {

    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const {username, password, collection, category} = inputs;
    const loggingIn = useSelector(state => state.auth.loggingIn)
    const loggedIn = useSelector(state => state.auth.loggedIn)
    // const registering = useSelector(state => state.registration.registering)
    const location = useLocation();
    console.log(location)

    const dispatch = useDispatch();

    // Sets the login status to default
    useEffect(() => {
        dispatch(userActions.logout());
    }, []);


    const openLoginModal = (e) => {
        e.preventDefault();
        const registerModal = document.getElementById("register-modal");
        const modal = document.getElementById("login-modal");
        registerModal.style.display = "none";
        modal.style.display = "block";
    }

    const closeLoginModal = (e) => {
        e.preventDefault();
        const modal = document.getElementById("login-modal");
        modal.style.display = "none";
    }

    const openRegisterModal = (e) => {
        e.preventDefault();
        const loginModal = document.getElementById("login-modal");
        const modal = document.getElementById("register-modal");
        loginModal.style.display = "none";
        modal.style.display = "block";
    }

    const closeRegisterModal = (e) => {
        e.preventDefault();
        const modal = document.getElementById("register-modal");
        modal.style.display = "none";
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
        setUser(user => ({ ...user, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true);
        if (username && password) {
            const { from } = location.pathname || { from: { pathname: "/" } };
            dispatch(userActions.login(username, password, from))
        }
    }

    const handleRegister = (e) => {
        e.preventDefault();

        setSubmitted(true);
        if (user.username && user.email && user.password) {
            dispatch(userActions.register(user));
        }
    }

    const demoUser = (e) => {
        e.preventDefault();

        setSubmitted(true);
        const { from } = location.pathname || { from: { pathname: "/" } };
        console.log(location.state);
        dispatch(userActions.login("DemoUser", "password", from))
    }

    const logOut = (e) => {
      e.preventDefault();

      dispatch(userActions.logout());
    }

    const openDropDown = (e) => {
      e.preventDefault();

      const dropdown = document.getElementById("my-account-drop-down");
      if (dropdown.className === "hide") {
      dropdown.className = "";
      } else {
        dropdown.className = "hide"
      }
    }

    const openCreateModal = (e) => {
      e.preventDefault();
      const modal = document.getElementById("create-modal")
      modal.style.display = "block";
    }

    const closeCreateModal = (e) => {
      e.preventDefault();
      const modal = document.getElementById("create-modal");
      modal.style.display = "none";
    }

    const openItemModal = (e) => {
      e.preventDefault();

      const modal = document.getElementById("create-item-modal");
      modal.style.display = "block"
    }

    if (loggedIn) {
      return (
        <>
          <div id="landing-page-nav-list-logged">
            <span id="landing-page-logo-logged">
              <NavLink to="/" activeclass="active" className="modal-nav-bar-link">
                Dust 'Em Off
              </NavLink>
            </span>
            <button className="modal-nav-bar-link" onClick={openCreateModal}>
                Add to Collection
              </button>
            <div id="my-account-container-logged">
              <button id="my-account-button" className="modal-nav-bar-link" onClick={openDropDown}>
                My Account
              </button>
              <div id="my-account-drop-down" className="hide">
                <div className="drop-down-links">
                  <button className="drop-down-links-buttons" onClick={logOut}>Logout</button>
              </div>
              </div>
            </div>
          </div>
          <div id="create-modal" className="nav-bar-modal">
            <div className="create-modal-content">
              <div className="modal-close" onClick={closeCreateModal}>&times;</div>
              <form id="nav-bar-create-form" onSubmit={handleSubmit}>
                <span id="create-form-header">Create a New Collection</span>
                <div id="create-form-elements">
                <input
                 id="create-form-collection"
                 type="text"
                 name="collection"
                 placeholder="Your Collection Name"
                 value={collection}
                 onChange={handleChange}
                 />
                <select
                 id="create-form-category"
                 type="select"
                 name="category"
                 placeholder=""
                 value={category}
                 onChange={handleChange}
                 >
                   <option value="">Category</option>
                   <option value="Antiques">Antiques</option>
                   <option value="Comic Books">Comic Books</option>
                   <option value="Dolls & Toys">Dolls & Toys</option>
                   <option value="Sport Memorabilia">Sports Memorabilia</option>
                   <option value="Star Wars">Star Wars</option>
                   <option value="Trading Cards">Trading Cards</option>
                   <option value="Vinyl Records">Vinyl Records</option>
                 </select>
                 </div>
                <button
                 id="create-form-next-button"
                 type="submit" onClick={openItemModal}>
                     Next <i className="right-arrow"></i>
                </button>
              </form>
            </div>
          </div>
          <div id="create-item-modal" className="nav-bar-modal">
            <div className="create-item-modal-content">
              <div className="modal-close" onClick={closeCreateModal}>&times;</div>
              <form id="nav-bar-item-form" onSubmit={handleSubmit}>
                <span id="create-item-form-header">Put Your Item on Display</span>
                <div id="create-item-form-content">
                <div id="create-item-form-elements-left">
                <input
                 id="create-item-form-name"
                 type="text"
                 name="name"
                 placeholder="Item Name"
                //  value={itemName}
                 onChange={handleChange}
                 />
                 <textarea id="create-item-form-description"
                 placeholder="Item Description"
                 type="textarea"
                 name="description"
                 onChange={handleChange}
                 >
                 </textarea>
                </div>
                <div id="create-item-form-elements-right">
                <select
                 id="create-item-form-year"
                 type="select"
                 name="year"
                 placeholder=""
                //  value={year}
                 onChange={handleChange}
                 >
                   <option value="">Release Year</option>
                 </select>
                 <select
                 id="create-item-form-condition"
                 type="select"
                 name="condition"
                 placeholder=""
                //  value={condition}
                 onChange={handleChange}
                 >
                   <option value="">Item Condition</option>
                   <option value="Mint">Mint</option>
                   <option value="Near Mint">Near Mint</option>
                   <option value="Dolls & Toys">Good</option>
                   <option value="Sport Memorabilia">Fair</option>
                   <option value="Star Wars">Poor</option>
                   <option value="Trading Cards">Damaged</option>
                 </select>
                 <div id="drag-and-drop-container">{<Example />}</div>
                 </div>
                 </div>
                <button
                 id="create-item-form-button"
                 type="submit">
                     Submit <i className="right-arrow"></i>
                </button>
              </form>
            </div>
          </div>
        </>
      )
    } else {
    return (
        <>
          <div id="landing-page-nav-list">
            <span id="landing-page-logo">
              <NavLink to="/" activeclass="active" className="modal-nav-bar-link">
                Dust 'Em Off
              </NavLink>
            </span>
            <button id="landing-page-login-button" className="modal-nav-bar-link" onClick={openLoginModal}>
              My Account
            </button>
            <button id="landing-page-signup-button" className="modal-nav-bar-link" onClick={openRegisterModal}>
              Sign Up
            </button>
          </div>
          <div id="login-modal" className="nav-bar-modal">
            <div className="nav-bar-modal-content">
              <div className="modal-close" onClick={closeLoginModal}>&times;</div>
              <form id="nav-bar-login-form" onSubmit={handleSubmit}>
                <span id="login-form-header">Account Login</span>
                <input
                 id="login-form-username"
                 type="text"
                 name="username"
                 placeholder="Username"
                 value={username}
                 onChange={handleChange}
                 />
                <input
                 id="login-form-password"
                 type="password"
                 name="password"
                 placeholder="Password"
                 value={password}
                 onChange={handleChange}
                 />
                <button
                 id="login-form-button"
                 type="submit">
                     {loggingIn && <span className="spinner" />}
                     Login
                </button>
              </form>
              <button id="demo-user" onClick={demoUser}>Login as Demo</button>
              <span id="register-now-header">Don't have an account?</span>
              <button id="register-now-button" onClick={openRegisterModal}>Register Now</button>
            </div>
          </div>
          <div id="register-modal" className="nav-bar-modal">
            <div className="nav-bar-modal-content">
              <div className="modal-close" onClick={closeRegisterModal}>&times;</div>
              <form id="nav-bar-register-form" onSubmit={handleRegister}>
                <span id="register-form-header">Create an Account</span>
                <input
                  id="register-form-username"
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={user.username}
                  onChange={handleChange}
                />
                <input
                  id="register-form-email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={user.email}
                  onChange={handleChange}
                />
                <input
                  id="register-form-password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={handleChange}
                />
                <button
                 id="register-form-button"
                 type="submit">
                     {loggingIn && <span className="spinner" />}
                     Sign Up
                 </button>
                <span id="login-now-header">Already registered?</span>
                <button id="login-now-button" onClick={openLoginModal}>Login Now</button>
              </form>
            </div>
          </div>
        </>
    )
  }
}
