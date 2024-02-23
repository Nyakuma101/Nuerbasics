import "./Bspeech.scss";

function Bspeech({ text }) {
  return (
    <div className="speech">
      <button type="submit" className="speech__microphone">
        {text}
      </button>
    </div>
  );
}

export default Bspeech;
