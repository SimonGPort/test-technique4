function Button({ text, handleClick }) {
  return (
    <>
      <button
        className="button-style"
        onClick={() => {
          handleClick();
        }}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
