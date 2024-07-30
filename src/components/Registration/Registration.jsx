/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import vkIcon from '../../images/icon-vk.svg';
import googleIcon from '../../images/icon-google.svg';
import appleIcon from '../../images/icon-apple.svg';

export default function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form">
      <img
        className="form__logo"
        src={require("../../images/logotype.png")}
        alt="логотип, возврат на главную страницу"
      />
      <h3 className="form__title">Создать аккаунт</h3>
      <form className="form__form" onSubmit={handleSubmit}>
        <div className='form__field'>
          <input
            className="form__input"
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form__field'>
          <input
            className="form__input"
            type="password"
            id="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='form__field'>
          <input
            className="form__input"
            type="password"
            id="confirm-password"
            placeholder="Подтвердите пароль"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className='form__container-icon'>
          <button className='form__button-by-network'><img src={vkIcon} alt="регистрация через ВКонтакте" /></button>
          <button className='form__button-by-network'><img src={googleIcon} alt="регистрация через Google" /></button>
          <button className='form__button-by-network'><img src={appleIcon} alt="регистрация через Apple" /></button>
        </div>
        <button className="form__button" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <p className="registration__text">
        Создавая аккаунт ты соглашаешься с <a href="#" className="registration__link">
          условиями и политикой конфиденциальности.
        </a>
      </p>
    </div>
  );
}
