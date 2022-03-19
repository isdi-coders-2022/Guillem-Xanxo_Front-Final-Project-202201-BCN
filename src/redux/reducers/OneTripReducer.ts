import { TripDetailAction } from "../../interfaces/Action";
import { TripReceived } from "../../interfaces/TripReceived";
import actionTypes from "../actions/actionTypes";

const OneTripReducer = (
  currentTrip: TripReceived = {
    origen: "",
    desti: "",
    places: "",
    data: "",
    dataNumber: 0,
    horaSortida: "",
    horaSortidaNumber: 0,
    comentaris: "",
    dones: false,
    id: "",
  },
  action: TripDetailAction = {
    type: "",
    trip: {
      origen: "",
      desti: "",
      places: "",
      data: "",
      dataNumber: 0,
      horaSortida: "",
      horaSortidaNumber: 0,
      comentaris: "",
      dones: false,
      id: "",
    },
  }
) => {
  let newTripArray: TripReceived;

  switch (action.type) {
    case actionTypes.getThisTrip:
      newTripArray = { ...(action as TripDetailAction).trip };
      break;
    default:
      newTripArray = { ...currentTrip };
      break;
  }
  return newTripArray;
};

export default OneTripReducer;
