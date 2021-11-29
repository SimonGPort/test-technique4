import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import { useState } from "react";
import { ValidateError } from "./utils/functions";

function App() {
  const [page, setPage] = useState(1);

  const [value, setValue] = useState({
    name: "",
    compagny: "",
    email: "",
    checkbox: false,
  });

  const [error, setError] = useState({
    name: false,
    compagny: false,
    email: false,
  });

  const handleChange = (change, type) => {
    let tempValue = { ...value };
    tempValue[type] = change;
    setValue(tempValue);
  };

  const handleReset = () => {
    setValue({
      name: "",
      compagny: "",
      email: "",
      checkbox: false,
    });
    setError({
      name: false,
      compagny: false,
      email: false,
    });
  };

  const verifyBeforeSubmit = () => {
    const tempError = ValidateError(value);
    if (tempError.success) {
      setPage(2);
    } else {
      setError(tempError.error);
    }
  };

  const handleError = (value, type) => {
    const tempError = { ...error };
    tempError[type] = value;
    setError(tempError);
  };

  return (
    <div className="App">
      {page === 1 && (
        <div className="content">
          <h1>Subscribe</h1>
          <h4>sign up to receive news and updates.</h4>

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

          <Checkbox value={value.checkbox} handleChange={handleChange} />
          <div className="button-container">
            <Button text={"Reset"} handleClick={handleReset} />
            <Button text={"Submit"} handleClick={verifyBeforeSubmit} />
          </div>
        </div>
      )}
      {page === 2 && (
        <div className="confirmation-page">successfully subscribed</div>
      )}
    </div>
  );
}

export default App;
