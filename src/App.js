import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn";
import AlphaButtons from "./Components/AlphaButtons";
import Categories from "./Components/Categories/Categories";
import Numbers from "./Components/Numbers/Numbers";
import Anatomy from "./Components/Anatomy/Anatomy";
import Plants from "./Components/Plants/Plants";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/AlphaButtons" element={<AlphaButtons />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Categories/:Numbers" element={<Numbers />} />
        <Route path="/Categories/:Animals" element={<Animals />} />
        <Route path="/Categories/:Anatomy" element={<Anatomy />} />
        <Route path="/Categories/:Plants" element={<Plants />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
