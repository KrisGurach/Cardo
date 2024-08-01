import React, { useState, useRef } from "react";
import icon from "../../images/icon-direction-form.svg";

export default function Application() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [noMiddleName, setNoMiddleName] = useState(false);
  const [direction, setDirection] = useState("");
  const [video, setVideo] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [videoPreview, setVideoPreview] = useState(null);

  const directions = [
    "BMX",
    "Брейкинг",
    "Воркаут",
    "Граффити",
    "Диджеинг",
    "Паркур",
    "Трикинг",
    "Фриран",
    "Скейтбординг",
    "Трюковой самокат",
    "Хип-хоп",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, middleName, noMiddleName, direction });
    // Логика отправки формы или перехода к следующему шагу
    // например: navigate('/next-step');
  };

  const handleDirectionSelect = (dir) => {
    setDirection(dir);
    setVideo(null);
    setDropdownOpen(false); // Закрываем выпадающий список после выбора
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setVideo(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoPreview(url); // создаем URL для миниатюры
    } else {
      setVideoPreview(null);
    }
  };

  return (
    <section className="application">
      <h2 className="application__title">Подать заявку</h2>
      <form className="form__form" onSubmit={handleSubmit}>
        <div className="form__field">
          <input
            className="form__input"
            type="text"
            value={firstName}
            placeholder="Имя"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form__field">
          <input
            className="form__input"
            type="text"
            value={lastName}
            placeholder="Фамилия"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form__field">
          <input
            className="form__input"
            type="text"
            value={noMiddleName ? "" : middleName}
            placeholder="Отчество"
            onChange={(e) => setMiddleName(e.target.value)}
            disabled={noMiddleName}
          />
        </div>
        <div className="form__field form__field-checkbox">
        <label className="form__checkbox">
            <input
              type="checkbox"
              checked={noMiddleName}
              onChange={() => setNoMiddleName(!noMiddleName)}
            />
            <span className="form__checkmark"></span>
            Нет отчества
          </label>
        </div>
        <div
          className="form__field form__field-select"
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        >
          <div className="form__input form__input-select">
            {direction || "Направление"}
            <img className="form__input-icon" src={icon} alt="Открытие выпадающего списка" />
          </div>
        </div>
        {isDropdownOpen && (
          <ul className="form__input-list">
            {directions.map((dir) => (
              <li
                key={dir}
                className="form__input-list-item"
                onClick={() => handleDirectionSelect(dir)}
              >
                {dir}
              </li>
            ))}
          </ul>
        )}
        {direction && (
          <div className="form__field form__video">
            <label htmlFor="video-upload" className="custom-file-upload">
              Добавить видео
            </label>
            <input
              id="video-upload"
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              className="file-input"
            />
            {videoPreview && (
              // Показываем миниатюру видео
              <video className="video-preview" controls>
                <source src={videoPreview} type="video/mp4" />
                Ваш браузер не поддерживает видео.
              </video>
            )}
          </div>
        )}
        <button className="form__button form__button-app" type="submit">
          Далее
        </button>
      </form>
    </section>
  );
}
