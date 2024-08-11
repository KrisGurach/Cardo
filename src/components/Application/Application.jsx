import React, { useEffect, useState } from "react";
import icon from "../../images/icon-direction-form.svg";
import { Link, useNavigate } from "react-router-dom";
import mainApi from "../../utils/Api/MainApi";

export default function Application({ videos }) {
  const navigate = useNavigate();

  const [competition, setCompetition] = useState({});
  const [direction, setDirection] = useState("");

  const [userData, setUserData] = useState({});
  const [noMiddleName, setNoMiddleName] = useState(false);

  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null); 

  const [dropdownsOpen, setDropdownsOpen] = useState({
    direction: false,
    gender: false, 
  });

  useEffect(() => {
    mainApi.getAllEvents().then((competitionData) => {
      const first = competitionData[0] ?? {id: 1, name: "Произвольное событие"};

      setCompetition({
        id: first.id,
        name: first.name,
      });
    });
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Логика отправки формы
    try {
      await mainApi.sendApplication(competition.id);
      setCompetition({});

      await mainApi.updateUser({
        firstName: userData.firstName,
        lastName: userData.lastName,
        middleName: userData.middleName,
        gender: userData.gender,
        birthday: userData.birthday,
        country: userData.country,
        state: userData.state,
        city: userData.city,
      });
      setUserData({});


      navigate("/application-success", { replace: true });
    }
    catch (err) {
      console.error(err);
    }
  };

  const handleSelect = (type, value) => {
    if (type === "direction") {
      setDirection(value);
    } else if (type === "gender") {
      setUserData({ ...userData, gender: value });
    }
    setDropdownsOpen({ ...dropdownsOpen, [type]: false });
  };

  const toggleDropdown = (type) => {
    setDropdownsOpen((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const updateUserData = (prop, value) => {
    setUserData({ ...userData, [prop]: value });
  }

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
            value={competition.name}
            disabled={true}
            placeholder="Событие"
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
            value={userData.firstName}
            placeholder="Имя"
            onChange={(e) => updateUserData("firstName", e.target.value)}
            required
          />
        </div>

        <div className="form__field">
          <input
            className="form__input"
            type="text"
            value={userData.lastName}
            placeholder="Фамилия"
            onChange={(e) => updateUserData("lastName", e.target.value)}
            required
          />
        </div>

        <div className="form__field">
          <input
            className="form__input"
            type="text"
            value={noMiddleName ? "" : userData.middleName}
            placeholder="Отчество"
            onChange={(e) => updateUserData("middleName", e.target.value)}
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
            {userData.gender || "Пол"}
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
            value={userData.birthday}
            onChange={(e) => updateUserData("birthday", e.target.value)}
            required
          />
        </div>

        <h3 className="form__subtitle">Город для участия</h3>

        <div className="form__field">
          <input
            className="form__input"
            type="text"
            value={userData.country}
            placeholder="Страна"
            onChange={(e) => updateUserData("country", e.target.value)}
            required
          />
        </div>

        <div className="form__field">
          <input
            className="form__input"
            type="text"
            value={userData.state}
            placeholder="Регион/Область/Край/Другое"
            onChange={(e) => updateUserData("state", e.target.value)}
            required
          />
        </div>

        <div className="form__field">
          <input
            className="form__input"
            type="text"
            value={userData.city}
            placeholder="Город"
            onChange={(e) => updateUserData("city", e.target.value)}
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
            className="form__button-app"
            type="submit"
            // disabled={
            //   !direction ||
            //   !userData.firstName ||
            //   !userData.lastName ||
            //   !userData.gender ||
            //   !userData.birthday ||
            //   !userData.country ||
            //   !userData.state ||
            //   !userData.city ||
            //   selectedVideoIndex === null
            // }
          >
            Подать заявку
          </button>
      </form>
    </section>
  );
}
