import { TripCardComponent } from "../TripCardComponent/TripCardComponent";
import { Trip } from "../../interfaces/Trip";

interface TripCatwalkComponentProps {
  trips: Trip[];
}

const TripCatwalkComponent = ({
  trips,
}: TripCatwalkComponentProps): JSX.Element => {
  return (
    <>
      {trips.map((trip: Trip) => (
        <TripCardComponent trip={trip} key={trip.id} />
      ))}
    </>
  );
};

export default TripCatwalkComponent;
