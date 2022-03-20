import { TripCardComponent } from "../TripCardComponent/TripCardComponent";
import { TripReceived } from "../../interfaces/TripReceived";

interface TripCatwalkComponentProps {
  trips: TripReceived[];
}

const TripCatwalkComponent = ({
  trips,
}: TripCatwalkComponentProps): JSX.Element => {
  const dates = trips.entries();

  return (
    <>
      {trips.map((trip: TripReceived) => (
        <TripCardComponent trip={trip} key={trip.id} />
      ))}
    </>
  );
};

export default TripCatwalkComponent;
