import { FC } from "react"
import React from "react"
import style from './style.module.css';

export type TApplicationCard = {
  title: string;
  startTime: string;
  endingTime: string;
  status: string;
  phase: string;
  place?: number;
}

const ApplicationCard:FC<TApplicationCard> = ({title, startTime, endingTime, status, phase, place}) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.infoContainer}>
        <div className={style.info}>
          <p className={style.text}>Начало:<span className={style.span}>{startTime}</span></p>
          <p className={style.text}>Конец:<span className={style.span}>{endingTime}</span></p>
        </div>
        <div className={style.info}>
          <p className={`${style.text} ${style.textColorOrange}`}>Статус:<span className={style.span}>{status}</span></p>
          <p className={style.text}>Этап:<span className={style.span}>{phase}</span></p>
          <p className={style.text}>Место:<span className={style.span}>{place && place}{!place && '-'}</span></p>
        </div>
      </div>
      <div className={style.bottom}>

      </div>
    </div>
  )
}

export default ApplicationCard