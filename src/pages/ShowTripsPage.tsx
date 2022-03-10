import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../redux/store";
import { getAllTripsThunk } from "../redux/thunks/tripsThunks";
import TripCatwalkComponent from "../components/TripCatwalkComponent/TripCatwalkComponent";

const ShowTripsPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const tripList = useSelector((state: RootState) => state.trips);

  useEffect(() => {
    dispatch(getAllTripsThunk);
  }, [dispatch]);

  return (
    <>
      <HeaderComponent />
      <TripCatwalkComponent trips={tripList} />
    </>
  );
};

export default ShowTripsPage;
