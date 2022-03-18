import Button from "../ButtonComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { HeaderComponentStyles } from "./HeaderComponent.styles";

const HeaderComponent = (): JSX.Element => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/usuari/login");
  };

  const goToHome = () => {
    navigate("/usuari/home");
  };

  return (
    <>
      <HeaderComponentStyles>
        <h1 className="title">Transporta't Pallars</h1>
        {localStorage.getItem("tokenKey") ? (
          <Button
            className="button-usuari"
            nature="home"
            actionOnClick={goToHome}
          />
        ) : (
          <Button
            className="button-usuari"
            nature="usuari"
            actionOnClick={goToLogin}
          />
        )}
      </HeaderComponentStyles>
    </>
  );
};

export default HeaderComponent;
