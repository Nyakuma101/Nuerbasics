import { useLocation } from "react-router-dom";
import "./TotalScore.scss";

import ProgressBar100 from "../ProgressBar100/ProgressBar100";

export default function TotalScore() {
  const location = useLocation();
  const { score } = location.state;
  return (
    <div className="review">
      <ProgressBar100 />

      <div className="review__box">
        <p className="review__title">SCORE</p>
      </div>
      <div className="review__score">Numbers = {score}/21</div>
    </div>
  );
}
