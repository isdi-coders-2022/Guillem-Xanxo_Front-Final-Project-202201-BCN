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
  alt,
  src,
  disabled,
}: ButtonNoActionProps): JSX.Element => {
  return (
    <>
      {type === "submit" && (
        <ButtonSubmit
          className={className}
          alt={alt}
          src={src}
          disabled={disabled}
        >
          {text}
        </ButtonSubmit>
      )}
    </>
  );
};

export default ButtonNoAction;
