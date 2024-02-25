import "./ProgressBar10.scss";
import Left from "../../Assests/icons/left.png";
import { Link } from "react-router-dom";

export default function ProgressBar10() {
  return (
    <div className="container">
      <label for="ten" className="label">
        <Link to="/Alphabets">
          <img className="label__left" alt="left" src={Left} />
        </Link>
      </label>
      <input
        type="radio"
        className="radio"
        name="progress"
        value="ten"
        id="ten"
        checked
      />
      <div className="progress">
        <div className="progress-bar"></div>
      </div>
    </div>
  );
}
