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
      try {
        const error = await handleSubmit(e);

        if (error) {
          throw new Error(error);
        }

        setShowPopup(true);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
      
      // handleSubmit(e)
      //   .then(() => setShowPopup(true))
      //   .catch(console.error)
      //   .finally(() => setLoading(false));
  };

  const closePopup = () => {
    setShowPopup(false);
    window.close(); 
  };

  return (
    <div className="video-upload">
      <div className="video-upload__title-container">
        <button
          className="direction__back-button video__back-button"
          onClick={() => window.history.back()}
        ></button>
        <h3 className="video__subtitle">Добавление видео</h3>
      </div>
      <form className="video-upload__form" onSubmit={onSubmit}>
        <input
          id="video-upload"
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className="video-upload__file-input"
        />
        <label htmlFor="video-upload" className="video-upload__custom-file-input">
          <p className="video-upload__file-input-text">Выбрать видео</p>
        </label>

        <div className="video-upload__container">
          {selectedFile ? (
            <div className="video-upload__video-wrapper">
              <video
                src={selectedFile}
                controls
                className="video-upload__video"
              />
            </div>
          ) : (
            <div className="video-preview">
              {/* <p className="video-preview__text">Загрузи свое крутое видео</p> */}
            </div>
          )}
        </div>

        <div className="form__field">
          <input
            className="form__input video__input"
            type="text"
            placeholder="Название видео"
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

      {loading && (
        <div className="loading__container">
          <div className="loading"></div>
          <p className="loader__text">Загрузка...</p>
        </div>
      )}

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
