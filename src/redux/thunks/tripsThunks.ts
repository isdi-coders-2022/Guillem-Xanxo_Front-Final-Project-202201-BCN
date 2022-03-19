import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { Trip } from "../../interfaces/Trip";
import { TripReceived } from "../../interfaces/TripReceived";
import {
  createThisTripAction,
  deleteThisTripAction,
  getAllTripsAction,
  getThisTripAction,
} from "../actions/actionCreators";

export const getAllTripsThunk = async (
  dispatch: ThunkDispatch<void, unknown, AnyAction>
) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}viatges/crono`,
    { method: "GET" }
  );

  const TripListResponse = await response.json();
  const TripsArray = TripListResponse.viatges;
  dispatch(getAllTripsAction(TripsArray));
};

export const deleteTripThunk =
  (id: string) => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}viatges/${id}`,
      { method: "DELETE" }
    );
    if (response.ok) {
      dispatch(deleteThisTripAction(id));
    }
  };

export const createTripThunk =
  (newTrip: Trip) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}viatges/crear`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTrip),
      }
    );
    if (response.ok) {
      dispatch(createThisTripAction(newTrip));
    }
  };

export const getThisTripThunk =
  (id: String) => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}viatges/${id}`
    );

    const TripResponse = await response.json();
    const TripDetail = TripResponse.trip;
    console.log(TripDetail);
    dispatch(getThisTripAction(TripDetail));
  };
