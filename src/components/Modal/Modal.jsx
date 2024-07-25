import { useState } from "react";

export default function Modal({ title, description, hiddenSection, handleCloseModal }) {
  const [isSectionOpen, setIsSectionOpen] = useState(false); 
  
  const toggleSection = () => {
    setIsSectionOpen(!isSectionOpen);
  };

  const buttonExtraClass = title === "Соревнования" || title === "Проекты"
    ? "modal__button-know-more_hidden"
    : "";  

  return (
    <div className="modal__overlay" onClick={handleCloseModal}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal__button-close"
          onClick={handleCloseModal}
        ></button>
        <h2>{title}</h2>
        <p>{description}</p>
        {hiddenSection.map((x, index) => (
          <div key={index}>
            <h2 className="modal__title">{x.title}</h2>
            <button onClick={toggleSection} className="modal__button-toggle">
              {isSectionOpen ? "Скрыть" : "Показать"}
            </button>
            {isSectionOpen && (
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
