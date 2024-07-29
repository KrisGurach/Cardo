import { useState } from "react";

export default function Direction({ images, description, hiddenSection }) {
  const [openSections, setOpenSections] = useState(
    Array(hiddenSection.length).fill(false)
  );

  const toggleSection = (index) => {
    setOpenSections((prevOpenSections) => {
      const newOpenSections = [...prevOpenSections];
      newOpenSections[index] = !newOpenSections[index];
      return newOpenSections;
    });
  };

  return (
    <section className="direction">
      <img className="direction__image" src={images} alt="" />
      <p className="direction__text">{description}</p>
      <div className="direction__container">
        {hiddenSection.map((x, index) => (
          <div key={index}>
            <div className="modal__container-flex">
              <h2 className={`modal__title ${index === hiddenSection.length - 1 ? 'title_gray' : ''}`}>{x.title}</h2>
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
      </div>
    </section>
  );
}
