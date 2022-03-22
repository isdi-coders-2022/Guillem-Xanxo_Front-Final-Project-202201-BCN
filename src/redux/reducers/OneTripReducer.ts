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

  if (actionTypes.getThisTrip) {
    return (newTripArray = { ...action.trip });
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return (newTripArray = { ...currentTrip });
  }
};

export default OneTripReducer;
