import React, { useState } from "react";
import icon from "../../images/icon-direction-form.svg";
import { Link } from "react-router-dom";

export default function Application({ videos }) {
  const [competition, setCompetition] = useState("");
  const [direction, setDirection] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [noMiddleName, setNoMiddleName] = useState(false);
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null); 

  const [dropdownsOpen, setDropdownsOpen] = useState({
    direction: false,
    gender: false, 
  });

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

  const genders = [
    "мужской",
    "женский"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ competition, direction, firstName, lastName, middleName, noMiddleName, gender, birthday, country, state, city, selectedVideoIndex }); // Выводим индекс выбранного видео
    // Логика отправки формы
  };

  const handleSelect = (type, value) => {
    if (type === "direction") {
      setDirection(value);
    } else if (type === "gender") {
      setGender(value);
    }
    setDropdownsOpen({ ...dropdownsOpen, [type]: false });
  };

  const toggleDropdown = (type) => {
    setDropdownsOpen((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <section className="application">
      <div className="application__header">
        <h2 className="application__title">Подать заявку</h2>
      </div>
      <form className="form__form" onSubmit={handleSubmit}>
        <h3 className="form__subtitle">Мероприятие</h3>

        <div className="form__field">
          <input
            className="form__input"
            type="text"
            value={competition}
            placeholder="Видеоконкурс"
            onChange={(e) => setCompetition(e.target.value)}
            required
          />
        </div>

        {/* Выпадающий список для направлений */}
        <div
          className="form__field form__field-select"
          onClick={() => toggleDropdown("direction")}
        >
          <div className="form__input form__input-select">
            {direction || "Направление"}
            <img
              className="form__input-icon"
              src={icon}
              alt="Открытие выпадающего списка"
            />
          </div>
        </div>
        {dropdownsOpen.direction && (
          <ul className="form__input-list form__input-list-dir">
            {directions.map((dir) => (
              <li
                key={dir}
                className="form__input-list-item"
                onClick={() => handleSelect("direction", dir)}
              >
                {dir}
              </li>
            ))}
          </ul>
        )}

        <h3 className="form__subtitle">Данные участника</h3>
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
          onClick={() => toggleDropdown("gender")}
        >
          <div className="form__input form__input-select">
            {gender || "Пол"}
            <img
              className="form__input-icon"
              src={icon}
              alt="Открытие выпадающего списка"
            />
          </div>
        </div>
        {dropdownsOpen.gender && (
          <ul className="form__input-list form__input-list-gender">
            {genders.map((g) => (
              <li
                key={g}
                className="form__input-list-item"
                onClick={() => handleSelect("gender", g)}
              >
                {g}
              </li>
            ))}
          </ul>
        )}

        <div className="form__field">
          <input
            className="form__input"
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required
          />
        </div>

        <h3 className="form__subtitle">Город для участия</h3>

        <div className="form__field">
          <input
            className="form__input"
            type="text"
            value={country}
            placeholder="Страна"
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>

        <div className="form__field">
          <input
            className="form__input"
            type="text"
            value={state}
            placeholder="Регион/Область/Край/Другое"
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>

        <div className="form__field">
          <input
            className="form__input"
            type="text"
            value={city}
            placeholder="Город"
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <h3 className="form__subtitle">Видео-файл</h3>
        <div>
          <Link
            to="/upload-video"
            target="blank"
            className="form__button-new-file-upload"
          >
            + добавить новое видео
          </Link>
          <div className="video-component">
            {videos.length > 0 ? (
              videos.map((video, index) => (
                <div key={index} className="video__container">
                  <label className="form__checkbox video__checkbox">
                    <input
                      type="radio" 
                      checked={selectedVideoIndex === index} 
                      onChange={() => setSelectedVideoIndex(index)} 
                    />
                    <span className="form__checkmark video__checkmark"></span>
                  </label>
                  <div>
                    <video className="video" src={video.url} controls />
                  </div>
                  <div className="video__title-container">
                    <p className="video__title">{video.title}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>Нет загруженных видео</p>
            )}
          </div>
        </div>

        <button
          className="form__button form__button-app"
          type="submit"
          disabled={
            !direction ||
            !firstName ||
            !lastName ||
            !gender ||
            !birthday ||
            !country ||
            !state ||
            !city ||
            selectedVideoIndex === null 
          }
        >
          Подать заявку
        </button>
      </form>
    </section>
  );
}
