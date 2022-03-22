import { ButtonGeneric } from "./ButtonNoActionComponent.styles";

interface ButtonNoActionProps {
  className?: string;
  text?: string;
  type?: string;
  disabled?: boolean;
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
        <ButtonGeneric className={className} disabled={disabled}>
          {text}
        </ButtonGeneric>
      )}
    </>
  );
};

export default ButtonNoAction;
