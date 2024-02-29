import "./BCategories.scss";

function BCategories({ text, src }) {
  return (
    <div className="list">
      <div type="submit" className="list__listCategories">
        <img src={src} style={{ width: "4.5rem", height: "4.5rem" }} />
        {text}
      </div>
    </div>
  );
}

export default BCategories;
