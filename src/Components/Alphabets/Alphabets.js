import "./Alphabets.scss";
import { Link } from "react-router-dom";
import Letters from "../ButtonLetters/ButtonLetters";
import ButtonYoutube from "../ButtonYoutube/ButtonYoutube";
import ProgressBar5 from "../ProgressBar5/ProgressBar5";

export default function Alphabets() {
  return (
    <div className="alphabets">
      <ProgressBar5 />
      <div className="alphabets__box">
        <p className="alphabets__title">THOK NAATH </p>
        <p className="alphabets__title"> ALPHABET</p>
      </div>

      <div className="alphabets__letters">
        <div className="alphabets__group">
          <Letters text="a"></Letters>
          <p className="alphabets__phonetic">[a]</p>
        </div>
        <div className="alphabets__group">
          <Letters text="e"></Letters>
          <p className="alphabets__phonetic">[ea]</p>
        </div>
        <div className="alphabets__group">
          <Letters text="i"></Letters>
          <p className="alphabets__phonetic">[ee]</p>
        </div>
        <div className="alphabets__group">
          <Letters text="o"></Letters>
          <p className="alphabets__phonetic">[o]</p>
        </div>
        <div className="alphabets__group">
          <Letters text="u"></Letters>
          <p className="alphabets__phonetic">[ou]</p>
        </div>

        <div className="alphabets__group">
          <Letters text="w"></Letters>
          <p className="alphabets__phonetic">[wa]</p>
        </div>
        <div className="alphabets__group">
          <Letters text="y"></Letters>
          <p className="alphabets__phonetic">[ya]</p>
        </div>
        <div className="alphabets__group">
          <Letters text="b"></Letters>
          <p className="alphabets__phonetic">[ba]</p>
        </div>
        <div className="alphabets__group">
          <Letters text="p"></Letters>
          <p className="alphabets__phonetic">[pa]</p>
        </div>
        <div className="alphabets__group">
          <Letters text="m"></Letters>
          <p className="alphabets__phonetic">[ma]</p>
        </div>

        <div className="alphabets__group">
          <Letters text="n"></Letters>
          <p className="alphabets__phonetic">[na]</p>
        </div>
        <div className="alphabets__group">
          <Letters text="nh"></Letters>
          <p className="alphabets__phonetic">[ya]</p>
        </div>
        <div className="alphabets__group">
          <Letters text="ŋ"></Letters>
          <p className="alphabets__phonetic">[ŋa]</p>
        </div>
        <div className="alphabets__group">
          <Letters text="ny"></Letters>
          <p className="alphabets__phonetic">[nya]</p>
        </div>
        <div className="alphabets__group">
          <Letters text="r"></Letters>
          <p className="alphabets__phonetic">[ra]</p>
        </div>

        <div className="alphabets__group">
          <Letters text="d"></Letters>
          <p className="alphabets__phonetic">[da]</p>
        </div>
        <div className="alphabets__group">
          <Letters text="dh"></Letters>
          <p className="alphabets__phonetic">[dha]</p>
        </div>
        <div className="alphabets__group">
          <Letters text="t"></Letters>
          <p className="alphabets__phonetic">[ta]</p>
        </div>
        <div className="alphabets__group">
          <Letters text="th"></Letters>
          <p className="alphabets__phonetic">[tha]</p>
        </div>
        <div className="alphabets__group">
          <Letters text="l"></Letters>
          <p className="alphabets__phonetic">[a]</p>
        </div>

        <div className="alphabets__group">
          <Letters text="k"></Letters>
          <p className="alphabets__phonetic">[la]</p>
        </div>
        <div className="alphabets__group">
          <Letters text="g"></Letters>
          <p className="alphabets__phonetic">[ka]</p>
        </div>
        <div className="alphabets__group">
          <Letters text="Ɣ"></Letters>
          <p className="alphabets__phonetic">[ha]</p>
        </div>
        <div className="alphabets__group">
          <Letters text="c"></Letters>
          <p className="alphabets__phonetic">[cha]</p>
        </div>
        <div className="alphabets__group">
          <Letters text="j"></Letters>
          <p className="alphabets__phonetic">[ja]</p>
        </div>

        <div className="alphabets__group">
          <Letters text="ɛ̈"></Letters>
          <p className="alphabets__phonetic">[e]</p>
        </div>
        <div className="alphabets__group">
          <Letters text="ä"></Letters>
          <p className="alphabets__phonetic">[aee]</p>
        </div>
        <div className="alphabets__group">
          <Letters text="Ɔ"></Letters>
          <p className="alphabets__phonetic">[aw]</p>
        </div>
        <div className="alphabets__group">
          <Letters text="ö"></Letters>
          <p className="alphabets__phonetic">[ouw]</p>
        </div>
        <div className="alphabets__group">
          <Letters text="--"></Letters>
          <p className="alphabets__phonetic">[--]</p>
        </div>
      </div>
      <div className="alphabets__youtube">
        <Link to="https://youtu.be/o5mhbANGcaA">
          <ButtonYoutube text={"Pronunciation? Click Here"} />
        </Link>
      </div>
    </div>
  );
}
