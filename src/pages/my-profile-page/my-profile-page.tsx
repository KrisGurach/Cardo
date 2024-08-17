import { FC } from "react";
import React from "react";
import style from './style.module.css';
import MenuPage from "../../components/menu-page/menu-page";
import Form from "../../components/form/form";
import { inputValuesMock } from "../../constants/mocks";
import { ProfileFormData } from "../../constants/constants";
import MainApi from '../../utils/api.js';
import { useParams } from "react-router-dom";

const defaultValues = {
  id: 0,
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
  role: ''
}

const MyProfilePage:FC = () =>  {

  const {id} = useParams();
  const userData = MainApi.getUser(id);

  return (
    <MenuPage title="Мой профиль">
      <Form data={ProfileFormData} inputValues={userData? userData : inputValuesMock} defaultValues={defaultValues}/>
    </MenuPage>
  );
}

export default MyProfilePage;