import './App.css';
import './index.css'
import React from 'react';
import {AuthRoute ,ProtectedRoute}  from './util/route_util';
import {Switch, Route} from 'react-router-dom'

import Homepage from './components/homepage';
import NavBar from './components/navbar/navBar';
import LoginFormContainer from './components/session/login_form_container';
import SignupFormContainer from './components/session/signup_form_container';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Switch className="App">
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/login' component={LoginFormContainer}/>
        <Route exact path='/signup' component={SignupFormContainer}/>
      </Switch>
    </div>
    
  )
}

export default App

