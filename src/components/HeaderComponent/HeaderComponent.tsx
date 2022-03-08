import Button from "../ButtonComponent/ButtonComponent";

interface HeaderComponentProps {
  actionOnClick: (goto: string) => void;
}

const HeaderComponent = ({
  actionOnClick,
}: HeaderComponentProps): JSX.Element => {
  return (
    <>
      <h1 className="title">Transporta't Pallars</h1>
      <Button
        className="button-usuari"
        type="usuari"
        text=""
        actionOnClick={actionOnClick}
      />
    </>
  );
};

export default HeaderComponent;
