import { FC, useEffect, useState } from "react";
import React from "react";
import style from './style.module.css';
import MenuPage from "../../components/menu-page/menu-page";
import VideoElement, { TVideoData } from "../../components/video/video";
import MainApi from '../../utils/api.js';
import { addVideoRoute } from "../../constants/routes";

const VideosPage:FC = () =>  {

  const [currentVidsId, setCurrentVidsId] = useState<number[]>([]);
  const [data, setOwnVids] = useState<TVideoData[]>([  
    {
      id: 1,
      title: "Видео1",
      videoPath: 'string',
    },
    {
      id: 2,
      title: "Видео2",
      videoPath: 'string',
    },
    {
      id: 3,
      title: "Видео3",
      videoPath: 'string',
    },
  ]);

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

  //Загружаем видео с сервера
  const getAllVids = () => {
    MainApi.getAllVideos().then((res: any) => {
      setOwnVids(res)
    })
  }

  const handleRemoveVids = () => {
    Promise.all(currentVidsId.map((id) => MainApi.removeVid(id).catch())).then(() => {
      MainApi.getAllVideos().then((res: any) => {
        setCurrentVidsId([]);
        setOwnVids(res);
      });
    });
  };

  useEffect(() => {
    getAllVids();
  }, [data, currentVidsId])

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
            <button 
              className={`${style.deleteButton} ${(currentVidsId.length>0) && style.deleteActive}`} 
              onClick={handleRemoveVids}
              disabled={currentVidsId.length ? false : true}
              >
              Удалить
            </button>
          </div>
          {data && data.map((vid, index) => {
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