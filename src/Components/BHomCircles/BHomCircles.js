import "./BHomCircles.scss";

function BHomCircles({ text, onClick, src }) {
  return (
    <div className="FactsC">
      <button type="submit" className="FactsC__circle" onClick={onClick}>
        {text}
        <img src={src} />
      </button>
    </div>
  );
}

export default BHomCircles;
