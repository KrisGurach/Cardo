import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProfilePage from '../../pages/profile-page/profile-page.tsx';
import EventsPage from '../../pages/events-page/events-page.tsx';
import { applicationCardsMock } from '../../constants/mocks.tsx';
import { eventsRoute, myProfileRoute, profileRoute, settingsRoute } from '../../constants/routes.tsx';
import MyProfilePage from '../../pages/my-profile-page/my-profile-page.tsx';
import SettingsPage from '../../pages/settings-page/settings-page.tsx';

function App() {
  return (
    <div className="App">
      <Routes path={profileRoute}>
        <Route path='/' element={<ProfilePage/>}/>
        <Route path={eventsRoute} element={<EventsPage cards={applicationCardsMock}/>}/>
        <Route path={myProfileRoute} element={<MyProfilePage/>}/>
        <Route path={settingsRoute} element={<SettingsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
