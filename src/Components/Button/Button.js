import "./Button.scss";

function Button({ text }) {
  return (
    <div>
      <button className="header__upload" type="submit" id="button">
        {text}
      </button>
    </div>
  );
}

export default Button;
