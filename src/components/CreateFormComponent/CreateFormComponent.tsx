import { useState, SyntheticEvent } from "react";
import { useDispatch } from "react-redux";
import { Trip } from "../../interfaces/Trip";
import { createTripThunk } from "../../redux/thunks/tripsThunks";
import ButtonNoAction from "../ButtonNoActionComponent/ButtonNoActionComponent";

const CreateFormComponent = (): JSX.Element => {
  const dispatch = useDispatch();

  const blankFields = {
    origen: "",
    desti: "",
    data: "",
    places: 0,
    horaSortida: 0,
    comentaris: "",
    dones: false,
    id: "0",
  };

  const [formData, setFormData] = useState<Trip>(blankFields);

  const isFilled =
    formData.origen !== "" &&
    formData.desti !== "" &&
    formData.data !== "" &&
    formData.places !== 0 &&
    formData.horaSortida !== 0;

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
    console.log(formData);
    Date.parse(formData.data);
    console.log(formData);
    dispatch(createTripThunk(formData));
    resetForm();
  };

  return (
    <>
      <form onSubmit={onFormSubmit} autoComplete="off">
        <div className="form-group">
          <label htmlFor="origen">Origen: </label>
          <input
            type="text"
            id="origen"
            className="form-input"
            value={formData.origen}
            onChange={changeData}
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

        <ButtonNoAction
          type="submit"
          className="submit-button"
          disabled={!isFilled}
          text="Crea viatge"
        ></ButtonNoAction>
      </form>
    </>
  );
};

export default CreateFormComponent;
