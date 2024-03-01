import "./Categories.scss";
import ProgressBar10 from "../ProgressBar10/ProgressBar10";

import { Link } from "react-router-dom";
import BCategories from "../BCategories/BCategories";
import Numbers2 from "../../Assests/icons/numbers2.png";
import AnatomyPic from "../../Assests/icons/skeleton.png";
import AnimalsPic from "../../Assests/icons/cow.png";
import PlantsPic from "../../Assests/icons/plant.png";
import LogoBlack3 from "../../Assests/icons/logoBlack3.png";
import CategoriesLogo from "../../Assests/icons/CategoriesLogo.png";

export default function Categories() {
  return (
    <div className="categories">
      <div className="categories__container ">
        <div className="home__logoContainer">
          <Link className="home__link1" to="/">
            <img className="home__logo" src={LogoBlack3} alt="Logo"></img>
          </Link>
          <ProgressBar10 />
          <Link className="home__link1" to="/categories">
            <img className="home__logo" src={CategoriesLogo} alt="Logo"></img>
          </Link>
        </div>

        <div className="alphabets__box">
          <p className="alphabets__title">CATEGORIES</p>
          {/* <p className="alphabets__alpT"> ALPHABET</p> */}
        </div>

        <div className="categories__category">
          <Link to="/Categories/Numbers" style={{ textDecoration: "none" }}>
            <BCategories className="categoi" text="Numbers" src={Numbers2} />
          </Link>

          <Link to="/Categories/Animals" style={{ textDecoration: "none" }}>
            <BCategories text="Animals" src={AnimalsPic} />
          </Link>

          <Link to="/Categories/Anatomy" style={{ textDecoration: "none" }}>
            <BCategories text="Anatomy" src={AnatomyPic} />
          </Link>

          <Link to="/Categories/Plants" style={{ textDecoration: "none" }}>
            <BCategories text="Plants" src={PlantsPic} />
          </Link>
        </div>
      </div>
    </div>
  );
}
