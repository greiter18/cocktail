import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter } from 'react-router-dom'
import './assets/index.css'
import  {Provider}  from 'react-redux';
import configStore from "./store/store";
import jwt_decode from "jwt-decode";
import { setAuthToken } from "./util/session_api_util";
import { logout } from './actions/session_action'

  let store;
  if(localStorage.jwtToken){
    setAuthToken(localStorage.jwtToken);
    const decodeUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = {session: {isAuthenticated: true, user: decodeUser}};
    store = configStore(preloadedState);
    const currentTime = Date.now() / 1000;

    if(decodeUser.exp < currentTime){
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configStore({})
  }

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <App />
// )

// const Main = ({store}) => (
//   <Provider store={store}>
//     <HashRouter>
//       <App/>
//     </HashRouter>
//   </Provider>
// )

// export default Main;


// function Root(){
//   return (
//     <Provider store={store}>
//       <BrowserRouter>
//       <App/>
//       </BrowserRouter>
//     </Provider>
//   )
// }

// ReactDOM.render(
//   <React>
//     <Root/>
//   </React>, document.getElementById('root')
// )