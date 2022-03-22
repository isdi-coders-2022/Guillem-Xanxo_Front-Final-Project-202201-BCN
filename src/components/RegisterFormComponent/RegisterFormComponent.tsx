import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Usuari } from "../../interfaces/Usuari";
import { registerThunk } from "../../redux/thunks/userThunks";
import Button from "../Button/Button";
import ButtonNoAction from "../ButtonNoAction/ButtonNoAction";
import FormContainer from "./RegisterFormComponent.styles";

const RegisterFormComponent = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate(`/usuari/login`);
  };

  const blankFields = {
    usuari: "",
    contrassenya: "",
    nom: "",
    telefon: "",
  };

  const [formData, setFormData] = useState<Usuari>(blankFields);

  const isFilled =
    formData.usuari !== "" &&
    formData.contrassenya !== "" &&
    formData.nom !== "" &&
    formData.telefon !== "";

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
    dispatch(registerThunk(formData));
    resetForm();
    navigate("/usuari/login");
  };

  return (
    <>
      <FormContainer
        className="container"
        onSubmit={onFormSubmit}
        autoComplete="off"
      >
        <h1>Transporta't Pallars</h1>
        <div className="form-group">
          <label htmlFor="nom">
            Nom: (públic quan es mostren els viatges){" "}
          </label>
          <input
            type="text"
            id="nom"
            className="form-input"
            value={formData.nom}
            onChange={changeData}
          />
        </div>
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
            type="password"
            id="contrassenya"
            className="form-input"
            value={formData.contrassenya}
            onChange={changeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefon">
            Telèfon: (públic quan es mostren els viatges){" "}
          </label>
          <input
            type="text"
            id="telefon"
            className="form-input"
            value={formData.telefon}
            onChange={changeData}
            maxLength={9}
            minLength={8}
          />
        </div>
        <ButtonNoAction
          type="submit"
          className="submit-button"
          disabled={!isFilled}
          text="Registra't"
        ></ButtonNoAction>
        <Button
          nature="enrere-crono"
          className="enrere-crono-button"
          text="Enrere"
          actionOnClick={goToLogin}
        />
      </FormContainer>
    </>
  );
};

export default RegisterFormComponent;
