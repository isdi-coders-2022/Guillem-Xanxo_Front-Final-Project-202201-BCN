import {
  ButtonUsuari,
  ButtonDelete,
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
          aria-label="Entra com a usuari"
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
          aria-label="Espai d'usuari"
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
        <ButtonDelete
          className={className}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            actionOnClick()
          }
        >
          {text}
          <FontAwesomeIcon icon={faCircleXmark} className="icon" />
        </ButtonDelete>
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
