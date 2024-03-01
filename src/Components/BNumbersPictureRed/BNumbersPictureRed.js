import "./BNumbersPictureRed.scss";

function BNumbersPictureRed({ text, src }) {
  return (
    <div className="Red">
      <div type="submit" className="Red__nRpicture">
        <div className="Red__nuer">{text}</div>
        <img src={src} style={{ width: "6rem", height: "6rem" }} />
      </div>
    </div>
  );
}

export default BNumbersPictureRed;
