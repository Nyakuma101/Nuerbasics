import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn";
import Alphabets from "./Components/Alphabets/Alphabets";
import Categories from "./Components/Categories/Categories";
import Numbers from "./Components/Numbers/Numbers";
import Anatomy from "./Components/Anatomy/Anatomy";
import Plants from "./Components/Plants/Plants";
import Home from "./Components/Home/Home";
import Animals from "./Components/Animals/Animals";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Alphabets" element={<Alphabets />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Categories/Numbers" element={<Numbers />} />

        <Route path="/Categories/Animals" element={<Animals />} />
        <Route path="/Categories/Anatomy" element={<Anatomy />} />
        <Route path="/Categories/Plants" element={<Plants />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
