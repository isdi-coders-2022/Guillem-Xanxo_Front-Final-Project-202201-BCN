import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import { useDispatch, useSelector } from "react-redux";

import Button from "../components/ButtonComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { cleanUserAction } from "../redux/actions/actionCreators";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import TripCatwalkComponent from "../components/TripCatwalkComponent/TripCatwalkComponent";

const UserHomePage = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tripList = useSelector((state: RootState) => state.getTrips);

  useEffect(() => {
    dispatch(getAllTripsThunk);
  }, [dispatch]);

  const goToCrear = () => {
    navigate("/viatges/crear");
  };

  const goToCerca = () => {
    navigate("/viatges/crono");
  };

  const tancaSessio = () => {
    localStorage.removeItem("tokenKey");
    dispatch(cleanUserAction());
    navigate("/viatges/crono");
    toast.success("Has tancat sessió");
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
      <Button
        nature="cerca-viatge"
        text="Cerca viatge"
        className="crear-viatge-button"
        actionOnClick={goToCerca}
      />
      <Button
        nature="tanca-sessio"
        text="Tanca sessió"
        className="crear-viatge-button"
        actionOnClick={tancaSessio}
      />
      <TripCatwalkComponent trips={tripList}
    </>
  );
};

export default UserHomePage;
