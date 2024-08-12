/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../utils/Api/AuthApi";

export default function SignIn({handleLogin}) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.signIn(email, password)
    .then(() => {
      handleLogin();
      setPassword("");
      setEmail("");
      navigate("/", { replace: true });
    })
    .catch(console.error)
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
        <button className="form__button signin__button" type="submit">
          Войти
        </button>
      </form>
      <p className="registration__text">
        <a
          href="http://localhost:3000/registration"
          className="signin__link"
        >
          Зарегистрироваться
        </a>
      </p>
    </div>
  );
}
