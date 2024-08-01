import { Children, FC, ReactElement } from "react";
import React from "react";
import style from './style.module.css';
import { Link } from "react-router-dom";
import { profilePageLink } from "../../constants/profile-page";
import arrBack from '../../images/arrow_back.svg';

type TMenuPage = {
  title: string;
  children?: ReactElement;
};

const MenuPage:FC<TMenuPage> = ({title, children}) =>  {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <Link to={profilePageLink} className={style.back}>
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