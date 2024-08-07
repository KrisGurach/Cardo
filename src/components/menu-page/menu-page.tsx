import { FC } from "react";
import React from "react";
import style from './style.module.css';
import { Link } from "react-router-dom";
import arrBack from '../../images/arrow_back.svg';
import { TMenuPage } from "../types/types";

const MenuPage:FC<TMenuPage> = ({title, children}) =>  {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <Link to='/' className={style.back}>
          <img src={arrBack} alt='Назад'/>
        </Link>
        <h1 className={style.title}>{title}</h1>
      </div>
      <div className={style.mainContent}>
        {children}
      </div>
    </div>
  );
}

export default MenuPage;