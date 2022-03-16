import { ButtonUsuari } from "./ButtonComponent.styles";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
  className: string;
  text: string;
  type: string;
  disabled?: boolean;
  actionOnClick: () => void;
}

const Button = ({
  className,
  actionOnClick,
  text,
  type,
  disabled,
}: ButtonProps): JSX.Element => {
  return (
    <>
      {type === "usuari" && (
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

      {type === "delete" && (
        <ButtonUsuari
          className={className}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            actionOnClick()
          }
        >
          {text}
        </ButtonUsuari>
      )}

      {type === "crear-viatge" && (
        <ButtonUsuari
          className={className}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            actionOnClick()
          }
        >
          {text}
        </ButtonUsuari>
      )}

      {type === "submit" && (
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
