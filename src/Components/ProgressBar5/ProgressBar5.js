import "./ProgressBar5.scss";
import Left from "../../Assests/icons/left.png";
import Right from "../../Assests/icons/right.png";

export default function ProgressBar() {
  return (
    <div className="container">
      <label for="five" className="label">
        <img className="label__left" alt="left" src={Left} />
      </label>
      <input
        type="radio"
        className="radio"
        name="progress"
        value="five"
        id="five"
        checked
      />

      {/* <input
          type="radio"
          className="radio"
          name="progress"
          value="fifty"
          id="fifty"
        /> */}
      {/* <label for="fifty" className="label">
        50%
      </label> */}
      {/* <input
          type="radio"
          className="radio"
          name="progress"
          value="seventyfive"
          id="seventyfive"
        /> */}
      {/* <label for="seventyfive" className="label">
        75%
      </label> */}
      {/* <input
          type="radio"
          className="radio"
          name="progress"
          value="onehundred"
          id="onehundred"
        /> */}
      {/* <label for="onehundred" className="label">
        100%
      </label> */}

      <div className="progress">
        <div className="progress-bar"></div>
      </div>

      <label for="twentyfive" className="label">
        <img className="label__right" alt="right" src={Right} />
      </label>
      <input
        type="radio"
        className="radio"
        name="progress"
        value="twentyfive"
        id="twentyfive"
      />
    </div>
  );
}
