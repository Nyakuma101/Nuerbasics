import "./ButtonLetters.scss";

function ButtonLetters({ text, onClick }) {
  return (
    <div>
      <div type="submit" className="letters" onClick={onclick}>
        {text}
      </div>
    </div>
  );
}

export default ButtonLetters;
