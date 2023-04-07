import { combineReducers } from "redux";
import SessionErrorsReducers from './session_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducers
});