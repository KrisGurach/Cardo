import { FC } from "react";
import React from "react";
import style from './style.module.css';
import MenuPage from "../../components/menu-page/menu-page";
import Tabs from "../../components/tabs/tabs";
import ApplicationCard, { TApplicationCard } from "../../components/application-card/application-card";

type TEventPage = {
  cards: TApplicationCard[]
}

const EventsPage:FC<TEventPage> = ({cards}) =>  {
  return (
    <MenuPage title="Мероприятия">
      <>
        <Tabs tabs={["Активные", "Завершённые"]}/>
        <div className={style.mainContent}>
          {cards && cards.map(card => {
            return (<ApplicationCard {...card}/>)
          })}
        </div>
      </>
    </MenuPage>
  );
}

export default EventsPage;