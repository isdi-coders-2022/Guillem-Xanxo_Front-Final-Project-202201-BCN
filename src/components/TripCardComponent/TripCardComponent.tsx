import { useLocation } from "react-router-dom";
import { Trip } from "../../interfaces/Trip";
interface TripCardProps {
  trip: Trip;
}
export const TripCard = ({
  trip: { origen, desti, places, horaSortida, comentaris, dones, id },
}: TripCardProps): JSX.Element => {
  const location = useLocation();

  return (
    <>
      <p className="categoria">Origen:</p>
      <p className="categoria_negreta">{origen}</p>
      <p className="categoria">Destí:</p>
      <p className="categoria_negreta">{desti}</p>
      <p className="categoria">Places:</p>
      <p className="categoria_negreta">{places}</p>
      <p className="categoria">Hora sortida::</p>
      <p className="categoria_negreta">{horaSortida}</p>
      {location.pathname === id && (
        <>
          <p className="categoria_negreta">Comentaris:</p>
          <p className="categoria">{comentaris}</p>
        </>
      )}
      {dones === true && (
        <p className="categoria_negreta">
          Aquest viatge és exclusiu per a passetgeres
        </p>
      )}
    </>
  );
};
