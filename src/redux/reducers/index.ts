import { combineReducers } from "redux";
import getTripsReducer from "./getTripsReducer";
import OneTripReducer from "./OneTripReducer";
import tripsReducer from "./tripsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  oneTrip: OneTripReducer,
  getTrips: getTripsReducer,
  trips: tripsReducer,
  user: userReducer,
});

export default rootReducer;
