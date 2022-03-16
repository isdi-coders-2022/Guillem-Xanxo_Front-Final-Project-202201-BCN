import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Usuari } from "../../interfaces/Usuari";
import Button from "../ButtonComponent/ButtonComponent";

const LoginComponent = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/viatges/crono");
  };

  const blankFields = {
    nom: "",
    usuari: "",
    contrassenya: "",
    telefon: 0,
  };

  const [formData, setFormData] = useState<Usuari>(blankFields);

  const isFilled =
    formData.nom !== "" &&
    formData.usuari !== "" &&
    formData.contrassenya !== "" &&
    formData.telefon !== 0;

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
  };

  return (
    <>
      <form onSubmit={onFormSubmit} autoComplete="off">
        <div className="form-group">
          <label htmlFor="usuari">Usuari: </label>
          <input
            type="text"
            id="usuari"
            className="form-input"
            value={formData.usuari}
            onChange={changeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contrassenya">Contrassenya: </label>
          <input
            type="text"
            id="contrassenya"
            className="form-input"
            value={formData.contrassenya}
            onChange={changeData}
          />
        </div>
        <Button
          className="button-login"
          type="submit"
          text="Entra"
          disabled={!isFilled}
          actionOnClick={goToHome}
        />
      </form>
    </>
  );
};

export default LoginComponent;
