import { FC, useEffect } from "react";
import React from "react";
import style from './style.module.css';
import Tab from '../tab/tab';
import { TabsProps } from "../types/types";

export const Tabs: FC<TabsProps> = ({ tabsData, currentTab, setCurrentTab, onClick }) => {
	// Изменение currentTab по клику на Tab
	const handleTabClick = (text: string) => {
      setCurrentTab(text);
	};

  // Вызов функции click при изменении currentTab
  useEffect(() => {
      onClick(currentTab);
  }, [currentTab, onClick]);

	return (
		<ul className={style.tabs}>
			{tabsData.map((tab, index) => {
				return (
					<Tab
						key={index}
						text={tab.text}
						active={currentTab === tab.text}
						onClick={() => handleTabClick(tab.text)}
					/>
				);
			})}
		</ul>
	);
};

export default Tabs;