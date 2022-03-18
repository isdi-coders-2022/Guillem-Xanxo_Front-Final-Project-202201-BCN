import { combineReducers } from "redux";
import getTripsReducer from "./getTripsReducer";
import tripsReducer from "./tripsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  getTrips: getTripsReducer,
  trips: tripsReducer,
  user: userReducer,
});

export default rootReducer;
