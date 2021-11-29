import Button from "./Button";

function ButtonContainer({ handleReset, verifyBeforeSubmit }) {
  return (
    <div className="button-container">
      <Button text={"Reset"} handleClick={handleReset} />
      <Button text={"Submit"} handleClick={verifyBeforeSubmit} />
    </div>
  );
}

export default ButtonContainer;
