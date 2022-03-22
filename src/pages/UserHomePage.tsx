import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import { useDispatch, useSelector } from "react-redux";

import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { cleanUserAction } from "../redux/actions/actionCreators";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import TripCatwalkComponent from "../components/TripCatwalkComponent/TripCatwalkComponent";
import { getUserTripsThunk } from "../redux/thunks/tripsThunks";
import styled from "styled-components";

const Responsive = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
`;

const UserHomePage = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tripList = useSelector((state: RootState) => state.getTrips);

  useEffect(() => {
    dispatch(getUserTripsThunk);
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
      <Responsive>
        <div className="home-buttons">
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
        </div>
        <div className="column-right">
          <section className="viatges-publicats">
            <h2>Viatges que has publicat</h2>
          </section>
          <TripCatwalkComponent trips={tripList} visibility="user" />
        </div>
      </Responsive>
    </>
  );
};

export default UserHomePage;
