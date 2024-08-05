import Header from "../Header/Header";
import image from "../../images/registartion-success.png";

export default function RegistrationSuccess() {
  return (
    <section className="registration-success">
    <Header />
    <img className="registration-success__image" src={image} alt="" />
    <div className="registration-success__container">
      <p className="registration-success__main-text">Привет, username!</p>
      <p className="registration-success__text">Регистрация прошла успешно!</p>
    </div>
  </section>
  )
}