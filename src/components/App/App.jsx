import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProfilePage from '../../pages/profile-page/profile-page.tsx';
import EventsPage from '../../pages/events-page/events-page.tsx';
import { applicationCardsMock } from '../../constants/mocks.tsx';
import { eventsRoute, profileRoute } from '../../constants/routes.tsx';

function App() {
  return (
    <div className="App">
      <Routes path={profileRoute}>
        <Route path='/' element={<ProfilePage/>}/>
        <Route path={eventsRoute} element={<EventsPage cards={applicationCardsMock}/>}/>
      </Routes>
    </div>
  );
}

export default App;
