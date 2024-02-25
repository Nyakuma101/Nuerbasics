import "./BNumbersPictureGreen.scss";

function BNumbersPictureGreen({ text, src }) {
  return (
    <div className="green">
      <div type="submit" className="green__npicture">
        <div className="green__nuer">{text}</div>
        <img src={src} />
      </div>
    </div>
  );
}

export default BNumbersPictureGreen;
