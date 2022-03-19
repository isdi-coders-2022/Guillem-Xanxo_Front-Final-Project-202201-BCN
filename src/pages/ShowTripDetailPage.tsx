import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import { TripCardComponent } from "../components/TripCardComponent/TripCardComponent";
import { RootState } from "../redux/store";
import { getThisTripThunk } from "../redux/thunks/tripsThunks";

const ShowTripDetailPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const tripDetail = useSelector((state: RootState) => state.getTrips[0]);

  useEffect(() => {
    dispatch(getThisTripThunk);
  }, [dispatch]);

  return (
    <>
      <HeaderComponent />
      <TripCardComponent trip={tripDetail} />
    </>
  );
};

export default ShowTripDetailPage;
