import { useState } from "react";

export default function Modal({ title, description, hiddenSection, handleCloseModal }) {
  // Инициализируем состояние, где каждое значение будет false (все секции закрыты)
  const [openSections, setOpenSections] = useState(
    Array(hiddenSection.length).fill(false) // Создаем массив с false для каждой секции
  ); 

  const toggleSection = (index) => {
    setOpenSections((prevOpenSections) => {
      const newOpenSections = [...prevOpenSections];
      newOpenSections[index] = !newOpenSections[index]; // Переключаем состояние конкретной секции
      return newOpenSections;
    });
  };

  const buttonExtraClass = title === "Соревнования" || title === "Проекты"
    ? "modal__button-know-more_hidden"
    : "";  

  return (
    <div className="modal__overlay" onClick={handleCloseModal}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <button className="modal__button-close" onClick={handleCloseModal}></button>
        <h2>{title}</h2>
        <p>{description}</p>
        {hiddenSection.map((x, index) => (
          <div key={index}>
            <h2 className="modal__title">{x.title}</h2>
            <button onClick={() => toggleSection(index)} className="modal__button-toggle">
              {openSections[index] ? "Скрыть" : "Показать"}
            </button>
            {openSections[index] && (
              <div className="modal__description">
                <p>{x.description}</p>
              </div>
            )}
          </div>
        ))}
        <button className="modal__button-send">Подать заявку</button>
        <button className={`modal__button-know-more ${buttonExtraClass}`}>
          Узнать больше
        </button>
      </div>
    </div>
  );
}
