import "./BCategoriesNumbers.scss";

function BCategoriesNumbers({ text }) {
  return (
    <div className="numbers">
      <div className="numbers_sloth"></div>
      <button type="submit" className="numbers__Bcategories">
        {text}
      </button>
    </div>
  );
}

export default BCategoriesNumbers;
