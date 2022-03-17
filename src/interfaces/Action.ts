import { Trip } from "./Trip";
import { Login } from "./Login";
import { Usuari } from "./Usuari";

export interface Action {
  type: string;
}

export interface TripsAction extends Action {
  trips: Trip[];
}

export interface deleteTripAction extends Action {
  id: string;
}

export interface createTripAction extends Action {
  newTrip: Trip;
}

export interface userLogininterfaceAction extends Action {
  user: Login;
}

export interface userRegisterinterfaceAction extends Action {
  user: Usuari;
}
