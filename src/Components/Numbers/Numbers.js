import "./Numbers.scss";
import ProgressBar20 from "../ProgressBar20/ProgressBar20";
import { useEffect, useState, useTransition } from "react";
import axios from "axios";
import BNumbersPicture from "../BNumbersPicture/BNumbersPicture";
import BBox from "../BBox/BBox";
import BNext from "../BNext/BNext";
import BNumbersPictureGreen from "../BNumbersPictureGreen/BNumbersPictureGreen";

export default function Numbers() {
  const [anatomyList, setAnatomyList] = useState([]);
  const [showCorrect, setShowCorrect] = useState(false);
  const [showNext, setShowNext] = useState(false);
  // const [showNight, setShowNight] = useState(true);

  const [currentQuestions, setCurrentQuestion] = useState(0);
  const [error, setError] = useState(false);
  // ............................................................
  const getAnatomy = async () => {
    try {
      const anatomyResponse = await axios.get("http://localhost:5050/numbers");
      setAnatomyList(anatomyResponse.data);
      console.log(anatomyResponse.data);
    } catch (error) {
      console.error("this is an error", error);
    }
  };
  useEffect(() => {
    getAnatomy();
  }, []);

  // CORRECT
  // ............................................................
  const correctAnswer = () => {
    setShowCorrect(true);
    setError(false);
  };
  const nextQuestion = () => {
    setCurrentQuestion(currentQuestions + 1);
    setShowCorrect(false);
    setShowNext(false);
  };
  // Function to handle button click
  const handleClick = () => {
    setShowNext(true);
    setError(true);
    // setShowNight(true);
  };
  // ............................................................
  //RIGHT = GREEN
  if (showCorrect) {
    return (
      <div className="anatomy">
        <ProgressBar20 />
        <div className="anatomy__box">
          <p className="anatomy__title">NUMBERS</p>
        </div>
        <BNumbersPictureGreen src={anatomyList[currentQuestions]?.image} />
        <section className="anatomy__content">
          <div className="anatomy__communication">
            <p className="anatomy__thokNaath">
              {anatomyList[currentQuestions]?.thokNaath}
              <p className="anatomy__thokNaathPronunciation">
                {anatomyList[currentQuestions]?.thokNaath_pronunciation}
              </p>
            </p>
          </div>
          {!showNext && (
            <span>
              <div className="anatomy__next">
                <BNext text="NEXT" onClick={nextQuestion} />
              </div>
            </span>
          )}
        </section>
        <div className="anatomy__AllBox">
          <BBox
            // className="anatomy__greenBox"
            // src={anatomyList[currentQuestions]?.english_correct}
            text={anatomyList[currentQuestions]?.English_correct}
            className="box__squares box__squares--correct"
            onClick={correctAnswer}
          />
          <BBox
            className="box__squares "
            text={anatomyList[currentQuestions]?.english_one}
          />
          <BBox
            className="box__squares"
            text={anatomyList[currentQuestions]?.english_two}
          />
          <BBox
            className="box__squares"
            text={anatomyList[currentQuestions]?.english_three}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="numbers">
      <ProgressBar20 />

      <div className="numbers__box">
        <p className="numbers__title">NUMBERS</p>
      </div>

      <BNumbersPicture />
      <section className="anatomy__content">
        <div className="anatomy__communication">
          <p className="anatomy__thokNaath">
            {anatomyList[currentQuestions]?.thokNaath}
            <p className="anatomy__thokNaathPronunciation">
              {anatomyList[currentQuestions]?.thokNaath_pronunciation}
            </p>
          </p>
        </div>

        {showNext && (
          <span>
            <div className="anatomy__next">
              <BNext text="NEXT" onClick={nextQuestion} />
            </div>
          </span>
        )}
      </section>
      <div className="anatomy__AllBox">
        <BBox
          className="box__squares"
          /**className="anatomy__individualBox"*/
          text={anatomyList[currentQuestions]?.English_correct}
          onClick={correctAnswer}
        />
        <BBox
          className={error ? "box__squares--incorrect" : "box__squares"}
          text={anatomyList[currentQuestions]?.english_one}
          onClick={handleClick}
        />
        <BBox
          className={error ? "box__squares--incorrect" : "box__squares"}
          text={anatomyList[currentQuestions]?.english_two}
          onClick={handleClick}
        />
        <BBox
          className={error ? "box__squares--incorrect" : "box__squares"}
          text={anatomyList[currentQuestions]?.english_three}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
