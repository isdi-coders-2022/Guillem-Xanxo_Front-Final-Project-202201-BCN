import actionTypes from "./actionTypes";
import { Trip } from "../../interfaces/Trip";
import {
  Action,
  TripsAction,
  deleteTripAction,
  createTripAction,
  userLogininterfaceAction,
  userRegisterinterfaceAction,
  TripDetailAction,
  UserTripsAction,
} from "../../interfaces/Action";
import { Login } from "../../interfaces/Login";
import { Usuari } from "../../interfaces/Usuari";
import { TripReceived } from "../../interfaces/TripReceived";

export interface deleteThisTripActionProps extends Action {
  id: string;
}

export const getAllTripsAction = (trips: TripReceived[]): TripsAction => ({
  type: actionTypes.getAllTrips,
  trips,
});

export const getUserTripsAction = (trips: TripReceived[]): UserTripsAction => ({
  type: actionTypes.getUserTrips,
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

export const userRegisterAction = (
  user: Usuari
): userRegisterinterfaceAction => ({
  type: actionTypes.userRegister,
  user,
});

export const getThisTripAction = (trip: TripReceived): TripDetailAction => ({
  type: actionTypes.getThisTrip,
  trip,
});

export const cleanUserAction = () => ({
  type: actionTypes.cleanUser,
});
