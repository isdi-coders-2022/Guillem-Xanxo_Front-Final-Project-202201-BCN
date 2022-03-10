import { Trip } from "../../interfaces/Trip";
import actionTypes from "../actions/actionTypes";
import { TripsAction } from "../../interfaces/Action";

const tripsReducer = (currentTrips: Trip[] = [], action: TripsAction) => {
  let newTripArray: Trip[];

  switch (action.type) {
    case actionTypes.getAllTrips:
      newTripArray = [...action.trips];
      break;

    default:
      newTripArray = [...currentTrips];
      break;
  }
  return newTripArray;
};

export default tripsReducer;
