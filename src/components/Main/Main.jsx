import CountdownTimer from "../CountdownTimer/CountdownTimer";
import Navbar from "../Navbar/Navbar";

export default function Main() {
  return (
    <main>
      <section className="main">
        <img />
        <h1 className="main__title">Открыта регистрация на национальные и региональные этапы</h1>
        <button type="button" className="main__button main__button-login">Зарегистрироваться</button>        
      </section>
      <section className="main__nav">
        <CountdownTimer />
        <Navbar title="Соревнования"/> 
        <Navbar title="Видеоконкурс"/>
        <Navbar title="Премия"/>
        <Navbar title="Проекты"/>
        {/* сюда передаем заголовок для построения компонента */}
      </section>
    </main>
  );
}
