import "./ButtonLetters.scss";

function ButtonLetters({ text, onClick }) {
  return (
    <div>
      <button type="submit" className="letters" onClick={onclick}>
        {text}
      </button>
    </div>
  );
}

export default ButtonLetters;
