import "./Anatomy.scss";
// import ProgressBar40 from "../ProgressBar40/ProgressBar40";
import { useEffect, useState } from "react";
import axios from "axios";
import Bspeech from "../Bspeech/Bspeech";
import BNumbersPicture from "../BNumbersPicture/BNumbersPicture";

export default function Anatomy() {
  const [anatomyList, setAnatomyList] = useState([]);
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
  return (
    <div className="numbers">
      {/* <ProgressBar40 /> */}
      <div className="numbers__box">
        <p className="numbers__title">ANATOMY</p>
      </div>
      <div>
        <BNumbersPicture />
        <Bspeech to="spoken">
          <p className="">does this {anatomyList[5]?.thokNaath}</p>
        </Bspeech>
        <Bspeech />
        <p>{anatomyList?.english}</p>
        <Bspeech />

        <Bspeech />
      </div>
    </div>
  );
}
