import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./auth";
import apiStatusReducer from "./apiStatus";

export default combineReducers({
  firebaseReducer,
  authReducer,
  apiStatusReducer
});
