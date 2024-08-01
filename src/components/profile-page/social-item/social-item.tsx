import { FC } from "react";
import React from "react";
import style from './style.module.css';
import { Link } from "react-router-dom";

type TSocialItem = {
  link: string;
  icon: string
}

const SocialItem:FC<TSocialItem> = ({link, icon}) =>  {
  return (
    <li className={style.container}>
      <Link to={link}>
        <img src={icon} alt="youtube" />
      </Link>
    </li>
  );
}

export default SocialItem;