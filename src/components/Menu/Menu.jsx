import { Link, useLocation } from "react-router-dom";

export default function Menu() {
    const location = useLocation();

    return (
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item">
              <Link to="/" className="menu__container">
                <div className={`menu__picture menu__picture-home ${location.pathname === '/' ? 'menu__picture-home_active' : ''}`}></div> 
                <p className="menu__link">Главная</p> 
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/directions" className="menu__container">
                <div className={`menu__picture menu__picture-direction ${location.pathname === '/directions' ? 'menu__picture-direction_active' : ''}`}></div> 
                <p className="menu__link">Направления</p> 
              </Link>
            </li>
          </ul>
        </nav>
    );
}