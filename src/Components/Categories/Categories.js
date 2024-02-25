import "./Categories.scss";
import ProgressBar10 from "../ProgressBar10/ProgressBar10";
import { Link } from "react-router-dom";
import BCategories from "../BCategories/BCategories";
import Numbers2 from "../../Assests/icons/numbers2.jpg";
import AnatomyPic from "../../Assests/icons/skeleton.jpg";
import AnimalsPic from "../../Assests/icons/cow.jpg";
import PlantsPic from "../../Assests/icons/plant.png";

export default function Categories() {
  return (
    <div className="categories">
      <ProgressBar10 />
      <div className="categories__box">
        <p className="categories__title">CATEGORIES</p>
      </div>
      <div className="categories__category">
        <Link to="/Categories/Numbers" style={{ textDecoration: "none" }}>
          <BCategories text="Numbers" src={Numbers2} />
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
  );
}
