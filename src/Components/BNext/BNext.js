import "./BNext.scss";

function BNext({ text, onClick, src }) {
  return (
    <div className="next">
      <button type="submit" className="next__small" onClick={onClick}>
        {text}
        <img src={src} className="next__images" />
      </button>
    </div>
  );
}

export default BNext;
