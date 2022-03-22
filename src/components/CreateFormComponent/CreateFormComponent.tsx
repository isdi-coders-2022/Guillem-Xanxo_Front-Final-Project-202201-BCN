import { useState, SyntheticEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Trip } from "../../interfaces/Trip";
import { createTripThunk } from "../../redux/thunks/tripsThunks";
import ButtonNoAction from "../ButtonNoAction/ButtonNoAction";
import FormContainer from "./CreateFormComponent.styles";

const CreateFormComponent = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const blankFields = {
    origen: "",
    desti: "",
    data: "",
    places: "",
    horaSortida: "",
    comentaris: "",
    dones: "false",
    id: "0",
  };

  const [formData, setFormData] = useState<Trip>(blankFields);

  const isFilled =
    formData.origen !== "" &&
    formData.desti !== "" &&
    formData.data !== "" &&
    formData.places !== "" &&
    parseInt(formData.places) < 9 &&
    parseInt(formData.places) > 0 &&
    formData.horaSortida !== "";

  const changeData = (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFormData({
      ...formData,
      [event.target.id]:
        event.target.type === "checkbox"
          ? (event as React.ChangeEvent<HTMLInputElement>).target.checked
          : event.target.value,
    });
  };

  const resetForm = () => {
    setFormData(blankFields);
  };

  const onFormSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(createTripThunk(formData));
    resetForm();
    navigate("/usuari/home");
  };

  return (
    <>
      <FormContainer onSubmit={onFormSubmit} autoComplete="off">
        <div className="form-group">
          <label htmlFor="origen">Origen: </label>
          <input
            type="text"
            id="origen"
            className="form-input"
            value={formData.origen}
            onChange={changeData}
            maxLength={20}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desti">Destí: </label>
          <input
            type="text"
            id="desti"
            className="form-input"
            value={formData.desti}
            onChange={changeData}
            maxLength={20}
          />
        </div>
        <div className="form-group">
          <label htmlFor="places">Places: </label>
          <input
            type="number"
            id="places"
            className="form-input"
            value={formData.places}
            onChange={changeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="horaSortida">Hora de sortida: </label>
          <input
            type="time"
            id="horaSortida"
            className="form-input"
            value={formData.horaSortida}
            onChange={changeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="data">Data: </label>
          <input
            type="date"
            id="data"
            className="form-input"
            value={formData.data}
            onChange={changeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="comentaris">Comentaris: </label>
          <input
            type="text"
            id="comentaris"
            className="form-input"
            value={formData.comentaris}
            onChange={changeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dones">És exclusiu per dones?: </label>
          <input
            type="checkbox"
            id="dones"
            className="form-input"
            value={formData.dones ? "true" : ""}
            onChange={changeData}
          />
        </div>
        <ButtonNoAction
          type="submit"
          className="submit-button"
          disabled={!isFilled}
          text="Crea viatge"
        ></ButtonNoAction>
      </FormContainer>
    </>
  );
};

export default CreateFormComponent;
