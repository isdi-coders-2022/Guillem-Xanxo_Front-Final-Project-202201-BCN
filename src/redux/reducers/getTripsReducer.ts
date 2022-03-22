import {
  deleteTripAction,
  TripsAction,
  UserTripsAction,
} from "../../interfaces/Action";
import { TripReceived } from "../../interfaces/TripReceived";
import actionTypes from "../actions/actionTypes";

const getTripsReducer = (
  currentTrips: TripReceived[] = [],
  action: TripsAction | deleteTripAction | UserTripsAction
): TripReceived[] => {
  let newTripArray: TripReceived[];

  switch (action.type) {
    case actionTypes.getAllTrips:
      newTripArray = [...(action as TripsAction).trips];
      break;
    case actionTypes.getUserTrips:
      newTripArray = [...(action as UserTripsAction).trips];
      break;
    case actionTypes.deleteThisTrip:
      newTripArray = currentTrips.filter(
        (trip: TripReceived) => trip.id !== (action as deleteTripAction).id
      );
      break;
    default:
      newTripArray = [...currentTrips];
      break;
  }
  return newTripArray;
};

export default getTripsReducer;
