import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import { TripCardComponent } from "../components/TripCardComponent/TripCardComponent";
import { RootState } from "../redux/store";
import { getThisTripThunk } from "../redux/thunks/tripsThunks";

const ShowTripDetailPage = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const tripDetail = useSelector((state: RootState) => state.oneTrip);

  useEffect(() => {
    dispatch(getThisTripThunk(id as string));
  }, [dispatch]);

  return (
    <>
      <HeaderComponent />
      <TripCardComponent trip={tripDetail} />
    </>
  );
};

export default ShowTripDetailPage;
