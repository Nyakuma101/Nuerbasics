import ProgressBar20 from "../ProgressBar20/ProgressBar20";
import BNumbersPicture from "../BNumbersPicture/BNumbersPicture";

import "./Numbers.scss";
import { Link } from "react-router-dom";
import BBox from "../BBox/BBox";

export default function Numbers() {
  return (
    <div className="numbers">
      <ProgressBar20 />

      <div className="numbers__box">
        <p className="numbers__title">NUMBERS</p>
      </div>
      <div className="numbers__pictures"></div>
    </div>
  );
}
