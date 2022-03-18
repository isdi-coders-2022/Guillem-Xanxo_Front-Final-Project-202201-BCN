import { Trip } from "../../interfaces/Trip";
import actionTypes from "../actions/actionTypes";
import {
  deleteTripAction,
  TripsAction,
  createTripAction,
} from "../../interfaces/Action";

const tripsReducer = (
  currentTrips: Trip[] = [],
  action: deleteTripAction | createTripAction
) => {
  let newTripArray: Trip[];

  switch (action.type) {
    case actionTypes.deleteThisTrip:
      newTripArray = currentTrips.filter(
        (trip: Trip) => trip.id !== (action as deleteTripAction).id
      );
      break;

    case actionTypes.createTrip:
      newTripArray = [...currentTrips, (action as createTripAction).newTrip];
      break;

    default:
      newTripArray = [...currentTrips];
      break;
  }
  return newTripArray;
};

export default tripsReducer;
