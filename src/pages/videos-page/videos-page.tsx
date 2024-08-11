import { FC, useEffect, useState } from "react";
import React from "react";
import style from './style.module.css';
import MenuPage from "../../components/menu-page/menu-page";
import VideoElement, { TVideoData } from "../../components/video/video";
import {removeVid, getOwnVids} from '../../utils/api.js';
import { addVideoRoute } from "../../constants/routes";

export type TVideosPage = {
  videos: TVideoData[]
}

const VideosPage:FC<TVideosPage> = ({videos}) =>  {

  const [currentVidsId, setCurrentVidsId] = useState<number[]>([]);
  const [data, setOwnVids] = useState([]);

  const [selectAllIsActive, setSelectAllIsActive] = useState(false);
  const [deleteButtonIsActive, setDeleteButtonIsActieve] = useState(false);

  const onSelectClick = (e: any) => {
    const vid =
      e.target.tagName === "BUTTON" ? e.target.closest('div') : e.target.closest("div");
    if (currentVidsId.indexOf(+vid.id) !== -1) {
      const arr = [...currentVidsId];
      arr.splice(currentVidsId.indexOf(+vid.id), 1);
      setCurrentVidsId(arr);
    } else {
      setCurrentVidsId([...currentVidsId, +vid.id]);
    }
    console.log(currentVidsId)
  };

  /*const toggleSelectAll = () => {
    setSelectAllIsActive(!selectAllIsActive);
  }*/

  const handleRemoveVids = () => {
    Promise.all(currentVidsId.map((id) => removeVid(id).catch())).then(() => {
      getOwnVids().then((res: any) => {
        setCurrentVidsId([]);
        setOwnVids(res);
      });
    });
  };

  useEffect(() => {

  }, [selectAllIsActive, deleteButtonIsActive])

  return (
    <MenuPage title="Мои видео">
      <>
        <div className={style.header}>
          <a className={style.addVideoButton} href={addVideoRoute}>
            + Добавить видео
          </a>
          <h2 className={style.title}>Заставки для видео:</h2>
          <div className={style.videoPreviews}>
            Тут вы сможете увидеть заставки ваших видео
          </div>
        </div>
        <div className={style.videos} id="videos">
          <h2 className={style.titleVideos}>Загруженные ранее:</h2>
          <div className={style.buttonsGroup}>
            {/*<div className={style.selectAll}>
              <button 
              className={`${style.selectAllButton} ${selectAllIsActive && style.selectAllActive}`}
              onClick={toggleSelectAll}
              />
              <p className={style.text}>Выбрать все</p>
            </div>*/}
            <button 
              className={`${style.deleteButton} ${(currentVidsId.length>0 || selectAllIsActive) && style.deleteActive}`} 
              onClick={handleRemoveVids}
              disabled={currentVidsId.length || selectAllIsActive ? false : true}
              >
              Удалить
            </button>
          </div>
          {videos && videos.map((vid, index) => {
            return (
              <VideoElement key={index} onClick={onSelectClick} data={vid}></VideoElement>
            )
          })}
        </div>
      </>
    </MenuPage>
  );
}

export default VideosPage;