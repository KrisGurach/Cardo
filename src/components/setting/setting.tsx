import { FC } from "react";
import React from "react";
import style from './style.module.css';
import arrRghtDwnCrnr from '../../images/arrow-right-down-corner.svg';
import { SettingTypes, TSetting } from "../types/types";

const Setting:FC<TSetting> = ({title, type, text}) => {
  return (
    <div className={style.container}>
      <h3 className={style.title}>{title}</h3>
      {type === SettingTypes.CHECKBOX && 
        <input type={SettingTypes.CHECKBOX} className={style.input}/>
      }
      {type === SettingTypes.BUTTON && 
        <button className={style.button}>
          {text && <p className={style.text}>{text}</p>}
          <img src={arrRghtDwnCrnr} alt="Настроить"/>
        </button>
      }
    </div>
  )
} 

export default Setting;