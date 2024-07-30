/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import vkIcon from '../../images/icon-vk.svg';
import googleIcon from '../../images/icon-google.svg';
import appleIcon from '../../images/icon-apple.svg';

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
      <h3 className="form__title">Войти в аккаунт</h3>
      <form className="form__form" onSubmit={handleSubmit}>
        <div className="form__field">
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
        <div className="form__field">
          <input
            className="form__input"
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className={
              showPassword ? "form__button-hidden" : "form__button-show"
            }
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          ></button>
        </div>
        <div className="form__container-icon">
          <button className="form__button-by-network">
            <img src={vkIcon} alt="регистрация через ВКонтакте" />
          </button>
          <button className="form__button-by-network">
            <img src={googleIcon} alt="регистрация через Google" />
          </button>
          <button className="form__button-by-network">
            <img src={appleIcon} alt="регистрация через Apple" />
          </button>
        </div>
        <button className="form__button signin__button" type="submit">
          Войти
        </button>
      </form>
      <p className="registration__text">
        <a
          href="https://localhost/registration"
          className="signin__link"
          target="_blank"
        >
        Зарегистрироваться
        </a>
      </p>
    </div>
  );
}
