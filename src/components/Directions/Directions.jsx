import { Link } from "react-router-dom";
import Item from "../Item/Item";
import Menu from "../Menu/Menu";

export default function Directions() {
  return (
    <div className="directions">
      <div className="directions__header">
        <Link to="/account">  
          <button className="directions__button-account"></button>  
        </Link>
        <h3 className="directions__title">Направления</h3>  
      </div>
      <div className="directions__container">
        <Item src={require('../../images/bmx.png')} alt="человек делает трюки" title="BMX" />
        <Item src={require('../../images/breaking.png')} alt="человек делает трюки" title="Брейкинг" />
        <Item src={require('../../images/workout.png')} alt="человек делает трюки" title="Воркаут" />
        <Item src={require('../../images/graffiti.png')} alt="человек делает трюки" title="Граффити" />
        <Item src={require('../../images/dj.png')} alt="человек делает трюки" title="Диджеинг" />
        <Item src={require('../../images/parkur.png')} alt="человек делает трюки" title="Паркур" />
        <Item src={require('../../images/tricking.png')} alt="человек делает трюки" title="Трикинг" />
        <Item src={require('../../images/freerun.png')} alt="человек делает трюки" title="Фриран" />
      </div>
      <Menu />
    </div>
  )
}