import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllTripsThunk } from "../redux/thunks/tripsThunks";
import Button from "../components/ButtonComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";

const UserHomePage = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTripsThunk);
  }, [dispatch]);

  const navigate = useNavigate();

  const goToCrear = () => {
    navigate("/viatges/crear");
  };

  const goToCerca = () => {
    navigate("/viatges/crono");
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
    </>
  );
};

export default UserHomePage;
