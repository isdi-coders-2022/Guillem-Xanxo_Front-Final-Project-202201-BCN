import { ButtonSubmit } from "./ButtonNoActionComponent.styles";

interface ButtonNoActionProps {
  className?: string;
  text?: string;
  type?: string;
  alt?: string;
  disabled?: boolean;
  src?: string;
}

const ButtonNoAction = ({
  className,
  text,
  type,
  disabled,
}: ButtonNoActionProps): JSX.Element => {
  return (
    <>
      {type === "submit" && (
        <ButtonSubmit className={className} disabled={disabled}>
          {text}
        </ButtonSubmit>
      )}
    </>
  );
};

export default ButtonNoAction;