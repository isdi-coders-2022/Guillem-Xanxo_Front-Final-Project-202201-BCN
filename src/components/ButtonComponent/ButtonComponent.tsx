import { ButtonUsuari } from "./ButtonComponent.styles";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
  className: string;
  text: string;
  type: string;
  actionOnClick: () => void;
}

const Button = ({
  className,
  actionOnClick,
  text,
  type,
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
    </>
  );
};

export default Button;
