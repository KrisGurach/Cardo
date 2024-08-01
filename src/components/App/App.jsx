import { Route, Routes } from "react-router-dom";
import "./App.css";
import { directionsData } from "../../utils/directions";
import Main from "../Main/Main";
import Directions from "../Directions/Directions";
import Registration from "../Registration/Registration";
import Direction from "../Direction/Direction";
import SignIn from "../SignIn/SignIn";
import Application from "../Application/Application";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/directions" element={<Directions />} />
        {directionsData.map((data) => (
          <Route
            key={data.endpoint}
            path={`/directions${data.endpoint}`}
            element={
              <Direction
                images={data.image}
                description={data.description}
                hiddenSection={data.hiddenSections}
              />
            }
          />
        ))}
        <Route path="/registration" element={<Registration />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/application" element={<Application />} />
      </Routes>
    </div>
  );
}

export default App;
