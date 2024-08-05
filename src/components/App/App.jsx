import { Route, Routes } from "react-router-dom";
import "./App.css";
import { directionsData } from "../../utils/directions";
import Main from "../Main/Main";
import Directions from "../Directions/Directions";
import Registration from "../Registration/Registration";
import Direction from "../Direction/Direction";
import SignIn from "../SignIn/SignIn";
import Application from "../Application/Application";
import UploadVideo from "../UploadVideo/UploadVideo";
import { useEffect, useState } from "react";
import ApplicationSuccess from "../ApplicationSuccess/ApplicationSuccess";
import RegistrationSuccess from "../RegistrationSuccess/RegistrationSuccess";

function App() {
  // const [videos, setVideos] = useState([]);

  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState("");
  const [videos, setVideos] = useState(() => {
    // Получаем начальный список видео из localStorage
    const savedVideos = localStorage.getItem('videos');
    return savedVideos ? JSON.parse(savedVideos) : [];
});

useEffect(() => {
    // Устанавливаем событие для обновления при изменении localStorage
    const handleStorageChange = () => {
        const savedVideos = localStorage.getItem('videos');
        setVideos(savedVideos ? JSON.parse(savedVideos) : []);
    };

    // Слушаем событие 'storage'
    window.addEventListener('storage', handleStorageChange);
    
    // Возвращаем функцию очистки
    return () => {
        window.removeEventListener('storage', handleStorageChange);
    };
}, []);

useEffect(() => {
    // Этот эффект выполняется при загрузке компонента, для первоначального чтения
    const savedVideos = localStorage.getItem('videos');
    setVideos(savedVideos ? JSON.parse(savedVideos) : []);
}, []);

  useEffect(() => {
    const savedVideos = JSON.parse(localStorage.getItem("videos")) || [];
    setVideos(savedVideos);
  }, []);
  
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting video:", { title, url: selectedFile }); // Логирование для проверки

    if (selectedFile && title) {
      const newVideo = { title, url: selectedFile };
      const updatedVideos = [...videos, newVideo];
      setVideos(updatedVideos);
      localStorage.setItem("videos", JSON.stringify(updatedVideos)); // Сохраняем в localStorage

      // Сбрасываем состояние
      setSelectedFile(null);
      setTitle("");
    }
  };

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
        <Route path="/registration-success" element={<RegistrationSuccess />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/application" element={<Application videos={videos} />} />
        <Route path="/application-success" element={<ApplicationSuccess />} />
        <Route path="/upload-video" element={
          <UploadVideo 
            title={title}
            setTitle={setTitle}
            videos={videos} 
            setVideos={setVideos}  
            handleFileChange={handleFileChange} 
            handleSubmit={handleSubmit} 
            selectedFile={selectedFile} 
            setSelectedFile={setSelectedFile} 
          />
        } />
      </Routes>
    </div>
  );
}

export default App;
