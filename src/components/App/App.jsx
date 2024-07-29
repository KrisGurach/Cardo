import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Directions from "../Directions/Directions";
import Registration from "../Registration/Registration";
import Direction from "../Direction/Direction";
import { directionsData } from "../../utils/directions";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/directions" element={<Directions />} />
        {directionsData.map((data) => {
          return (
            <Route
              path={`/directions${data.endpoint}`}
              element={
                <Direction
                  images={data.image}
                  description={data.description}
                  hiddenSection={data.hiddenSections}
                />
              }
            />
          );
        })}
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
