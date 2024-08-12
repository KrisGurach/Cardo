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
import { useState } from 'react';
import mainApi from '../../utils/api';

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

  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState("");
  const [videos, setVideos] = useState(() => {
    // Получаем начальный список видео из localStorage
    const savedVideos = localStorage.getItem('videos');
    return savedVideos ? JSON.parse(savedVideos) : [];
});

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        if (selectedFile) {
            URL.revokeObjectURL(selectedFile); // Удаляем предыдущий объект URL
        }
        setSelectedFile(URL.createObjectURL(file)); // Создаем новый объект URL
    } else {
        setSelectedFile(null); // Если файл не выбран, обнуляем состояние
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting video:", { title, url: selectedFile }); // Логирование для проверки

    const inputId = 'video-upload';
    const inputElement = event.target.querySelector(`#${inputId}`);
    const file = inputElement.files[0];

    let error = "";

    if (file && selectedFile && title) {

      const formData = new FormData();
      formData.append("file", file, `${title}.zip`);
      formData.append("title", title);

      try {
        await mainApi.uploadVideo(formData);

        const newVideo = { title, url: selectedFile };
        const updatedVideos = [...videos, newVideo];
        setVideos(updatedVideos);
        localStorage.setItem("videos", JSON.stringify(updatedVideos)); // Сохраняем в localStorage
      } catch (err) {
        error = err;
      } finally {
        // Сбрасываем состояние
        setSelectedFile(null);
        setTitle("");
      }
    }
    
    return error;
  };

  return (
    <div className="App">
      <Routes path={profileRoute}>
        <Route path='/' element={<ProfilePage/>}/>
        <Route path={eventsRoute} element={<EventsPage cards={applicationCardsMock}/>}/>
        <Route path={myProfileRoute} element={<MyProfilePage/>}/>
        <Route path={settingsRoute} element={<SettingsPage/>}/>
        <Route path={videosRoute} element={<VideosPage videos={videos}/>}/>
        <Route path={addVideoRoute} element={<AddVideoPage data={data} handleFileChange={handleFileChange} selectedFile={selectedFile} handleSubmit={handleSubmit}/>}/>
      </Routes>
    </div>
  );
}

export default App;
