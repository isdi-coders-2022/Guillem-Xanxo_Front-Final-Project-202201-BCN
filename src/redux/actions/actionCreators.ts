import actionTypes from "./actionTypes";
import { Trip } from "../../interfaces/Trip";

interface ActionProps {
  type: string;
}

interface getAllTripsActionProps extends ActionProps {
  trips: Trip[];
}

export const getAllTripsAction = (trips: Trip[]): getAllTripsActionProps => ({
  type: actionTypes.getAllTrips,
  trips,
});
