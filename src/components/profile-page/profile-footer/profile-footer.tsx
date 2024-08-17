import { FC } from "react";
import React from "react";
import style from './style.module.css';
import yt from '../../../images/cbi_youtube-alt.svg';
import vk from '../../../images/ri_vk-fill.svg';
import tg from '../../../images/uil_telegram.svg'
import SocialItem from '../social-item/social-item';
import { tgLink, vkLink, ytLink } from "../../../constants/constants";

const ProfileFooter:FC = () =>  {
  return (
    <div className={style.container}>
      <h2 className={style.text}>Мы в соцсетях:</h2>
      <ul className={style.socials}>
        <SocialItem icon={yt} link={ytLink}/>
        <SocialItem icon={vk} link={vkLink}/>
        <SocialItem icon={tg} link={tgLink}/>
      </ul>
      <h2 className={style.text}>Остались вопросы? Пишите на почту:</h2>
      <p className={style.email}>info@kardoaward.com</p>
    </div>
  );
}

export default ProfileFooter;