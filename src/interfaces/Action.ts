import { Trip } from "./Trip";

export interface Action {
  type: string;
}

export interface TripsAction extends Action {
  trips: Trip[];
}
