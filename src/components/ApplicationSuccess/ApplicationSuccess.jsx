import Header from "../Header/Header";

export default function ApplicationSuccess({userName}) {
  return (
    <section className="application-success">
      <Header />
      <img className="application-success__image" src={require("../../images/application-success.png")} alt="" />
      <div className="application-success__container">
        <p className="application-success__main-text">Привет, {userName}!</p>
        <p className="application-success__text">Заявка отправлена!</p>
      </div>
    </section>
  );
}
