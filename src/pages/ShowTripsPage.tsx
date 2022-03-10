import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import TripCatwalkComponent from "../components/TripCatwalkComponent/TripCatwalkComponent";

const ShowTripsPage = (): JSX.Element => {
  return (
    <>
      <HeaderComponent />
      <TripCatwalkComponent trips={estadotrips} />

      <p>Trips catwalk</p>
    </>
  );
};

export default ShowTripsPage;
