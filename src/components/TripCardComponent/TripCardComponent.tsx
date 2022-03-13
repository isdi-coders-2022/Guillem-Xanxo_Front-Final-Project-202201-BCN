import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Trip } from "../../interfaces/Trip";
import { deleteTripThunk } from "../../redux/thunks/tripsThunks";
import Button from "../ButtonComponent/ButtonComponent";
import { TripCardComponentStyles } from "./TripCardComponent.styles";

interface TripCardComponentProps {
  trip: Trip;
}
export const TripCardComponent = ({
  trip: { origen, desti, places, horaSortida, comentaris, dones, id },
}: TripCardComponentProps): JSX.Element => {
  const location = useLocation();
  const dispatch = useDispatch();

  const deleteTrip = (id: string) => {
    dispatch(deleteTripThunk(id));
  };

  return (
    <>
      <TripCardComponentStyles>
        <div className="trip-card">
          <article className="card-properties_big">
            <article className="card-properties">
              <p className="categoria">Origen:</p>
              <p className="categoria_negreta"> {origen}</p>
            </article>
            <article className="card-properties">
              <p className="categoria">Hora:</p>
              <p className="categoria_negreta"> {horaSortida}</p>
            </article>
          </article>
          <article className="card-properties_big">
            <article className="card-properties">
              <p className="categoria">Destí:</p>
              <p className="categoria_negreta"> {desti}</p>
            </article>
            <article className="card-properties">
              <p className="categoria">Places:</p>
              <p className="categoria_negreta"> {places}</p>
            </article>
          </article>

          {location.pathname === id && (
            <>
              <p className="categoria_negreta">Comentaris:</p>
              <p className="categoria"> {comentaris}</p>
            </>
          )}
          <Button
            type="delete"
            className="delete-button"
            text="Borrar"
            actionOnClick={() => deleteTrip(id)}
          />
          {dones === true && (
            <p className="categoria_negreta">
              Aquest viatge és exclusiu per a passetgeres
            </p>
          )}
        </div>
      </TripCardComponentStyles>
    </>
  );
};
