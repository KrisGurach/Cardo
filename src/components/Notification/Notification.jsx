export default function Notification({ onClose }) {
  return (
    <div className={`notification slide-in`}>
      <div className="notification__container-title">
        <button
          type="button"
          className="notification__button-close"
          onClick={onClose}
        ></button>
        <h2 className="notification__title">Уведомления</h2>
      </div>
      <div className="notification__container">
        <div className="notification__container-box">
          <div className="notification__container-box-flex">
            <h3 className="notification__box-title">Видео-заявка</h3>
            <p className="notification__box-data">3 дня назад</p>
          </div>
          <p className="notification__box-description">
            Вы не прошли в 3 этап. Не расстраиваетесь, скоро начинаются новые
            мероприятия
          </p>
        </div>
        <button className="notification__button-clean"></button>
      </div>
    </div>
  );
}
