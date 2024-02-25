import "./BBox.scss";

function BBox({ text, onClick, className }) {
  return (
    <div className="box">
      <button type="submit" onClick={onClick} className={className}>
        {text}
      </button>
    </div>
  );
}

export default BBox;
