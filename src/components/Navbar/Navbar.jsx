import { useState } from "react";
import Modal from "../Modal/Modal";
import { useLocation } from "react-router-dom";

export default function Navbar({ title, description, hiddenSection }) {
  // const { pathname } = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
