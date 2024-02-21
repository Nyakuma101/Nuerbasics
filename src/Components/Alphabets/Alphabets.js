import "./Alphabets.scss";
import Button from "../Button/Button";

export default function Alphabets() {
  return (
    <div className="alphabets">
      <div className="alphabets_facts">
        <h1>Thok Naath Alphabet</h1>
      </div>
      <div>
        <div className="alphabets__button">
          <Button text="A" className="" type="text" />
        </div>
      </div>
    </div>
  );
}
