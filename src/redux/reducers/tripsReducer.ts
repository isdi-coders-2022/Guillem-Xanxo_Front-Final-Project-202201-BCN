import { Trip } from "../../interfaces/Trip";
import actionTypes from "../actions/actionTypes";
import { deleteTripAction, TripsAction } from "../../interfaces/Action";

const tripsReducer = (
  currentTrips: Trip[] = [],
  action: TripsAction | deleteTripAction
) => {
  let newTripArray: Trip[];

  switch (action.type) {
    case actionTypes.getAllTrips:
      newTripArray = [...(action as TripsAction).trips];
      break;

    case actionTypes.deleteThisTrip:
      newTripArray = currentTrips.filter(
        (trip: Trip) => trip.id !== (action as deleteTripAction).id
      );
      break;

    default:
      newTripArray = [...currentTrips];
      break;
  }
  return newTripArray;
};

export default tripsReducer;
