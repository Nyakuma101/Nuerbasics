import "./Home.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState, useTransition } from "react";
import BHomeCircles from "../BHomCircles/BHomCircles";
import BNext from "../BNext/BNext";

export default function Home() {
  const [factsList, setFactsList] = useState([]);
  const [currentFact, setCurrentFact] = useState(0);

  const getAnatomy = async () => {
    try {
      const anatomyResponse = await axios.get("http://localhost:5050/Facts");
      setFactsList(anatomyResponse.data);
      console.log(anatomyResponse.data);
    } catch (error) {
      console.error("this is an error", error);
    }
  };
  //.....................................................
  useEffect(() => {
    getAnatomy();
    // automatically timer 6seconds
    const intervalId = setInterval(() => {
      nextQuestion();
    }, 6000);

    return () => clearInterval(intervalId);
  }, [currentFact]);

  //next question and repeat
  const nextQuestion = () => {
    if (currentFact < factsList.length - 1) {
      setCurrentFact(currentFact + 1);
    } else {
      setCurrentFact(0);
    }
  };

  // .....................................................
  return (
    <div className="home">
      <div className="home__facts">
        <p className="home__fun">FUN FACTS</p>
        <p className="home__content">{factsList[currentFact]?.funFacts}</p>

        <section className="home__circles">
          <BHomeCircles onClick={nextQuestion} />
          <BHomeCircles onClick={nextQuestion} />
          <BHomeCircles onClick={nextQuestion} />
          <BHomeCircles onClick={nextQuestion} />
        </section>
      </div>

      <div className="home__account">
        <p>Already have an account?</p>

        <Link className="home__begin" to="./Alphabets">
          <BNext text="BEGIN" />
        </Link>
      </div>
    </div>
  );
}
