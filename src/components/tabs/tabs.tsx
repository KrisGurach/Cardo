import { FC } from "react";
import React from "react";
import style from './style.module.css';

type TTabs = {
  tabs: string[];
}

const Tabs:FC<TTabs> = ({tabs}) =>  {
  return (
    <div className={style.tabs}>
      {tabs.map((tab) => {
        return (
          <p className={style.tab}>{tab}</p>
        )
      })}
    </div>
  );
}

export default Tabs;