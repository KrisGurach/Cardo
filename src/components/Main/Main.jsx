import {competitions, videocontest, prize, project} from "../../utils/information";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <main className="main">
      <Header />
      <section className="main__container">
        <iframe
          className="main__video"
          src="https://www.youtube.com/embed/8bmc-BPvwis"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className="main__title">
          Открыта регистрация на национальные и региональные этапы
        </p>
        <Link to="/registration">
          <button type="button" className="main__button-login">
            Зарегистрироваться
          </button>
        </Link>
      </section>
      <CountdownTimer />
      <section className="main__nav">
        <Navbar
          title="Соревнования"
          description={
            <>
              Гранд-финал <strong className="main__text_bold">КАРДО [7]</strong>{" "}
              представляет из себя формат международного мероприятия уличной
              культуры, где проходят финальные соревнования по направлениям:
              хип-хоп, брейкинг, паркур, фриран, воркаут, кикскутинг, трикинг,
              граффити, скейтбодинг, BMX, диджеинг на специально оборудованных
              площадках, где участники будут показывать свои навыки для
              определения лучших.
            </>
          }
          hiddenSection={competitions}
        />
        <Navbar
          title="Видеоконкурс"
          description={
            <>
              <p>
                На этапе регистрации участник снимает и выкладывает видеоролик
                длительностью от 1 до 3 минут. Экспертный совет просматривает и
                оценивает материал, по результатам на официальном сайте, а также
                на странице сообщества в социальной сети Вконтакте публикуется
                список ТОП-48 участников. Участники ТОП-48 получают творческое
                задание. После выполнения творческого задания будут отобраны
                ТОП-12 участников. Участники ТОП-12 получают творческое задание
                на финал в личном кабинете.
              </p>
              <p>
                На Гранд-финале Экспертный совет просматривает финальные работы
                и оценивает защиту участников, которая проходит в очном формате.
                Победителей Видеоконкурса объявят на Гранд-финале после
                просмотра и оценивания финального задания.
              </p>
            </>
          }
          hiddenSection={videocontest}
        />
        <Navbar
          title="Премия"
          description="Одно из конкурсных направлений международной конкурс-премии «КАРДО», ориентированное на признание и поощрение 
          лучших сообществ и организации, которые внесли наибольший вклад в развитие конкретного направления уличной культуры и спорта 
          за прошедший год (2023)."
          hiddenSection={prize}
        />
        <Navbar
          title="Проекты"
          description="Мы создаем условия, чтобы любой желающий смог развивать свои проектные идеи и мечты. Каждый может оформить 
          заявку на получение грантовой поддержки, пройти очную защиту на гранд-финале 22-25 августа и получить деньги на реализацию 
          своего проекта!"
          hiddenSection={project}
        />
      </section>
      <Menu />
    </main>
  );
}
