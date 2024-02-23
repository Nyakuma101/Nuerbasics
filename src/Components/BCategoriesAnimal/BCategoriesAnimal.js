import "./BCategoriesAnimal.scss";

function BCategoriesAnimal({ text }) {
  return (
    <div className="animal">
      <div className="animal_sloth"></div>

      <button type="submit" className="animal__Bcategories">
        {text}
      </button>
      {/* <div className="animal_sloth"></div> */}
    </div>
  );
}

export default BCategoriesAnimal;
