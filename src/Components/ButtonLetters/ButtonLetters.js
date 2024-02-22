import "./ButtonLetters.scss";

function ButtonLetters({ text }) {
  return (
    <div>
      <button type="submit" id="letters">
        {text}
      </button>
    </div>
  );
}

export default ButtonLetters;
