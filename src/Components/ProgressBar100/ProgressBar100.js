import "./ProgressBar100.scss";
import Left from "../../Assests/icons/left.png";
import { Link } from "react-router-dom";

export default function ProgressBar100() {
  return (
    <div className="container">
      <label for="oneHundred" className="label">
        <Link to="/Categories">
          <img className="label__left" alt="left" src={Left} />
        </Link>
      </label>
      <input
        type="radio"
        className="radio"
        name="progress"
        value="oneHundred"
        id="oneHundred"
        checked
      />
      <div className="progress">
        <div className="progress-bar"></div>
      </div>
    </div>
  );
}
