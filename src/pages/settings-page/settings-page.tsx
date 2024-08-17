import { FC } from "react";
import React from "react";
import style from './style.module.css';
import MenuPage from "../../components/menu-page/menu-page";
import Setting from '../../components/setting/setting';
import { SettingTypes } from "../../components/types/types";

const SettingsPage:FC = () =>  {

  return (
    <MenuPage title="Настройки">
      <div className={style.container}>
        <div className={style.settings}>
          <h2 className={style.title}>Язык</h2>
          <Setting title="Язык контента" type={SettingTypes.BUTTON} text="русский"></Setting>
        </div>
        <div className={style.settings}>
          <h2 className={style.title}>Уведомления</h2>
          <Setting title="Анонсы новых мероприятий" type={SettingTypes.CHECKBOX}></Setting>
          <Setting title="Изменение статуса заявки" type={SettingTypes.CHECKBOX}></Setting>
          <Setting title="Присылать уведомления" type={SettingTypes.BUTTON} text="push"></Setting>
        </div>
      </div>
    </MenuPage>
  );
}

export default SettingsPage;