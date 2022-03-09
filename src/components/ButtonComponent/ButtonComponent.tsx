import { ButtonUsuari } from "./ButtonComponent.styles";

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
        </ButtonUsuari>
      )}
    </>
  );
};

export default Button;
