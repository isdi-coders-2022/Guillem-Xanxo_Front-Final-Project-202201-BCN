import { useNavigate } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";

const TripsCronoPage = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderComponent actionOnClick={navigate("/viatges/crono")} />

      <p>Trips catwalk</p>
    </>
  );
};

export default TripsCronoPage;
