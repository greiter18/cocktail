import React from 'react';
import {Link } from 'react-router-dom';

const NavBar = ({logout, loggedIn, store}) => {

  const logoutUser  = (e) => {
    e.preventDefault();
    logout();
  }

  const getLinks = () =>{
    if(loggedIn){
      return (
        <div>
          <a onClick={logoutUser}>Sign Out</a>
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
    <div className='navbar_container'>
      <h1>Navbar</h1>
      <Link to={`/`}>HomePage</Link>
      {store.session.user?.first_name ? <h1> Hi {store.session.user?.first_name}</h1>  : ''}
      {console.log(`logged in :${loggedIn}`)}
      {console.log(`store in :`, store)}
      {getLinks()}
    </div>
  )
}

export default NavBar;