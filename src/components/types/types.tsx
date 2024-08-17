import { ReactElement } from "react";

export enum TabsTypes {
  ACTIVE = "Активные",
	FINISHED = "Завершённые"
}

export type TApplicationCard = {
  title: string;
  startTime: string;
  endingTime: string;
  status: string;
  phase: string;
  place?: number;
  isActive: boolean
}

export type TEventPage = {
  cards: TApplicationCard[]
}

export type TFieldset = {
  title?: string;
  inputs: {
    name: string;
    label: string;
    placeholder: string;
    type?: string;
  }[]
}

export type TInputValues = {
  id: number,
  firstName: string,
  surname: string,
  lastName: string,
  email: string,
  birthday: string,
  phone: string,
  socialMediaUrl: string,
  portfolioUrl: string,
  country: string,
  city: string,
  role: string
}

export type TFormData = {
  data: TFieldset[]
  inputValues?: TInputValues
  defaultValues?: any
  getValues?: () => any
}

export type TMenuPage = {
  title: string;
  children?: ReactElement;
  extraClass?: string;
  link?: string;
};

export type TMenuItem = {
  title: string;
  link: string;
}

export type TProfileInfo = {
  avatar?: string;
  name: string;
  tag: string;
}

export type TSocialItem = {
  link: string;
  icon: string
}

export type TabProps = {
	text: string;
	active: boolean;
	onClick?: (text: string) => void;
};

export type TabData = {
	text: string;
};

export type TabsProps = {
	tabsData: TabData[];
	currentTab: string;
  setCurrentTab: (value: string) => void;
	onClick: (value: string) => void;
};

export enum SettingTypes {
  CHECKBOX = 'checkbox',
  BUTTON = 'button'
}

export type TSetting = {
  title: string;
  type: SettingTypes;
  text?: string
}