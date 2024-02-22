import "./Categories.scss";
import ButtonCategories from "./../ButtonCategories/ButtonCategories";

export default function Categories() {
  return (
    <div className="categories">
      <div className="categories__box">
        <p className="categories__title">CATEGORIES</p>
      </div>
      <div className="categories__category">
        <image className="categories__numbers"></image>

        <ButtonCategories text="Numbers"></ButtonCategories>
        <ButtonCategories text="Animals"></ButtonCategories>
        <ButtonCategories text="Anatomy"></ButtonCategories>
        <ButtonCategories text="Plants"></ButtonCategories>
      </div>
    </div>
  );
}
