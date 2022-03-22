import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { HeaderComponentStyles } from "./HeaderComponent.styles";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const HeaderComponent = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);
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
        {user.usuari ? (
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
