import Button from "../ButtonComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { HeaderComponentStyles } from "./HeaderComponent.styles";

const HeaderComponent = (): JSX.Element => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/viatges/crono");
  };

  return (
    <>
      <HeaderComponentStyles>
        <h1 className="title">Transporta't Pallars</h1>
        <Button
          className="button-usuari"
          type="usuari"
          text=""
          actionOnClick={goToHome}
        />
      </HeaderComponentStyles>
    </>
  );
};

export default HeaderComponent;
