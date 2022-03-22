import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { TripReceived } from "../../interfaces/TripReceived";
import { deleteTripThunk } from "../../redux/thunks/tripsThunks";
import Button from "../ButtonComponent/ButtonComponent";
import { TripCardComponentStyles } from "./TripCardComponent.styles";

interface TripCardComponentProps {
  trip: TripReceived;
  visibility: String;
}
export const TripCardComponent = ({
  trip: { origen, desti, places, horaSortida, comentaris, dones, id, data },
  visibility,
}: TripCardComponentProps): JSX.Element => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteTrip = (id: string) => {
    dispatch(deleteTripThunk(id));
  };

  const goToDetall = () => {
    navigate(`/viatges/detall/${id}`);
  };

  const goToCrono = () => {
    navigate(`/viatges/crono`);
  };

  return (
    <>
      <TripCardComponentStyles>
        <div className="trip-card">
          <section className="trip-info">
            <article className="card-properties">
              <p className="categoria">Data:</p>
              <p className="categoria_negreta"> {data}</p>
            </article>

            <article className="card-properties">
              <p className="categoria">Origen:</p>
              <p className="categoria_negreta"> {origen}</p>
            </article>
            <article className="card-properties">
              <p className="categoria">Destí:</p>
              <p className="categoria_negreta"> {desti}</p>
            </article>
            <article className="card-properties">
              <p className="categoria">Hora:</p>
              <p className="categoria_negreta"> {horaSortida}</p>
            </article>

            <article className="card-properties">
              <p className="categoria">Places:</p>
              <p className="categoria_negreta"> {places}</p>
            </article>
          </section>
          <section className="trip-buttons">
            {visibility === "user" && (
              <Button
                nature="delete"
                className="delete-button"
                text="Esborra"
                actionOnClick={() => deleteTrip(id)}
              />
            )}

            {location.pathname === `/viatges/detall/${id}` ? (
              <Button
                nature="enrere-crono"
                className="enrere-crono-button"
                text="Enrere"
                actionOnClick={goToCrono}
              />
            ) : (
              <Button
                nature="detall"
                className="detall-button"
                text="Més info"
                actionOnClick={goToDetall}
              />
            )}
          </section>
        </div>
        {location.pathname === `/viatges/detall/${id}` && (
          <>
            <p className="categoria_negreta">Comentaris:</p>
            <p className="categoria"> {comentaris}</p>
          </>
        )}
        {dones === true && (
          <p className="categoria_negreta">
            Aquest viatge és exclusiu per a passetgeres
          </p>
        )}
      </TripCardComponentStyles>
    </>
  );
};
