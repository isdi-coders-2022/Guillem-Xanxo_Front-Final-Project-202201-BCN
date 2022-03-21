import { TripCardComponent } from "../TripCardComponent/TripCardComponent";
import { TripReceived } from "../../interfaces/TripReceived";

interface TripCatwalkComponentProps {
  trips: TripReceived[];
  visibility: String;
}

const TripCatwalkComponent = ({
  trips,
  visibility,
}: TripCatwalkComponentProps): JSX.Element => {
  return (
    <>
      {trips.map((trip: TripReceived) => (
        <TripCardComponent trip={trip} key={trip.id} visibility={visibility} />
      ))}
    </>
  );
};

export default TripCatwalkComponent;
