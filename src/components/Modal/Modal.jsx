export default function Modal({ title, handleCloseModal }) {

  return (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleCloseModal}></button>
        <h2>{title}</h2>
        <p>Содержимое модального окна.</p>
      </div>
    </div>
  );
}
