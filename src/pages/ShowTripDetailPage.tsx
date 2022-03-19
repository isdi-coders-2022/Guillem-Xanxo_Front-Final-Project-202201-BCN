import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import { TripCardComponent } from "../components/TripCardComponent/TripCardComponent";
import { RootState } from "../redux/store";
import { getThisTripThunk } from "../redux/thunks/tripsThunks";

const ShowTripDetailPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const tripDetail = useSelector((state: RootState) => state.getTrips);

  useEffect(() => {
    dispatch(getThisTripThunk(trip));
  }, [dispatch]);

  return (
    <>
      <HeaderComponent />
      <TripCardComponent trip={trip} />
    </>
  );
};

export default ShowTripDetailPage;
