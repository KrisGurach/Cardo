import { Link } from "react-router-dom";
import Item from "../Item/Item";
import Menu from "../Menu/Menu";
import { profileRoute } from "../../constants/routes";

export default function Directions() {
  return (
    <div className="directions">
      <div className="directions__header">
        <Link to={profileRoute}>  
          <button className="directions__button-account"></button>  
        </Link>
        <h3 className="directions__title">Направления</h3>  
      </div>
      <div className="directions__container">
        <Link to="/directions/bmx" className="directions__link">
          <Item src={require('../../images/bmx.png')} alt="человек делает трюки" title="BMX" />
        </Link>
        <Link to="/directions/breaking" className="directions__link">
          <Item src={require('../../images/breaking.png')} alt="человек делает трюки" title="Брейкинг" />
        </Link>
        <Link to="/directions/workout" className="directions__link">  
          <Item src={require('../../images/workout.png')} alt="человек делает трюки" title="Воркаут" />
        </Link>
        <Link to="/directions/graffiti" className="directions__link">
          <Item src={require('../../images/graffiti.png')} alt="человек делает трюки" title="Граффити" />
        </Link>
        <Link to="/directions/dj" className="directions__link">
          <Item src={require('../../images/dj.png')} alt="человек делает трюки" title="Диджеинг" />
        </Link>
        <Link to="/directions/parkur" className="directions__link">
          <Item src={require('../../images/parkur.png')} alt="человек делает трюки" title="Паркур" />
        </Link>
        <Link to="/directions/tricking" className="directions__link">
          <Item src={require('../../images/tricking.png')} alt="человек делает трюки" title="Трикинг" />
        </Link>
        <Link to="/directions/freerun" className="directions__link">
          <Item src={require('../../images/freerun.png')} alt="человек делает трюки" title="Фриран" />
        </Link>
      </div>
      <Menu />
    </div>
  )
}