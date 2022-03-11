import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { getAllTripsAction } from "../actions/actionCreators";

export const getAllTripsThunk = async (
  dispatch: ThunkDispatch<void, unknown, AnyAction>
) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}viatges/crono`);

  const TripListResponse = await response.json();
  const TripsArray = TripListResponse.viatges;
  dispatch(getAllTripsAction(TripsArray));
};

/*
export const deleteTripThunk = 
  (id: string) => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}viatges/eliminar/${id}`),
      {
        method: "DELETE",
      }
    );
    if(response.ok) {
      dispatchEvent(deleteThisTripAction(id));
    }
  } */
