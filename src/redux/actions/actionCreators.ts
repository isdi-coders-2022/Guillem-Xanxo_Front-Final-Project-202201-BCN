import actionTypes from "./actionTypes";
import { Trip } from "../../interfaces/Trip";
import { Action } from "../../interfaces/Action";

interface getAllTripsActionProps extends Action {
  trips: Trip[];
}

interface deleteThisTripActionProps extends Action {
  id: string;
}

export const getAllTripsAction = (trips: Trip[]): getAllTripsActionProps => ({
  type: actionTypes.getAllTrips,
  trips,
});

export const deleteThisTrip = (id: string): deleteThisTripActionProps => ({
  type: actionTypes.deleteThisTrip,
  id,
});
