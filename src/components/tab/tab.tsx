import { FC, useCallback } from 'react';
import React from 'react';
import style from './style.module.css';

export type TabProps = {
	text: string;
	active: boolean;
	onClick?: (text: string) => void;
};

const Tab: FC<TabProps> = ({ text, active, onClick: handleClick }) => {
	const onClick = useCallback(() => {
		if (typeof handleClick === 'function') {
			handleClick(text);
		}
	}, [handleClick, text]);

	return (
		<li className={style.tab}>
			<button
				className={`${style.button} ${active && style.buttonActive}`}
				onClick={onClick}
			>
			<span className={`${style.span} ${active && style.spanActive}`}>
				{text}
			</span>
			</button>
		</li>
	);
};

export default Tab;