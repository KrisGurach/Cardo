import { FC, useState } from "react";
import React from "react";
import style from './style.module.css';
import MenuPage from "../../components/menu-page/menu-page";
import Tabs from "../../components/tabs/tabs";
import ApplicationCard from "../../components/application-card/application-card";
import { TabsTypes, TEventPage } from "../../components/types/types";

const EventsPage:FC<TEventPage> = ({cards}) =>  {

  const [currTab, setCurrTab] = useState(TabsTypes.ACTIVE)

  return (
    <MenuPage title="Мероприятия">
      <>
        <Tabs 
          tabsData={[{text: "Активные"}, {text: "Завершённые"}]}
          currentTab={currTab}
          setCurrentTab={(curr) => {setCurrTab(curr as TabsTypes)}}
          onClick={()=>{}}
        />
        <div className={style.mainContent}>
          {cards && currTab===TabsTypes.ACTIVE && cards.map(card => {
            if (card.isActive) {
              return (<ApplicationCard {...card}/>)
            }
          })}
          {cards && currTab===TabsTypes.FINISHED && cards.map(card => {
            if (!card.isActive) {
              return (<ApplicationCard {...card}/>)
            }
          })}
        </div>
      </>
    </MenuPage>
  );
}

export default EventsPage;