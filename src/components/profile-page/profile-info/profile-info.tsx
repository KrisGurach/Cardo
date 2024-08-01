import { FC } from "react";
import React from "react";
import style from './style.module.css';
import arrBack from '../../../images/arrow_back.svg';
import cameraIcon from '../../../images/camera_icon.svg';
import { Link } from "react-router-dom";
import { mainPageLink } from "../../../constants/profile-page";

type TProfileInfo = {
  avatar?: string;
  name: string;
  tag: string;
}

const ProfileInfo:FC<TProfileInfo> = ({avatar, name, tag}) =>  {
  return (
    <div className={style.container}>
      <div className={style.actions}>
        <Link to={mainPageLink} className={style.back}>
          <img src={arrBack} alt='Назад'/>
        </Link>
        <button type="button" className={style.addButton}>
          <img src={cameraIcon} alt="Добавить фото"/>
        </button>
      </div>

      <div className={style.avatar}>
        {avatar && <img alt="Аватар" src={avatar} className={style.picture}/>}
        {!avatar && <p>Нет фото</p>}
      </div>

      <div className={style.info}>
        <h2 className={style.name}>{name.toUpperCase()}</h2>
        <h3 className={style.tag}>{tag}</h3>
      </div>

    </div>
  );
}

export default ProfileInfo;