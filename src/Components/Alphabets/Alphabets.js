import "./Alphabets.scss";
import { Link } from "react-router-dom";
import ButtonLetters from "../ButtonLetters/ButtonLetters";
import ProgressBar from "../ProgressBar/ProgressBar";
import LogoBlack3 from "../../Assests/icons/logoBlack3.png";
import CategoriesLogo from "../../Assests/icons/CategoriesLogo.png";

export default function Alphabets() {
  return (
    <div className="alphabets">
      <div className="home__container ">
        <div className="home__logoContainer">
          <Link className="home__link1" to="/">
            <img className="home__logo" src={LogoBlack3} alt="Logo"></img>
          </Link>
          <ProgressBar />
          <Link className="home__link1" to="/categories">
            <img className="home__logo" src={CategoriesLogo} alt="Logo"></img>
          </Link>
        </div>
        <div className="alphabets__box">
          <p className="alphabets__title">THOK NAATH </p>
          <p className="alphabets__title"> ALPHABET</p>
        </div>

        <div className="alphabets__letters">
          <div className="alphabets__group">
            <ButtonLetters text="a" />
            <p className="alphabets__phonetic">[a]</p>
          </div>
          <div className="alphabets__group">
            <ButtonLetters text="e" />
            <p className="alphabets__phonetic">[ea]</p>
          </div>
          <div className="alphabets__group">
            <ButtonLetters text="i" />
            <p className="alphabets__phonetic">[ee]</p>
          </div>
          <div className="alphabets__group">
            <ButtonLetters text="o" />
            <p className="alphabets__phonetic">[o]</p>
          </div>
          <div className="alphabets__group">
            <ButtonLetters text="u" />
            <p className="alphabets__phonetic">[ou]</p>
          </div>

          <div className="alphabets__group">
            <ButtonLetters text="w" />
            <p className="alphabets__phonetic">[wa]</p>
          </div>
          <div className="alphabets__group">
            <ButtonLetters text="y" />
            <p className="alphabets__phonetic">[ya]</p>
          </div>
          <div className="alphabets__group">
            <ButtonLetters text="b" />
            <p className="alphabets__phonetic">[ba]</p>
          </div>
          <div className="alphabets__group">
            <ButtonLetters text="p" />
            <p className="alphabets__phonetic">[pa]</p>
          </div>
          <div className="alphabets__group">
            <ButtonLetters text="m" />
            <p className="alphabets__phonetic">[ma]</p>
          </div>

          <div className="alphabets__group">
            <ButtonLetters text="n" />
            <p className="alphabets__phonetic">[na]</p>
          </div>
          <div className="alphabets__group">
            <ButtonLetters text="nh" />
            <p className="alphabets__phonetic">[ya]</p>
          </div>
          <div className="alphabets__group">
            <ButtonLetters text="ŋ" />
            <p className="alphabets__phonetic">[ŋa]</p>
          </div>
          <div className="alphabets__group">
            <ButtonLetters text="ny" />
            <p className="alphabets__phonetic">[nya]</p>
          </div>
          <div className="alphabets__group">
            <ButtonLetters text="r" />
            <p className="alphabets__phonetic">[ra]</p>
          </div>

          <div className="alphabets__group">
            <ButtonLetters text="d" />
            <p className="alphabets__phonetic">[da]</p>
          </div>
          <div className="alphabets__group">
            <ButtonLetters text="dh" />
            <p className="alphabets__phonetic">[dha]</p>
          </div>
          <div className="alphabets__group">
            <ButtonLetters text="t" />
            <p className="alphabets__phonetic">[ta]</p>
          </div>
          <div className="alphabets__group">
            <ButtonLetters text="th" />
            <p className="alphabets__phonetic">[tha]</p>
          </div>
          <div className="alphabets__group">
            <ButtonLetters text="l" />
            <p className="alphabets__phonetic">[a]</p>
          </div>

          <div className="alphabets__group">
            <ButtonLetters text="k" />
            <p className="alphabets__phonetic">[la]</p>
          </div>
          <div className="alphabets__group">
            <ButtonLetters text="g" />
            <p className="alphabets__phonetic">[ka]</p>
          </div>
          <div className="alphabets__group">
            <ButtonLetters text="ɣ" />
            <p className="alphabets__phonetic">[ha]</p>
          </div>
          <div className="alphabets__group">
            <ButtonLetters text="c" />
            <p className="alphabets__phonetic">[cha]</p>
          </div>
          <div className="alphabets__group">
            <ButtonLetters text="j" />
            <p className="alphabets__phonetic">[ja]</p>
          </div>

          <div className="alphabets__group">
            <ButtonLetters text="ɛ" />
            <p className="alphabets__phonetic">[e]</p>
          </div>
          <div className="alphabets__group">
            <ButtonLetters text="ä" />
            <p className="alphabets__phonetic">[aee]</p>
          </div>
          <div className="alphabets__group">
            <ButtonLetters text="ɔ" />
            <p className="alphabets__phonetic">[aw]</p>
          </div>
          <div className="alphabets__group">
            <ButtonLetters text="ö" />
            <p className="alphabets__phonetic">[ouw]</p>
          </div>
          <div className="alphabets__group">
            <ButtonLetters text="--" />
            <p className="alphabets__phonetic">[-]</p>
          </div>
        </div>
        <div className="alphabets__youtube">
          <Link to="https://youtu.be/o5mhbANGcaA" className="alphabets__link">
            <p className="alphabets__simpleText">Pronunciation </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
