import actionTypes from "./actionTypes";
import { Trip } from "../../interfaces/Trip";
import { Action } from "../../interfaces/Action";

interface getAllTripsActionProps extends Action {
  trips: Trip[];
}

export const getAllTripsAction = (trips: Trip[]): getAllTripsActionProps => ({
  type: actionTypes.getAllTrips,
  trips,
});
