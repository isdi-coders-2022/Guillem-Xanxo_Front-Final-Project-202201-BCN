import { ButtonUsuari, ButtonGeneric } from "./ButtonComponent.styles";
import { faUser, faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
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
        <ButtonUsuari
          className={className}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            actionOnClick()
          }
        >
          {text}
        </ButtonUsuari>
      )}
    </>
  );
};

export default Button;
