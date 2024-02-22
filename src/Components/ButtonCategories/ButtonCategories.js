import "./ButtonCategories.scss";

function ButtonCategories({ text }) {
  return (
    <div>
      <button type="submit" className="Bcategories">
        {text}
      </button>
    </div>
  );
}

export default ButtonCategories;
