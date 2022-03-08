import { ButtonUsuari } from "./ButtonComponent.styles";

interface ButtonProps {
  className: string;
  text: string;
  type: string;
  actionOnClick: (goto: string) => void;
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
          onClick={(): UIEvent => {
            actionOnClick;
          }}
        >
          {text}
        </ButtonUsuari>
      )}
    </>
  );
};

export default Button;
