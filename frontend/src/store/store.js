import {createStore,applyMiddleware} from 'redux';
import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer'

const configStore = ( preloadedState = {}) => {
  let middleware = [thunk, logger]
  return createStore(rootReducer,preloadedState,applyMiddleware(...middleware))

}

export default configStore;


////////////////////////////////////////////////////////////////////////////////

// import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';

// const rootReducer = combineReducers({

// })

// let enhancer;

// if(process.env.NODE_ENV === 'production'){
//   enhancer = applyMiddleware(thunk);
// } else {
//   const logger = require('redux-logger').default;
//   const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//   enhancer = composeEnhancers(applyMiddleware(thunk,logger));
// }

// const configStore = preloadedState => {
//   return createStore(rootReducer,preloadedState,en)
// }