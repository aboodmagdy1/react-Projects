function Button({ OnClick, isOpen }) {
  return (
    <button className="btn-toggle" onClick={() => OnClick((open) => !open)}>
      {isOpen ? "–" : "+"}
    </button>
  );
}

export default Button;
