import "./Anatomy.scss";
// import ProgressBar40 from "../ProgressBar40/ProgressBar40";
import { useEffect, useState, useTransition } from "react";
import axios from "axios";
import Bspeech from "../Bspeech/Bspeech";
import BNumbersPicture from "../BNumbersPicture/BNumbersPicture";
import { compileString } from "sass";

export default function Anatomy() {
  // const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const [anatomyList, setAnatomyList] = useState([]);
  const [showCorrect, setShowCorrect] = useState(false);
  const [currentQuestions, setCurrentQuestion] = useState(0);

  // ............................................................
  const getAnatomy = async () => {
    try {
      const anatomyResponse = await axios.get("http://localhost:5050/anatomy");
      setAnatomyList(anatomyResponse.data);
      console.log(anatomyResponse.data);
    } catch (error) {
      console.error("this is an error", error);
    }
  };
  useEffect(() => {
    getAnatomy();
  }, []);

  // ............................................................
  const correctAnswer = () => {
    setShowCorrect(true);
  };
  const nextQuestion = () => {
    setCurrentQuestion(currentQuestions + 1);
    setShowCorrect(false);
  };
  // ............................................................
  //will return green css for correct answer
  if (showCorrect) {
    return (
      <div className="numbers">
        {/* <ProgressBar40 /> */}
        <div className="numbers__box">
          <p>you are correct</p>
          <p className="numbers__title">ANATOMY</p>
        </div>
        <BNumbersPicture src={anatomyList[currentQuestions]?.image} />
        <p>{anatomyList[currentQuestions]?.thokNaath}</p>
        <div>
          <Bspeech
            className="."
            text={anatomyList[currentQuestions]?.english_correct}
          />
          <Bspeech text={anatomyList[currentQuestions]?.english_one} />
          <Bspeech text={anatomyList[currentQuestions]?.english_two} />
          <Bspeech text={anatomyList[currentQuestions]?.english_three} />
          <Bspeech text="Next Question" onClick={nextQuestion} />
        </div>
      </div>
    );
  }

  // ...........................................................
  return (
    <div className="numbers">
      {/* <ProgressBar40 /> */}
      <div className="numbers__box">
        <p className="numbers__title">ANATOMY</p>
      </div>
      <BNumbersPicture />
      <p>{anatomyList[currentQuestions]?.thokNaath}</p>

      <div>
        <Bspeech
          text={anatomyList[currentQuestions]?.english_correct}
          onClick={correctAnswer}
        />
        <Bspeech text={anatomyList[currentQuestions]?.english_one} />
        <Bspeech text={anatomyList[currentQuestions]?.english_two} />
        <Bspeech text={anatomyList[currentQuestions]?.english_three} />
      </div>
    </div>
  );
}
