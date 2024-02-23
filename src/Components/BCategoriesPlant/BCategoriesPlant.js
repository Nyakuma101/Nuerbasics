import "./BCategoriesPlant.scss";

function BCategoriesPlant({ text }) {
  return (
    <div className="plant">
      <div className="plant_sloth"></div>

      <button type="submit" className="plant__Bcategories">
        {text}
      </button>
      {/* <div className="Plant_sloth"></div> */}
    </div>
  );
}

export default BCategoriesPlant;
