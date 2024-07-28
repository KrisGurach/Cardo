import { Link } from 'react-router-dom'; 
import './Header.css'; 
import { useState } from 'react';
import Notification from '../Notification/Notification';

//добавить измнение иконки если получил уведомление и написать соот.функцию

export default function Header() {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false); 
    const handleNotificationClick = () => {
      setIsNotificationOpen(!isNotificationOpen);
      console.log(isNotificationOpen);
    };
  
    const closeNotification = () => {
      setIsNotificationOpen(false); 
    };
  
    return (
      <div className="header">
        <Link
          to="/account"
          className="header__button header__button--logo"
        ></Link>
        <button
          type="button"
          className="header__button header__button--notification"
          onClick={handleNotificationClick}
        ></button>
        {isNotificationOpen && (<Notification onClose={closeNotification} className={isNotificationOpen ? 'notification__show' : ''} />)}
      </div>
    );
  }
