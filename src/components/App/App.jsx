import { Link, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import ProfilePage from '../../pages/profile-page/profile-page.tsx';
import MenuPage from '../menu-page/menu-page.tsx'
import EventsPage from '../../pages/events-page/events-page.tsx';
import { applicationCardsMock } from '../../constants/mocks.tsx';

function App() {
  return (
    <div className="App">
      {/*<ProfilePage/>*/}
      {<EventsPage cards={applicationCardsMock}/>}
    </div>
  );
}

export default App;
