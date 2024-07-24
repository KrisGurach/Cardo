import CountdownTimer from "../CountdownTimer/CountdownTimer";
import Navbar from "../Navbar/Navbar";

export default function Main() {
  return (
    <main className="main">
      <section className="main__container">
        <img className="main__image" src="../../images/main-page-photo.png" alt=""/>
        <p className="main__title">Открыта регистрация на национальные и региональные этапы</p>
        <button type="button" className="main__button-login">Зарегистрироваться</button>        
      </section>
        <CountdownTimer />
      <section className="main__nav">
        <Navbar title="Соревнования"/> 
        <Navbar title="Видеоконкурс"/>
        <Navbar title="Премия"/>
        <Navbar title="Проекты"/>
      </section>
    </main>
  );
}
