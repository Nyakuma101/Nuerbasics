import "./Home.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BHomeCircles from "../BHomCircles/BHomCircles";
import LogoBlack3 from "../../Assests/icons/logoBlack3.png";

// .............................................................
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
      <div className="home__container ">
        <div className="home__logoContainer">
          <Link className="home__link1" to="/">
            <img className="home__logo" src={LogoBlack3} alt="Logo"></img>
          </Link>
        </div>

        <div className="home__facts">
          <p className="home__fun">Thok Naath Fun Facts</p>
          <p className="home__content">{factsList[currentFact]?.funFacts}</p>
        </div>
        <div className="home__account">
          <div className="home__CArrangement">
            <BHomeCircles onClick={nextQuestion} />
            <BHomeCircles onClick={nextQuestion} />
          </div>
          <Link className="home__link" to="./Alphabets">
            <p className="home__beginButton">BEGIN</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
