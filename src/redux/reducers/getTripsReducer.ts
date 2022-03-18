import { TripsAction } from "../../interfaces/Action";
import { TripReceived } from "../../interfaces/TripReceived";
import actionTypes from "../actions/actionTypes";

const getTripsReducer = (
  currentTrips: TripReceived[] = [],
  action: TripsAction
) => {
  let newTripArray: TripReceived[];

  switch (action.type) {
    case actionTypes.getAllTrips:
      newTripArray = [...(action as TripsAction).trips];
      break;
    default:
      newTripArray = [...currentTrips];
      break;
  }
  return newTripArray;
};

export default getTripsReducer;
