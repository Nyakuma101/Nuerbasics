import "./BNumbersPictureGreen.scss";

function BNumbersPictureGreen({ text, src }) {
  return (
    <div className="green">
      <div type="submit" className="green__npicture">
        <div className="green__nuer">{text}</div>
        <img src={src} style={{ width: "150px", height: "150px" }} />
      </div>
    </div>
  );
}

export default BNumbersPictureGreen;
