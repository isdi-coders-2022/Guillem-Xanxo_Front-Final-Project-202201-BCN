import { TripCardComponent } from "../TripCardComponent/TripCardComponent";
import { TripReceived } from "../../interfaces/TripReceived";
import styled from "styled-components";

interface TripCatwalkComponentProps {
  trips: TripReceived[];
  visibility: string;
}

const TripCatwalk = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TripCatwalkComponent = ({
  trips,
  visibility,
}: TripCatwalkComponentProps): JSX.Element => {
  return (
    <TripCatwalk>
      {trips.map((trip: TripReceived) => (
        <TripCardComponent trip={trip} key={trip.id} visibility={visibility} />
      ))}
    </TripCatwalk>
  );
};

export default TripCatwalkComponent;
