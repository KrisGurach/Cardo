import { FC } from "react";
import React from "react";
import style from './style.module.css';
import MenuPage from "../../components/menu-page/menu-page";
import Form from "../../components/form/form";
import { inputValuesMock } from "../../constants/mocks";
import { ProfileFormData } from "../../constants/constants";

const defaultValues = {id: 0,
  firstName: '',
  surname: '',
  lastName: '',
  email: '',
  birthday: '',
  phone: '',
  socialMediaUrl: '',
  portfolioUrl: '',
  country: '',
  city: '',
  role: ''}

const MyProfilePage:FC = () =>  {

  return (
    <MenuPage title="Мой профиль">
      <Form data={ProfileFormData} inputValues={inputValuesMock} defaultValues={defaultValues}/>
    </MenuPage>
  );
}

export default MyProfilePage;