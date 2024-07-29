import { useState } from "react";
import { Link } from "react-router-dom";

export default function Modal({
  title,
  description,
  hiddenSection,
  handleCloseModal,
}) {
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

  return (
    <div className="modal__overlay" onClick={handleCloseModal}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <div className="modal__container-flex">
          <h2 className="modal__container-title">{title}</h2>
          <button
            className="modal__button-close"
            onClick={handleCloseModal}
          ></button>
        </div>
        <div className="modal__content">
          {" "}
          <p className="modal__container-text">{description}</p>
          {hiddenSection.map((x, index) => (
            <div key={index}>
              <div className="modal__container-flex">
                <h2 className="modal__title">{x.title}</h2>
                <button
                  onClick={() => toggleSection(index)}
                  className={`modal__button-toggle ${
                    openSections[index] ? "modal__button-toggle_active" : ""
                  }`}
                ></button>
              </div>
              {openSections[index] && (
                <div>
                  <p className="modal__description">{x.description}</p>
                </div>
              )}
            </div>
          ))}
          <Link to="/application">
            <button className="modal__button modal__button-send">Подать заявку</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
