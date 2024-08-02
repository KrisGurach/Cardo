import { FC } from "react";
import React from "react";
import style from './style.module.css';
import MenuItem from "../menu-item/menu-item";
import { eventsRoute } from "../../../constants/routes";

const ProfileMenu:FC = () =>  {
  return (
    <ul className={style.container}>
      <MenuItem link={eventsRoute} title="Мероприятия"></MenuItem>
      <MenuItem link='#' title="Мои видео"></MenuItem>
      <MenuItem link='#' title="Мой профиль"></MenuItem>
      <MenuItem link='#' title="Настройки"></MenuItem>
      <MenuItem link='#' title="О нас"></MenuItem>
      <button type='button' className={style.exitButton}>Выйти</button>
    </ul>
  );
}

export default ProfileMenu;