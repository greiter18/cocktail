// import React from "react";
// import ReactDOM  from "react";
// import Main from "./main";
// import configureStore from "./store/store";
// import jwt_decode from "jwt-decode";
// import { setAuthToken } from "./util/session_api_util";
// import {logout} from "./actions/session_actions";
// import './index.css'
// import './App.css'

// document.addEventListener('DOMContentLoaded', () => {
//   let store;
//   if(localStorage.jwtToken){
//     setAuthToken(localStorage.jwtToken);
//     const decodeUser = jwt_decode(localStorage.jwtToken);
//     const preloadedState = {session: {isAuthenticated: true, user: decodeUser}};
//     store = configureStore(preloadedState);
//     const currentTime = Date.now() / 1000;

//     if(decodeUser.exp < currentTime){
//       store.dispatch(logout());
//       window.location.href = '/login';
//     }
//   } else {
//     store = configureStore({})
//   }
//   const root = document.getElementById('root');
//   ReactDOM.render(<Main  store={store}/>, root)
// });


