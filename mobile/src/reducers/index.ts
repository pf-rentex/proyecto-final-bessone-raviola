import { combineReducers } from "redux";
// Import all your reducers
import baseReducer from "./baseReducer";
import auth from "./auth";
import error from "./auth/error";

export default combineReducers({
  // Add your reducers:
  baseReducer,
  auth,
  error,
});
