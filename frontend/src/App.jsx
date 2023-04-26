import './assets/App.css';
import './assets/index.css'
import React from 'react';
import {AuthRoute ,ProtectedRoute}  from './util/route_util';
import {Switch, Route} from 'react-router-dom'

import Homepage from './components/homepage';
import NavBar from './components/navbar/navbar_container';
import LoginFormContainer from './components/session/login_form_container';
import SignupFormContainer from './components/session/signup_form_container';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Switch className="App">
        <Route exact path='/' component={Homepage}/>
        <AuthRoute exact path='/login' component={LoginFormContainer}/>
        <AuthRoute exact path='/signup' component={SignupFormContainer}/>
      </Switch>
    </div>
    
  )
}

export default App

