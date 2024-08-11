import { FC, useEffect, useState } from "react";
import React from "react";
import style from './style.module.css';
import MenuPage from "../../components/menu-page/menu-page";
import { videosRoute } from "../../constants/routes";
import Form from "../../components/form/form";
import { TFieldset } from "../../components/types/types";

export type TAddVideoData = {
  data: TFieldset[]
}

const AddVideoPage:FC<TAddVideoData> = ({data}) =>  {

  return (
    <MenuPage title="Добавление видео" link={videosRoute}>
      <>
        <Form data={data}/>
        <button className={style.addVideoButton}>Добавить видео</button>
      </>
    </MenuPage>
  );
}

export default AddVideoPage;