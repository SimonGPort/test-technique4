import React from "react";

function Input({ placeholder, handleChange, type, value }) {
  return (
    <>
      <input
        value={value}
        className="input-style"
        placeholder={placeholder}
        onChange={(evt) => {
          handleChange(evt.target.value, type);
        }}
      />
    </>
  );
}

export default Input;
