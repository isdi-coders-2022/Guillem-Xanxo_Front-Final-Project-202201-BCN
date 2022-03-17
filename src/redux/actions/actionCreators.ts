import actionTypes from "./actionTypes";
import { Trip } from "../../interfaces/Trip";
import {
  Action,
  TripsAction,
  deleteTripAction,
  createTripAction,
  userLogininterfaceAction,
} from "../../interfaces/Action";
import { Login } from "../../interfaces/Login";

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

export const createThisTripAction = (newTrip: Trip): createTripAction => ({
  type: actionTypes.createTrip,
  newTrip,
});

export const userLoginAction = (user: Login): userLogininterfaceAction => ({
  type: actionTypes.userLogin,
  user,
});
