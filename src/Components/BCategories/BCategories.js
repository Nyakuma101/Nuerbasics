import "./BCategories.scss";

function BCategories({ text, src }) {
  return (
    <div className="list">
      <div type="submit" className="list__listCategories">
        <img src={src} style={{ width: "100px", height: "100px" }} />
        {text}
      </div>
    </div>
  );
}

export default BCategories;
