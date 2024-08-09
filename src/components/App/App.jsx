import "./App.css";

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { directionsData } from "../../utils/directions";

import Application from "../Application/Application";
import ApplicationSuccess from "../ApplicationSuccess/ApplicationSuccess";
import Direction from "../Direction/Direction";
import Directions from "../Directions/Directions";
import Main from "../Main/Main";
import Registration from "../Registration/Registration";
import RegistrationSuccess from "../RegistrationSuccess/RegistrationSuccess";
import SignIn from "../SignIn/SignIn";

import UploadVideo from "../UploadVideo/UploadVideo";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import mainApi from "../../utils/Api/MainApi";
import auth from "../../utils/Api/AuthApi";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState("");
  const [videos, setVideos] = useState(() => {
    // Получаем начальный список видео из localStorage
    const savedVideos = localStorage.getItem('videos');
    return savedVideos ? JSON.parse(savedVideos) : [];
});

useEffect(() => {
  handleTokenCheck();
}, []);

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
    // const savedVideos = localStorage.getItem('videos');
    // setVideos(savedVideos ? JSON.parse(savedVideos) : []);
  mainApi.getAllVideos()
      .then((videoArray) => {
          const newVideos = videoArray.map((v) => ({ 
            title: v.title,
            url: v.videoPath 
          }));
          setVideos(newVideos);
      })
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

    const inputId = 'video-upload';
    const inputElement = event.target.querySelector(`#${inputId}`);
    const file = inputElement.files[0];

    if (file && selectedFile && title) {
      const formData = new FormData();
      formData.append(title, file);

      mainApi
        .uploadVideo(formData, title)
        .then((_) => {
          const newVideo = { title, url: selectedFile };
          const updatedVideos = [...videos, newVideo];
          setVideos(updatedVideos);
          localStorage.setItem("videos", JSON.stringify(updatedVideos)); // Сохраняем в localStorage
        })
        .finally((_) => {
          // Сбрасываем состояние
          setSelectedFile(null);
          setTitle("");
        });
    }
  };

  const handleLogin = () => {
    if (!isLoggedIn) {
      handleTokenCheck();
      return;
    }

    setIsLoggedIn(!isLoggedIn);
  };

  const handleTokenCheck = () => {
    const token = localStorage.getItem("token");
    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);

            const loginRoutes = [
              "/auth",
              "/register"
            ];
            const path = loginRoutes.includes(pathname)
              ? "/"
              : pathname;
            navigate(path, { replace: true });
          }
        })
        .catch(console.error);
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
        <Route path="/registration" element={<Registration handleLogin={handleLogin} />} />
        <Route path="/registration-success" element={<RegistrationSuccess />} />
        <Route path="/auth" element={<SignIn handleLogin={handleLogin}  />} />
        <Route path="/application" element={<ProtectedRouteElement element={Application} videos={videos} isLoggedIn={isLoggedIn} />} />
        <Route path="/application-success" element={<ProtectedRouteElement element={ApplicationSuccess} isLoggedIn={isLoggedIn} />} />
        <Route path="/upload-video" element={
          <ProtectedRouteElement
            element={UploadVideo} 
            title={title}
            setTitle={setTitle}
            videos={videos} 
            setVideos={setVideos}  
            handleFileChange={handleFileChange} 
            handleSubmit={handleSubmit} 
            selectedFile={selectedFile} 
            setSelectedFile={setSelectedFile} 
            isLoggedIn={isLoggedIn}
          />
        } />
      </Routes>
    </div>
  );
}

export default App;
