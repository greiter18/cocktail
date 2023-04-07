import React from 'react';
import {Link } from 'react-router-dom';
import { logout } from '../../actions/session_action';


const NavBar = ({logout, loggedIn}) => {

  const logoutUser  = e => {
    e.preventDefault();
    logout();
  }

  const getLinks = () =>{
    if(loggedIn){
      return (
        <div>
          <Link to={logoutUser}>LogOut</Link>
        </div>
      )
    } else {
      return (
        <div>
          <Link to={'/signup'}>Signup</Link>
          <br />
          <Link to={'/login'}>Login</Link>
        </div>
      )
    }
  }
  return (
    <div>
      <h1>Navbar</h1>
      {getLinks()}
    </div>
  )
}

export default NavBar;