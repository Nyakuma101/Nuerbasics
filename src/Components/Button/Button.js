import "./Button.scss";

function Button({ text }) {
  return (
    <>
      <button className="header__upload" type="submit" id="button">
        {text}
      </button>
      <div class="container">
        <a href="#" class="button type--A">
          <div class="button__line"></div>
          <div class="button__line"></div>
          <span class="button__text">A</span>
          <div class="button__drow1"></div>
          <div class="button__drow2"></div>
        </a>
      </div>
    </>
  );
}

export default Button;
