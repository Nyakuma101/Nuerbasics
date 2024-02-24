import "./BNumbersPicture.scss";

function BNumbersPicture({ src }) {
  return (
    <div className="Numpictures">
      <div type="submit" className="Numpictures__npicture">
        <img src={src} />
      </div>
    </div>
  );
}

export default BNumbersPicture;
