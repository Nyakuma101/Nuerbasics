import "./ProgressBar20.scss";
import Left from "../../Assests/icons/left.png";
import Right from "../../Assests/icons/right.png";
import { Link } from "react-router-dom";

export default function ProgressBar20() {
  return (
    <div className="container">
      <label for="thirty" className="label">
        <Link to="/Categories">
          <img className="label__left" alt="left" src={Left} />
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
      {/* <label for="twenty" className="label">
        <Link to="/Categories/:Animals">
          <img className="label__right" alt="right" src={Right} />
        </Link>
      </label> */}
    </div>
  );
}
