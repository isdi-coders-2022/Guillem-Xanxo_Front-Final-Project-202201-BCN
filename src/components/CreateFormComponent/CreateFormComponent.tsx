import Button from "../ButtonComponent/ButtonComponent";

const CreateFormComponent = () => {
  const blankFields = {
    origen: "",
    desti: "",
    data: "",
    places: "",
    horaSortida: "",
    comentaris: "",
    dones: "",
  };

  const isFilled =
    formData.origen !== "" &&
    formData.desti !== "" &&
    formData.data !== "" &&
    formData.places !== "" &&
    formData.horaSortida !== "";

  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  const resetForm = () => {
    setFormData(blankFields);
  };

  return (
    <>
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
        <label htmlFor="comentaris">Comentaris: </label>
        <input
          type="text"
          id="comentaris"
          className="form-input"
          value={formData.comentaris}
          onChange={changeData}
        />
      </div>
      <Button
        type="submit"
        disabled={!isFilled}
        src={"Confirm"}
        alt="Crea el viatge"
      ></Button>
    </>
  );
};

export default CreateFormComponent;
