import "./BNumbersPicture.scss";

function BNumbersPicture({ text }) {
  return (
    <div className="Numpictures">
      <button type="submit" className="Numpictures__npicture">
        {text}
      </button>
    </div>
  );
}

export default BNumbersPicture;
