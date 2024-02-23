import "./BCategoriesAnatomy.scss";

function BCategoriesAnatomy({ text }) {
  return (
    <div className="anatomy">
      <div className="anatomy_sloth"></div>
      <button type="submit" className="anatomy__Bcategories">
        {text}
      </button>
    </div>
  );
}

export default BCategoriesAnatomy;
