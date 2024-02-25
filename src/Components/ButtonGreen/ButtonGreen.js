import "./BBoxGreen.scss";

function BBox({ text, onClick }) {
  return (
    <div className="green">
      <button type="submit" className="green__correctGreen" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default BBox;
