import { Trip } from "../../interfaces/Trip";
import actionTypes from "../actions/actionTypes";
import { createTripAction } from "../../interfaces/Action";

const tripsReducer = (
  currentTrips: Trip[] = [],
  action: createTripAction = {
    type: "",
    newTrip: {
      origen: "",
      desti: "",
      places: "",
      horaSortida: "",
      comentaris: "",
      dones: "",
      data: "",
      id: "",
    },
  }
) => {
  let newTripArray: Trip[];

  switch (action.type) {
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
