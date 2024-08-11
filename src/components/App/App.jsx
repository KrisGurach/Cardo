import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProfilePage from '../../pages/profile-page/profile-page';
import EventsPage from '../../pages/events-page/events-page';
import { applicationCardsMock } from '../../constants/mocks';
import { addVideoRoute, eventsRoute, myProfileRoute, profileRoute, settingsRoute, videosRoute } from '../../constants/routes';
import MyProfilePage from '../../pages/my-profile-page/my-profile-page';
import SettingsPage from '../../pages/settings-page/settings-page';
import VideosPage from '../../pages/videos-page/videos-page';
import AddVideoPage from '../../pages/add-video-page/add-video-page';

const videos = [  
  {
    id: 1,
    title: "Видео1",
    videoPath: 'string',
  },
  {
    id: 2,
    title: "Видео2",
    videoPath: 'string',
  },
  {
    id: 3,
    title: "Видео3",
    videoPath: 'string',
  },
]

const data = [
  {inputs: [
    {
    name: 'title',
    label: 'Название видео',
    placeholder: 'Название видео',
    },
    {
      name: 'stage',
      label: 'Этап',
      placeholder: 'Этап',
      },
      {
        name: 'third',
        label: 'Выбрать',
        placeholder: 'Выбрать',
        } 
  ]}
]

function App() {
  return (
    <div className="App">
      <Routes path={profileRoute}>
        <Route path='/' element={<ProfilePage/>}/>
        <Route path={eventsRoute} element={<EventsPage cards={applicationCardsMock}/>}/>
        <Route path={myProfileRoute} element={<MyProfilePage/>}/>
        <Route path={settingsRoute} element={<SettingsPage/>}/>
        <Route path={videosRoute} element={<VideosPage videos={videos}/>}/>
        <Route path={addVideoRoute} element={<AddVideoPage data={data}/>}/>
      </Routes>
    </div>
  );
}

export default App;
