import "./ProgressBar5.scss";
import Left from "../../Assests/icons/left.png";
import Right from "../../Assests/icons/right.png";
import { Link } from "react-router-dom";

export default function ProgressBar5() {
  return (
    <div className="container">
      <label for="five" className="label">
        <Link to="/">
          <img className="label__left" alt="left" src={Left} />
        </Link>
      </label>
      <input
        type="radio"
        className="radio"
        name="progress"
        value="five"
        id="five"
        checked
      />

      <div className="progress">
        <div className="progress-bar"></div>
      </div>

      <label for="twentyfive" className="label">
        <Link to="/Categories">
          <img className="label__right" alt="right" src={Right} />
        </Link>
      </label>
    </div>
  );
}
