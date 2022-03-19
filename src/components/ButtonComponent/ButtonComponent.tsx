import {
  ButtonUsuari,
  ButtonGeneric,
  ButtonCreaViatge,
} from "./ButtonComponent.styles";
import { faUser, faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import {
  faHouseUser,
  faMapLocationDot,
  faMagnifyingGlass,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
  className: string;
  text?: string;
  nature: string;
  actionOnClick: () => void;
}

const Button = ({
  className,
  actionOnClick,
  text,
  nature,
}: ButtonProps): JSX.Element => {
  return (
    <>
      {nature === "usuari" && (
        <ButtonUsuari
          className={className}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            actionOnClick()
          }
        >
          {text}
          <FontAwesomeIcon icon={faUser} />
        </ButtonUsuari>
      )}

      {nature === "home" && (
        <ButtonUsuari
          className={className}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            actionOnClick()
          }
        >
          {text}
          <FontAwesomeIcon icon={faHouseUser} />
        </ButtonUsuari>
      )}

      {nature === "delete" && (
        <ButtonGeneric
          className={className}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            actionOnClick()
          }
        >
          {text}
          <FontAwesomeIcon icon={faCircleXmark} />
        </ButtonGeneric>
      )}

      {nature === "crear-viatge" && (
        <ButtonCreaViatge
          className={className}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            actionOnClick()
          }
        >
          {text}
          <FontAwesomeIcon icon={faMapLocationDot} />
        </ButtonCreaViatge>
      )}

      {nature === "cerca-viatge" && (
        <ButtonCreaViatge
          className={className}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            actionOnClick()
          }
        >
          {text}
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </ButtonCreaViatge>
      )}

      {nature === "detall" && (
        <ButtonCreaViatge
          className={className}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            actionOnClick()
          }
        >
          {text}
          <FontAwesomeIcon icon={faEye} />
        </ButtonCreaViatge>
      )}
    </>
  );
};

export default Button;
