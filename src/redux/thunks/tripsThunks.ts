import { toast } from "react-toastify";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { Trip } from "../../interfaces/Trip";
import {
  createThisTripAction,
  deleteThisTripAction,
  getAllTripsAction,
  getThisTripAction,
  getUserTripsAction,
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

export const getUserTripsThunk = async (
  dispatch: ThunkDispatch<void, unknown, AnyAction>
) => {
  const userToken = localStorage.getItem("tokenKey");
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}viatges/publicats`,
    { method: "GET", headers: { authorization: `Bearer ${userToken}` } }
  );

  const TripListResponse = await response.json();
  dispatch(getUserTripsAction(TripListResponse));
};

export const deleteTripThunk =
  (id: string) => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const userToken = localStorage.getItem("tokenKey");
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}viatges/${id}`,
      { method: "DELETE", headers: { authorization: `Bearer ${userToken}` } }
    );
    if (response.ok) {
      dispatch(deleteThisTripAction(id));
      toast.success("Viatge borrat correctament");
    }
  };

export const createTripThunk =
  (newTrip: Trip) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const userToken = localStorage.getItem("tokenKey");
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}viatges/crear`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify(newTrip),
      }
    );

    if (response.ok) {
      dispatch(createThisTripAction(newTrip));
      toast.success("Viatge creat correctament");
    }
  };

export const getThisTripThunk =
  (id: string) => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}viatges/${id}`
    );

    const TripResponse = await response.json();
    const TripDetail = TripResponse.trip;
    dispatch(getThisTripAction(TripDetail));
  };
