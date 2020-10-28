import React from 'react';
import { useSelector } from 'react-redux';
import NavBarLoggedIn from './NavBarLoggedIn';
import NavBarLoggedOut from './NavBarLoggedOut';

export default function NavBar() {
    const NavBarIn = NavBarLoggedIn();
    const NavBarOut = NavBarLoggedOut();
    const loggedIn = useSelector(state => state.auth.loggedIn)
    const testthing = "test thing"

    if (loggedIn) {
      return (
        <>
          {NavBarIn}
        </>
      )
    } else {
    return (
        <>
          {NavBarOut}
        </>
    )
  }
}
