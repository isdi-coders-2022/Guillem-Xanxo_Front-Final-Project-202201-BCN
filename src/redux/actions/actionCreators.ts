import actionTypes from "./actionTypes";
import { Trip } from "../../interfaces/Trip";
import { Action, TripsAction, deleteTripAction } from "../../interfaces/Action";

export interface deleteThisTripActionProps extends Action {
  id: string;
}

export const getAllTripsAction = (trips: Trip[]): TripsAction => ({
  type: actionTypes.getAllTrips,
  trips,
});

export const deleteThisTripAction = (id: string): deleteTripAction => ({
  type: actionTypes.deleteThisTrip,
  id,
});
