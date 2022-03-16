import { Trip } from "./Trip";

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
  user: string[];
}
