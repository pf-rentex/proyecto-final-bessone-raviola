import { combineReducers } from "redux";
// Import all your reducers
import baseReducer from "./baseReducer";
import auth from './auth';

export default combineReducers({
  // Add your reducers:
  baseReducer,
  auth,
});
