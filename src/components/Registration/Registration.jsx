import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../utils/Api/AuthApi';

export default function Registration({handleLogin}) {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(
    "При регистрации пользователя произошла ошибка."
  );


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [hasServerError, setHasServerError] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
  
    auth.signUp({ email, password })
      .then(() => {
        return auth.signIn(email, password); // Добавляем return для цепочки промисов
      })
      .then(() => {
        handleLogin();
        setPassword("");
        setEmail("");
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setHasServerError(true);
        
        // Обработка кодов ошибок
        if (error.code === 409) {
          setErrorMessage("Пользователь с таким email уже существует.");
        } else {
          setErrorMessage("Произошла ошибка. Пожалуйста, попробуйте еще раз.");
        }
      });
  };

  return (
    <div className="form">
      <Link to="/">
        <img
          className="form__logo"
          src={require("../../images/logotype.png")}
          alt="логотип, возврат на главную страницу"
        />
      </Link>
      <h3 className="form__title">Создать аккаунт</h3>
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
              showConfirmPassword ? "form__button-hidden" : "form__button-show"
            }
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          ></button>
        </div>
        <div className="form__field">
          <input
            className="form__input"
            type={showPassword ? "text" : "password"}
            id="confirm-password"
            placeholder="Подтвердите пароль"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            className={
              showPassword ? "form__button-hidden" : "form__button-show"
            }
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          ></button>
        </div>
        <div className="form__server-error-container form__server-error-container_type_register">
            {hasServerError && (
              <span className="form__server-error">{errorMessage}</span>
            )}
          </div>
        <button
          className="form__button"
          type="submit"
          disabled={!email || !password || !confirmPassword}
        >
          Зарегистрироваться
        </button>
      </form>
      <p className="registration__text">
        Создавая аккаунт ты соглашаешься с{" "}
        <a
          href="https://kardoaward.com/privacy-policy/"
          className="registration__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          условиями и политикой конфиденциальности.
        </a>
      </p>
    </div>
  );
}
