import "./BCategoriesAnimal.scss";

function BCategoriesAnimal({ text }) {
  return (
    <div className="animal">
      <button type="submit" className="animal__Bcategories">
        {text}
      </button>
    </div>
  );
}

export default BCategoriesAnimal;
