import {
  ButtonUsuari,
  ButtonGeneric,
  ButtonCreaViatge,
  ButtonDetall,
} from "./ButtonComponent.styles";
import { faUser, faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import {
  faHouseUser,
  faMapLocationDot,
  faMagnifyingGlass,
  faEye,
  faChevronLeft,
  faArrowRightFromBracket,
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
          <FontAwesomeIcon icon={faMapLocationDot} className="icon" />
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
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
        </ButtonCreaViatge>
      )}

      {nature === "detall" && (
        <ButtonDetall
          className={className}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            actionOnClick()
          }
        >
          {text}
          <FontAwesomeIcon icon={faEye} className="icon" />
        </ButtonDetall>
      )}

      {nature === "enrere-crono" && (
        <ButtonDetall
          className={className}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            actionOnClick()
          }
        >
          {text}
          <FontAwesomeIcon icon={faChevronLeft} className="icon" />
        </ButtonDetall>
      )}

      {nature === "tanca-sessio" && (
        <ButtonCreaViatge
          className={className}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            actionOnClick()
          }
        >
          {text}
          <FontAwesomeIcon icon={faArrowRightFromBracket} className="icon" />
        </ButtonCreaViatge>
      )}
    </>
  );
};

export default Button;
