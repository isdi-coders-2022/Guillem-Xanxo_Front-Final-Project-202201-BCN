import { combineReducers } from "redux";
import tripsReducer from "./tripsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  trips: tripsReducer,
  user: userReducer,
});

export default rootReducer;
