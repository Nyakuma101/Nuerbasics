import ProgressBar20 from "../ProgressBar20/ProgressBar20";
import "./Numbers.scss";
import { Link } from "react-router-dom";
export default function Numbers() {
  return (
    <div className="numbers">
      <ProgressBar20 />
      <div className="numbers__box">
        <p className="numbers__title">NUMBERS</p>
      </div>
    </div>
  );
}
