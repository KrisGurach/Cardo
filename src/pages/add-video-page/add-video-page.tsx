import { FC, useEffect, useState } from "react";
import React from "react";
import style from './style.module.css';
import MenuPage from "../../components/menu-page/menu-page";
import { videosRoute } from "../../constants/routes";
import Form from "../../components/form/form";
import { TFieldset } from "../../components/types/types";

export type TAddVideoData = {
  data: TFieldset[];
  handleFileChange: ()=>void;
  selectedFile: any;
  handleSubmit: (e: any)=>Promise<any>;
}

const AddVideoPage:FC<TAddVideoData> = ({data, handleFileChange, selectedFile, handleSubmit}) =>  {

  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    
      // Здесь handleSubmit для загрузки
      try {
        const error = await handleSubmit(e);

        if (error) {
          throw new Error(error);
        }

        setShowPopup(true);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
  };

  return (
    <MenuPage title="Добавление видео" link={videosRoute}>
      <>
      <input
          id="video-upload"
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className={style.videoUploadInput}
        />
        <label htmlFor="video-upload" className={style.customFileInput}>
          <p className={style.text}>Выбрать видео</p>
        </label>
        <div className={style.videoUploadContainer}>
          {selectedFile ? (
            <div className={style.videoWrapper}>
              <video
                src={selectedFile}
                controls
                className={style.video}
              />
            </div>
          ) : (
            <div className={style.videoPreview}>
              {/* <p className="video-preview__text">Загрузи свое крутое видео</p> */}
            </div>
          )}
        </div>
        <Form data={data}/>
        <button className={style.addVideoButton} onSubmit={onSubmit}>Добавить видео</button>
      </>
    </MenuPage>
  );
}

export default AddVideoPage;