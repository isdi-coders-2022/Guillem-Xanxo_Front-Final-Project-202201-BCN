import { combineReducers } from "redux";
import tripsReducer from "./tripsReducer";

const rootReducer = combineReducers({
  trips: tripsReducer,
});

export default rootReducer;
