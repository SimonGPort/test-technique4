import React from "react";
import { ValidateHandleError } from "../utils/functions";

function Input({ placeholder, handleChange, type, value, error, handleError }) {
  const focusOut = () => {
    const isNoMoreError = ValidateHandleError(value, type);
    if (error && isNoMoreError) {
      handleError(!isNoMoreError, type);
    }
    if (!error && !isNoMoreError) {
      handleError(!isNoMoreError, type);
    }
  };

  return (
    <div>
      <input
        style={{
          borderColor: error ? "red" : "revert",
          borderWidth: error ? "2px" : "revert",
          color: error ? "red" : "revert",
        }}
        value={value}
        className="input-style"
        placeholder={placeholder}
        onChange={(evt) => {
          handleChange(evt.target.value, type);
        }}
        onBlur={() => {
          focusOut();
        }}
      />
      {error && <h6 className="invalid-field">put a valid {type}</h6>}
    </div>
  );
}

export default Input;
