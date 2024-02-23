import "./Categories.scss";
import BCategoriesAnimal from "../BCategoriesAnimal/BCategoriesAnimal";
import BCategoriesPlant from "../BCategoriesPlant/BCategoriesPlant";
import ProgressBar10 from "../ProgressBar10/ProgressBar10";
import { Link } from "react-router-dom";
import BCategoriesAnatomy from "../BCategoriesAnatomy/BCategoriesAnatomy";
import BCategoriesNumbers1 from "../BCategoriesNumbers1/BCategoriesNumbers1";

export default function Categories() {
  return (
    <div className="categories">
      <ProgressBar10 />
      <div className="categories__box">
        <p className="categories__title">CATEGORIES</p>
      </div>
      <div className="categories__category">
        <Link to="/Categories/Numbers">
          <BCategoriesNumbers1 text="Numbers" />
        </Link>

        <Link to="/Categories/Animals">
          <BCategoriesAnimal text="Animals" />
        </Link>

        <Link to="/Categories/Anatomy">
          <BCategoriesAnatomy text="Anatomy" />
        </Link>

        <Link to="/Categories/Plants">
          <BCategoriesPlant text="Plants" />
        </Link>
      </div>
    </div>
  );
}
