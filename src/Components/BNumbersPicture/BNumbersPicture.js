import "./BNumbersPicture.scss";

function BNumbersPicture({ text, onClick, src, className }) {
  return (
    <div className="numpictures">
      <div type="submit" onClick={onClick} className={className}>
        <div className="numpictures__nuer">{text}</div>
        <img src={src} style={{ width: "6rem", height: "6rem" }} />
      </div>
    </div>
  );
}

export default BNumbersPicture;
