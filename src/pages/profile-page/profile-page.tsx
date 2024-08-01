import React from "react";
import { FC } from "react";
import style from "./style.module.css";
import ProfileInfo from "../../components/profile-page/profile-info/profile-info";
import ProfileMenu from "../../components/profile-page/profile-menu/profile-menu";
import ProfileFooter from "../../components/profile-page/profile-footer/profile-footer";


const ProfilePage:FC = () =>  {
  return (
    <div className={style.container}>
      <ProfileInfo name="Иван Иванов" tag="@ivan6666"/>
      <ProfileMenu/>
      <ProfileFooter/>
    </div>
  );
}

export default ProfilePage;