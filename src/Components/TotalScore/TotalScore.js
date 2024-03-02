import { useLocation } from "react-router-dom";
import "./TotalScore.scss";
import ProgressBar100 from "../ProgressBar100/ProgressBar100";
import LogoBlack3 from "../../Assests/icons/logoBlack3.png";
import CategoriesLogo from "../../Assests/icons/CategoriesLogo.png";
import { Link } from "react-router-dom";

export default function TotalScore() {
  const location = useLocation();
  const { score } = location.state;
  return (
    <div className="anatomy">
      <div className="categories__container ">
        <div className="home__logoContainer">
          <Link className="home__link1" to="/categories">
            <img className="home__logo" src={LogoBlack3} alt="Logo"></img>
          </Link>
          <ProgressBar100 />
          <Link className="home__link1" to="/categories">
            <img className="home__logo" src={CategoriesLogo} alt="Logo"></img>
          </Link>
        </div>
        <div className="review__box">
          <p className="alphabets__title">SCORE</p>
          <div className="review__score">TOTAL </div>
          <div className="review__score"> {score}/21</div>
        </div>
      </div>
    </div>
  );
}
