function Checkbox({ value, handleChange }) {
  return (
    <div className="checkbox-container">
      <h5>subscribe to newsletter</h5>
      <input
        type="checkbox"
        className="checkbox-style"
        checked={value}
        onChange={(evt) => {
          handleChange(evt.target.checked, "checkbox");
        }}
      />
    </div>
  );
}

export default Checkbox;
