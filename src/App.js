import "./App.css";

import Checkbox from "./components/Checkbox";
import { useState } from "react";
import { ValidateError } from "./utils/functions";
import InputContainer from "./components/InputContainer";
import ButtonContainer from "./components/ButtonContainer";

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

          <InputContainer
            error={error}
            value={value}
            handleChange={handleChange}
            handleError={handleError}
          />

          <Checkbox value={value.checkbox} handleChange={handleChange} />

          <ButtonContainer
            handleReset={handleReset}
            verifyBeforeSubmit={verifyBeforeSubmit}
          />
        </div>
      )}
      {page === 2 && (
        <div className="confirmation-page">successfully subscribed</div>
      )}
    </div>
  );
}

export default App;
