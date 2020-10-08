import React, { useState, useEffect } from 'react';
import { NavLink, Redirect, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions/userActions';

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
    const {username, password} = inputs;
    const loggingIn = useSelector(state => state.auth.loggingIn)
    // const registering = useSelector(state => state.registration.registering)
    const location = useLocation();

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
            const { from } = location.state || { from: { pathname: "/home" } };
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
        const { from } = location.state || { from: { pathname: "/home" } };
        dispatch(userActions.login("DemoUser", "password", from))
    }

    return (
        <>
          <div id="landing-page-nav-list">
            <span id="landing-page-logo">
              <NavLink to="/" activeclass="active" className="nav-bar-link">
                Dust 'Em Off
              </NavLink>
            </span>
            <button id="landing-page-login-button" className="nav-bar-link" onClick={openLoginModal}>
              My Account
            </button>
            <button id="landing-page-signup-button" className="nav-bar-link" onClick={openRegisterModal}>
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
                <span id="register-now-header">Don't have an account?</span>
                <button id="register-now-button" onClick={openRegisterModal}>Register now</button>
                <button
                 id="login-form-button"
                 type="submit">
                     {loggingIn && <span className="spinner" />}
                     Login
                 </button>
              </form>
              <button id="demo-user" onClick={demoUser}>Log-In as Demo</button>
            </div>
          </div>
          <div id="register-modal" className="nav-bar-modal">
            <div className="nav-bar-modal-content">
              <div className="modal-close" onClick={closeRegisterModal}>&times;</div>
              <form id="nav-bar-register-form" onSubmit={handleRegister}>
                <span id="register-form-header">Register Your Account</span>
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
                <span id="login-now-header">Already registered?</span>
                <button id="login-now-button" onClick={openLoginModal}>Login now</button>
                <button
                 id="register-form-button"
                 type="submit">
                     {loggingIn && <span className="spinner" />}
                     Sign Up
                 </button>
              </form>
            </div>
          </div>
        </>
    )
}
