import "./BFunFacts.scss";

function BFunFacts({ text, onClick, className }) {
  return (
    <div className="funFacts">
      <button type="submit" onClick={onClick} className={className}>
        {text}
      </button>
    </div>
  );
}

export default BFunFacts;
