import "./ProgressBar30.scss";
import Left2 from "../../Assests/icons/left2.png";
import Right1 from "../../Assests/icons/Right1.png";
import { Link } from "react-router-dom";

export default function ProgressBar30() {
  return (
    <div className="container">
      <label for="thirty" className="label">
        <Link to="/Alphabets">
          <img className="label__left" alt="left" src={Left2} />
        </Link>
      </label>
      <input
        type="radio"
        className="radio"
        name="progress"
        value="thirty"
        id="thirty"
        checked
      />
      <div className="progress">
        <div className="progress-bar"></div>
      </div>
      <label for="twenty" className="label">
        <Link to="/Categories">
          <img className="label__right" alt="right" src={Right1} />
        </Link>
      </label>
    </div>
  );
}
