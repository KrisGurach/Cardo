import React, { FC, useEffect, useState } from "react";
import style from './style.module.css';

export type TVideoData = {
  id: number;
  title: string;
  videoPath: string;
}

export type TVideoElement = {
  data: TVideoData;
  key: number;
  onClick: (e: any) => void
}

const VideoElement:FC<TVideoElement> = ({ key, onClick, data}) => {

  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = (e: any) => {
    setIsSelected(!isSelected);
    onClick(e);
  }

  useEffect(() => {

  }, [isSelected])

  return (
    <div className={style.container} key={key} id={data.id.toString()}>
      <button
        className={`${style.selectButton} ${isSelected && style.selectButtonActive}`}
        onClick={handleSelect}
      />
      <video className={style.video} src={data.videoPath}></video>
      <div className={style.description}>
        <h2 className={style.title}>{data.title}</h2>
        <p className={style.text}>Мероприятие</p>
        <p className={`${style.text} ${style.tag}`}>#bmx</p>
      </div>
    </div>
  )
}

export default VideoElement;