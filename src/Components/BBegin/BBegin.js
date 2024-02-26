import "./BBegin.scss";

function BBegin({ text, onClick, src }) {
  return (
    <div className="begin">
      <div type="submit" className="Begin__beginButton" onClick={onClick}>
        {text}
        <img src={src} />
      </div>
    </div>
  );
}

export default BBegin;
