import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../redux/store";
import { getAllTripsThunk } from "../redux/thunks/tripsThunks";
import TripCatwalkComponent from "../components/TripCatwalkComponent/TripCatwalkComponent";
import Button from "../components/ButtonComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";

const ShowTripsPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const tripList = useSelector((state: RootState) => state.getTrips);

  useEffect(() => {
    dispatch(getAllTripsThunk);
  }, [dispatch]);

  const navigate = useNavigate();

  const goToCrear = () => {
    navigate("/viatges/crear");
  };

  return (
    <>
      <HeaderComponent />
      <Button
        nature="crear-viatge"
        text="Crear viatge"
        className="crear-viatge-button"
        actionOnClick={goToCrear}
      />
      <TripCatwalkComponent trips={tripList} />
    </>
  );
};

export default ShowTripsPage;
