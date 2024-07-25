import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item">
              <Link to="/" className="menu__container">
                <div className="menu__picture menu__picture-home"></div> 
                <p className="menu__link">Главная</p> 
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/directions" className="menu__container">
                <div className="menu__picture menu__picture-direction"></div> 
                <p className="menu__link">Направления</p> 
              </Link>
            </li>
          </ul>
        </nav>
    );
}