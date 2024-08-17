import { FC } from "react";
import React from "react";
import style from './style.module.css';
import arrow from '../../../images/button-navbar-link.svg'
import { Link } from "react-router-dom";
import { TMenuItem } from "../../types/types";

const MenuItem:FC<TMenuItem> = ({title, link}) =>  {
  return (
    <li className={style.container}>
      <Link to={link} className={style.link}>
        {title}
        <img className={style.arrow_link} src={arrow} alt="title" onClick={() =>{}}/>
      </Link>
    </li>
  );
}

export default MenuItem;