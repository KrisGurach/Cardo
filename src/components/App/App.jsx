import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Directions from "../Directions/Directions";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/directions" element={<Directions />} />
      </Routes>
    </div>
  );
}

export default App;
