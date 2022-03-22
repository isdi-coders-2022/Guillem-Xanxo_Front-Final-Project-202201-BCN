import { SyntheticEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Usuari } from "../../interfaces/Usuari";
import { RootState } from "../../redux/store";
import { loginThunk } from "../../redux/thunks/userThunks";
import Button from "../Button/Button";
import ButtonNoAction from "../ButtonNoAction/ButtonNoAction";
import FormContainer from "./LoginComponent.styles";

const LoginComponent = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);

  const goToCrono = () => {
    navigate(`/viatges/crono`);
  };

  const blankFields = {
    usuari: "",
    contrassenya: "",
  };

  const [formData, setFormData] = useState<Usuari>(blankFields);

  const isFilled = formData.usuari !== "" && formData.contrassenya !== "";

  useEffect(() => {
    if (user.usuari) {
      navigate("/usuari/home");
    }
  });

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
    dispatch(loginThunk(formData));
    resetForm();
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
        <ButtonNoAction
          type="submit"
          className="submit-button"
          disabled={!isFilled}
          text="Entra"
        ></ButtonNoAction>
        <a className="text_registre" href="/usuari/register">
          Registra't
        </a>
        <Button
          nature="enrere-crono"
          className="enrere-crono-button"
          text="Enrere"
          actionOnClick={goToCrono}
        />
      </FormContainer>
    </>
  );
};

export default LoginComponent;
