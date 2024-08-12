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
import compressor from "../../utils/Helpers/Compressor";

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
  const [userId, setUserId] = useState();
  const [userName, setUserName] = useState("");

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
    if (!userId) {
      return;
    }

      mainApi.getAllVideos().then((videoArray) => {
        const newVideos = videoArray.map(async (v) => {
          const fileUrl = await compressor.decompress(v.videoPath);
          return {
            title: v.title,
            url: fileUrl,
          };
        });
        setVideos(newVideos);
      });
}, [userId]);
  
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
      const compressedFile = await compressor.compress(file, title);

      const formData = new FormData();
      formData.append("file", compressedFile, `${title}.zip`);
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
            setUserId(res.id);

            const loginRoutes = [
              "/auth",
              "/registration"
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

  const handleUserName = (value) => {
    setUserName(value);
  }

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
        <Route path="/application" element={<ProtectedRouteElement element={Application} videos={videos} handleUserName={handleUserName} isLoggedIn={isLoggedIn} />} />
        <Route path="/application-success" element={<ProtectedRouteElement element={ApplicationSuccess} userName={userName} isLoggedIn={isLoggedIn}  />} />
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
