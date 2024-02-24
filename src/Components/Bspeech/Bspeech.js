import "./Bspeech.scss";

function Bspeech({ text, onClick }) {
  return (
    <div className="speech">
      <button type="submit" className="speech__microphone" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default Bspeech;
