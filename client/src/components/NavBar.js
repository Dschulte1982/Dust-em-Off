import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { login, logout } from '../store/authReducer';

export default function NavBar(props) {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const {username, password} = inputs;

    const dispatch = useDispatch();

    // Sets the login status to default
    useEffect(() => {
        dispatch(logout());
    }, []);


    const openModal = (e) => {
        e.preventDefault();
        const modal = document.getElementById("myModal");
        modal.style.display = "block";
    }

    const closeModal = (e) => {
        e.preventDefault();
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true);
        if (username && password) {
            console.log(username, password)
            dispatch(login(username, password))
        }
    }

    return (
        <>
          <ul id="landing-page-nav-list">
            <li id="landing-page-logo">
              <NavLink to="/" activeclass="active" className="nav-bar-link">
                Dust 'Em Off
              </NavLink>
              <button id="landing-page-login-button" className="nav-bar-link" onClick={openModal}>
                My Account
              </button>
              <button id="landing-page-signup-button" className="nav-bar-link">
                Sign Up
              </button>
            </li>
          </ul>
          <div id="myModal" className="nav-bar-modal">
            <div className="nav-bar-modal-content">
              <span className="modal-close" onClick={closeModal}>&times;</span>
              <form id="nav-bar-login-form" onSubmit={handleSubmit}>
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
                     Login
                 </button>
              </form>
            </div>
          </div>
        </>
    )
}
