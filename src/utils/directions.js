import bmxPhoto from "../images/bmx-direct.jpg";
import breakingPhoto from "../images/breaking-direct.webp";
import workoutPhoto from "../images/workout-direct.jpg";
import graffitiPhoto from "../images/graffiti-direct.jpg";
import djPhoto from "../images/dj-direct.jpg";
import parkurPhoto from "../images/parkur-direct.jpg";
import trickingPhoto from "../images/triking-direct.jpg";
import frirunPhoto from "../images/frirun-direct.jpg";

const directionsData = [
  {
    endpoint: "/bmx",
    image: [bmxPhoto, frirunPhoto, workoutPhoto],
    description: (
      <>
        <p>
          Сбросив себя оковы шаблонных стандартов, BMX street и{" "}
          <strong className="main__text_orange">КАРДО</strong> продолжают
          объединять множество идейных людей по всему миру, образуя вокруг себя
          огромное комьюнити.
        </p>
        <p>
          BMX street в настоящий момент по-прежнему остаётся спортивной
          велодисциплиной, на которую до сих пор не наложились официальные
          правила, рамки и ограничения. Наверное, именно по этому, темпы роста
          интереса к этому спортивному направлению у современной молодежи не
          останавливаются, а только растут.
        </p>
      </>
    ),
    hiddenSections: [
      {
        title: "Описание",
        description: (
          <div>
            <p>
              В [7] сезоне направление Веломотоэкстрим (BMX) разделено на две
              категории: <strong className="main__text_bold">PRO</strong> и{" "}
              <strong className="main__text_bold">Amateur</strong>.
            </p>
            <p>
              На этапе регистрации участник снимает и выкладывает видео со
              вставкой интро и аутро в социальную сеть участника с хэштегами{" "}
              <strong className="main__text_bold">#KARDO</strong>,{" "}
              <strong className="main__text_bold">#KARDO7</strong>. А также
              загружает видео в личном кабинете приложения КАРДО.
            </p>
            <p>
              Снять и смонтировать нарезку из видео с лучшими трюками,
              исполненными самим участником и запечатленными на камеру не ранее
              лета 2023 года по настоящее время. В видео должно содержаться не
              менее 10 трюков.
            </p>
            <p>
              <strong className="main__text_bold">Критерии оценки:</strong>
            </p>
            <ol>
              <li>Сложность.</li>
              <li>Амплитуда.</li>
              <li>Чистота исполнения.</li>
            </ol>
            <p>
              Участники, успешно прошедшие отборочные этапы конкурсов, получают
              сертификаты участников конкурса в электронном виде. Участники
              очного этапа проекта (Гранд-финала) получают дипломы призеров
              (Финалистов) и Победителей конкурса на бумажных носителях.
            </p>
          </div>
        ),
      },
      {
        title: "Философия направления",
        description: (
          <div className="modal__hidden-container">
            <div className="modal__flex-container">
              <div className="modal__container-grey">
                <p className="modal__container-number">01</p>
              </div>
              <div className="modal__container-hidden-text">
                <p className="modal__text">
                  <strong className="main__text_bold">
                    <strong className="main__text_orange">
                      Отсутствие ограничений.
                    </strong>{" "}
                    Тебе не нужен скейт парк, чтобы продемонстрировать своё
                    мастерство. Для этого тебе нужна только улица.
                  </strong>
                </p>
              </div>
            </div>
            <div className="modal__flex-container">
              <div className="modal__container-grey">
                <p className="modal__container-number">02</p>
              </div>
              <div className="modal__container-hidden-text">
                <p className="modal__text">
                  <strong className="main__text_bold">
                    <strong className="main__text_orange">
                      Бросаешь вызов самому себе. 
                    </strong>{" "}
                    Оказавшись один на один со спотом, у тебя нет вариантов ему
                    проиграть
                  </strong>
                </p>
              </div>
            </div>
            <div className="modal__flex-container">
              <div className="modal__container-grey">
                <p className="modal__container-number">03</p>
              </div>
              <div className="modal__container-hidden-text">
                <p className="modal__text">
                  <strong className="main__text_bold">
                    <strong className="main__text_orange">Эмоции. </strong>{" "}
                    Непреодолимая жажда новой порции ощущений, от каждого нового
                    увезенного трюка
                  </strong>
                </p>
              </div>
            </div>
            <div className="modal__flex-container">
              <div className="modal__container-grey">
                <p className="modal__container-number">04</p>
              </div>
              <div className="modal__container-hidden-text">
                <p className="modal__text">
                  <strong className="main__text_bold">
                    <strong className="main__text_orange">
                      Путешествие и знакомства. 
                    </strong>{" "}
                    C каждым новым трипом, с каждым новым городом, ты
                    знакомишься с новыми людьми и всё больше узнаёшь себя
                  </strong>
                </p>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "#Кардолюди",
        description: (
          <div className="modal__hidden-container">
            <div className="modal__flex-container">
              <div className="modal__container-image">
                <img className="modal__hidden-image" src={require("../images/bmx-rider-photo.jpg" )} alt="Федор Забалуев"/>
              </div>  
              <div className="modal__container-hidden-text">
                <p className="modal__text main__text_bold main__text_orange">
                  Федор Забалуев
                </p>
                <p className="modal__text modal__text_light">
                  Один из основателей спортивного  BMX-движения в России,
                  профессиональный  BMX-райдер.
                </p>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },

  {
    endpoint: "/breaking",
    image: [breakingPhoto, workoutPhoto],
    description:
      "Впервые «брейкинг» появился в Бронксе в 1974 году. Этот термин придумал DJ Kool Herk: он называл «би-боями» и «би-гёрл» молодых людей, танцующих под его перкуссионные «брэйксы» на уличных вечеринках в парке Сидар с 1974 года. ",
    hiddenSections: [
      {
        title: "Описание",
        description:
          "В начале 80-х би-бои из «Rock Steady Crew» вдохнули новую жизнь в би-боинг, изобрели много новых движений и вывели его на новый уровень. Впервые танец был представлен за пределами Нью-Йорка в фильме «Flashdance» в 1983 году, в котором брейкинг фигурировал в одном из эпизодов. Хотя брейкинг разнообразен по количеству вариаций, доступных в танце, он в основном состоит из четырёх видов движений: Toprock, Footwork, Power Moves и Freezes. Брейкинг, обычно исполняется под музыку, содержащие драм-брэйки (соло на ударных), особенно в хип-хоп музыке, фанке, соуле и брейкбите, хотя современные тенденции допускают гораздо более широкое разнообразие музыки в определённых диапазонах темпа и ритмов. В наше время брейкинг становится более сложным, интересным и популярным. Брейкинг был включён в программу Олимпийских Игр 2024 года, которые пройдут в Париже.",
      },
      {
        title: "Философия направления",
        description: "описание раздела",
      },
      {
        title: "Площадка направления",
        description: "описание раздела",
      },
      {
        title: "#Кардолюди",
        description: "описание раздела кардолюди",
      },
    ],
  },

  {
    endpoint: "/workout",
    image: [workoutPhoto, frirunPhoto],
    description:
      "Это история. Воркаут-номинация на КАРДО — это всегда накал страстей, эмоции, яркие и запоминающиеся события. Каждый год мы предлагаем новое и каждый год мы зажигаем огонь. Воркаут-история пишется именно здесь и мы готовы открыть новую главу в этом сезоне.",
    hiddenSections: [
      {
        title: "Описание",
        description: "описание раздела",
      },
      {
        title: "Философия направления",
        description: "описание раздела",
      },
      {
        title: "Площадка направления",
        description: "описание раздела",
      },
      {
        title: "#Кардолюди",
        description: "описание раздела кардолюди",
      },
    ],
  },

  {
    endpoint: "/graffiti",
    image: [graffitiPhoto, trickingPhoto],
    description: (
      <>
        <p>
          Граффити в мире <strong className="main__text_orange">КАРДО</strong> —
          это возможность показать свой стиль, навыки, обменяться опытом и
          вдохновением, а также привлечь внимание к искусству улиц.
        </p>
        <p>
          <strong className="main__text_orange">КАРДО</strong> способствует
          развитию культуры уличного искусства, привлекает внимание к творчеству
          художников и создает возможности для общения и взаимодействия в
          граффити сообществе.
        </p>
      </>
    ),
    hiddenSections: [
      {
        title: "Описание",
        description: "",
      },
      {
        title: "Философия направления",
        description: "описание раздела",
      },
      {
        title: "Площадка направления",
        description: "описание раздела",
      },
      {
        title: "#Кардолюди",
        description: "описание раздела кардолюди",
      },
    ],
  },

  {
    endpoint: "/dj",
    image: [djPhoto, trickingPhoto, frirunPhoto],
    description: (
      <>
        <p>
          Ни одно значимое событие не обходится без музыки, диджеинг в{" "}
          <strong className="main__text_orange">КАРДО</strong> — это как
          здоровый ритм биения сердца, без которого организм не сможет
          полноценно функционировать. Номинацией диджеинга в{" "}
          <strong className="main__text_orange">КАРДО</strong> мы объединяем
          лучших диджеев, музыкантов и продюсеров с единой целью — развитие
          культуры и лучших качеств в себе и во всем, что нас окружает.
        </p>
      </>
    ),
    hiddenSections: [
      {
        title: "Описание",
        description: "",
      },
      {
        title: "Философия направления",
        description: "описание раздела",
      },
      {
        title: "Площадка направления",
        description: "описание раздела",
      },
      {
        title: "#Кардолюди",
        description: "описание раздела кардолюди",
      },
    ],
  },

  {
    endpoint: "/parkur",
    image: [parkurPhoto, bmxPhoto, frirunPhoto],
    description: (
      <>
        <p>
          Паркур заложен в каждом из нас, поэтому он так понятен и доступен
          многим людям, делая его универсальным языком общения, объединяя людей
          из разных городов и стран. И этим он очень близок премии{" "}
          <strong className="main__text_orange">КАРДО</strong>.
        </p>
      </>
    ),
    hiddenSections: [
      {
        title: "Описание",
        description: "описание раздела",
      },
      {
        title: "Философия направления",
        description: "описание раздела",
      },
      {
        title: "Площадка направления",
        description: "описание раздела",
      },
      {
        title: "#Кардолюди",
        description: "описание раздела кардолюди",
      },
    ],
  },

  {
    endpoint: "/tricking",
    image: [trickingPhoto, bmxPhoto, frirunPhoto],
    description: (
      <>
        <p>
          Для трикинга <strong className="main__text_orange">КАРДО</strong> —
          возможность заявить о себе на весь мир, показать лучших атлетов нашего
          направления и познакомить всех с нашей культурой.
        </p>
        <p>
          Для <strong className="main__text_orange">КАРДО</strong> трикинг —
          батлы мирового уровня, где финалисты, по уровню владения своим телом и
          зрители, по эмоциям на трибунах, достойны олимпиады.
        </p>
      </>
    ),
    hiddenSections: [
      {
        title: "Описание",
        description: "описание раздела",
      },
      {
        title: "Философия направления",
        description: "описание раздела",
      },
      {
        title: "Площадка направления",
        description: "описание раздела",
      },
      {
        title: "#Кардолюди",
        description: "описание раздела кардолюди",
      },
    ],
  },

  {
    endpoint: "/freerun",
    image: [frirunPhoto, trickingPhoto],
    description: (
      <p>
        Творческое начало — это то, что объединяет фриран с уличным искусством и
        безоговорочно делает его важной частью{" "}
        <strong className="main__text_orange">КАРДО</strong>.
      </p>
    ),
    hiddenSections: [
      {
        title: "Описание",
        description: "описание раздела",
      },
      {
        title: "Философия направления",
        description: "описание раздела",
      },
      {
        title: "Площадка направления",
        description: "описание раздела",
      },
      {
        title: "#Кардолюди",
        description: "описание раздела кардолюди",
      },
    ],
  },
];

export { directionsData };
