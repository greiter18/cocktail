import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_action';

const _nullErrors = [];

const SessionErrorsReducers = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    default:
        return state
  }
}

export default SessionErrorsReducers;