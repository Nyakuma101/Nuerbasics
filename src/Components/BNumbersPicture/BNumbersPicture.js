import "./BNumbersPicture.scss";

function BNumbersPicture({ text, src }) {
  return (
    <div className="numpictures">
      <div type="submit" className="numpictures__npicture">
        <div className="numpictures__nuer">{text}</div>
        <img src={src} />
      </div>
    </div>
  );
}

export default BNumbersPicture;
