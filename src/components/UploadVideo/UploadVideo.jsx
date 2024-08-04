import React, { useState } from "react";
import icon from '../../images/succsess.svg';

export default function UploadVideo({
  title,
  setTitle,
  handleSubmit,
  handleFileChange,
  selectedFile,
}) {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Здесь handleSubmit для загрузки
    await handleSubmit(e);

    setLoading(false);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    window.close(); 
  };

  return (
    <div className="video-upload">
      <div className="video-upload__title-container">  
        <button className="direction__back-button video__back-button" onClick={() => window.history.back()}></button>
        <h3 className="video__subtitle">Добавление видео</h3>
      </div>
      <form className="video-upload__form" onSubmit={onSubmit}>
        <input
          id="video-upload"
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className="form__file-input"
        />

        <div className="video-upload__container">
          {selectedFile ? (
            <div className="video-upload__video-wrapper"> {/* Новый контейнер для центрирования видео */}
              <video
                src={selectedFile}
                controls
                className="video-upload__video"
              />
            </div>
          ) : (
            <div className="video-preview">
              <p>Загрузите видео</p>
            </div>
          )}
        </div>

        <div className="form__field">
          <input
            className="form__input video__input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <button
          className="form__button form__button-app"
          disabled={!selectedFile || !title || loading} 
        >
          {loading ? "Загрузка..." : "Добавить видео"} 
        </button>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup__content">
            <div className="popup__container">
              <img className="popup__image" src={icon} alt="" />
              <h4 className="popup__title">Успех</h4>
            </div>
            <p className="popup__text">Видео добавлено</p>
            <button className="popup__button" onClick={closePopup}>
              Отлично
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
