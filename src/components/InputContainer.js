import Input from "./Input";

function InputContainer({ error, value, handleChange, handleError }) {
  return (
    <div className="input-container">
      <Input
        error={error.name}
        value={value.name}
        placeholder={"Name"}
        handleChange={handleChange}
        type={"name"}
        handleError={handleError}
      />
      <Input
        error={error.compagny}
        value={value.compagny}
        placeholder={"Compagny"}
        handleChange={handleChange}
        type={"compagny"}
        handleError={handleError}
      />
      <Input
        error={error.email}
        value={value.email}
        placeholder={"Email"}
        handleChange={handleChange}
        type={"email"}
        handleError={handleError}
      />
    </div>
  );
}

export default InputContainer;
