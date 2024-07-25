import { useState } from "react";
import Modal from "../Modal/Modal";

export default function Navbar({ title, description, hiddenSection }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    console.log(hiddenSection)
  };

  return (
    // разметка для создания одной позиции меню для главной и лк
    <div className="navbar">
      <h2 className="navbar__title">{title}</h2>
      <button
        type="button"
        className="navbar__button-link"
        onClick={handleOpenModal}
      ></button>
      {isModalOpen && (
        <Modal
          title={title}
          description={description}
          hiddenSection={hiddenSection}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
}
