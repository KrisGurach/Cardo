import React, { useState, useRef } from "react";

export default function Application() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [noMiddleName, setNoMiddleName] = useState(false);
  const [direction, setDirection] = useState("");
  const [video, setVideo] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

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
          <input
            className="form__input-checkbox"
            type="checkbox"
            checked={noMiddleName}
            onChange={() => setNoMiddleName(!noMiddleName)}
          />
          Нет отчества
        </div>
        {/* <div className="form__field form__field-select"> */}
        <div
          className="form__field form__field-select"
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        >
          <div className="form__input">
            {direction || "Направление"}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_407_1318)">
                <path
                  d="M26.6667 16.0002L24.7867 14.1202L17.3333 21.5602V5.3335H14.6667V21.5602L7.22666 14.1068L5.33333 16.0002L16 26.6668L26.6667 16.0002Z"
                  fill="#FF4310"
                />
              </g>
              <defs>
                <clipPath id="clip0_407_1318">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list">
            {directions.map((dir) => (
              <li
                key={dir}
                className="dropdown-item"
                onClick={() => handleDirectionSelect(dir)}
              >
                {dir}
              </li>
            ))}
          </ul>
        )}
        {/* </div> */}
        {direction && (
          <div className="form__field">
            Добавить видео:
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideo(e.target.files[0])}
            />
          </div>
        )}
        <button className="form__button" type="submit">
          Далее
        </button>
      </form>
    </section>
  );
}
