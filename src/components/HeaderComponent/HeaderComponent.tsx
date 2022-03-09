import Button from "../ButtonComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";

const HeaderComponent = (): JSX.Element => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/viatges/crono");
  };

  return (
    <>
      <h1 className="title">Transporta't Pallars</h1>
      <Button
        className="button-usuari"
        type="usuari"
        text=""
        actionOnClick={goToHome}
      />
    </>
  );
};

export default HeaderComponent;
