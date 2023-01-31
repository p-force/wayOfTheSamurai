import React from 'react';

export default function Home() {
  return (
    <>
      <div className="annotation container col-6" style={{ marginTop: '30px', marginBottom: '30px' }}>
        <p>
          «Наруто» (яп. NARUTO - ナルト -) —
          {' '}
          <a className="hover-underline-animation" href="https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D1%80%D1%83%D1%82%D0%BE#:~:text=%E3%83%8A%E3%83%AB%E3%83%88%20%2D)%20%E2%80%94-,%D1%81%D1%91%D0%BD%D1%8D%D0%BD,-%2D%D0%BC%D0%B0%D0%BD%D0%B3%D0%B0%20%D0%9C%D0%B0%D1%81%D0%B0%D1%81%D0%B8">
            сёнэн
          </a>
          -
          <a className="hover-underline-animation" href="https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D1%80%D1%83%D1%82%D0%BE#:~:text=%E2%80%94%20%D1%81%D1%91%D0%BD%D1%8D%D0%BD%2D-,%D0%BC%D0%B0%D0%BD%D0%B3%D0%B0,-%D0%9C%D0%B0%D1%81%D0%B0%D1%81%D0%B8%20%D0%9A%D0%B8%D1%81%D0%B8%D0%BC%D0%BE%D1%82%D0%BE%2C%20%D1%80%D0%B0%D1%81%D1%81%D0%BA%D0%B0%D0%B7%D1%8B%D0%B2%D0%B0%D1%8E%D1%89%D0%B0%D1%8F">
            манга
          </a>
          {' '}
          <a className="hover-underline-animation" href="https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D1%80%D1%83%D1%82%D0%BE#:~:text=%D1%81%D1%91%D0%BD%D1%8D%D0%BD%2D%D0%BC%D0%B0%D0%BD%D0%B3%D0%B0-,%D0%9C%D0%B0%D1%81%D0%B0%D1%81%D0%B8%20%D0%9A%D0%B8%D1%81%D0%B8%D0%BC%D0%BE%D1%82%D0%BE,-%2C%20%D1%80%D0%B0%D1%81%D1%81%D0%BA%D0%B0%D0%B7%D1%8B%D0%B2%D0%B0%D1%8E%D1%89%D0%B0%D1%8F%20%D0%BE%20%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8">
            Масаси Кисимото
          </a>
          , рассказывающая о жизни шумного и непоседливого ниндзя - подростка Наруто Удзумаки, мечтающего достичь всеобщего признания и стать Хокагэ — главой своего селения и сильнейшим ниндзя. Чтобы добиться уважения окружающих, ему предстоит пройти через тысячи препятствий: экзамены ниндзя, различные миссии и сражения.
        </p>
        <img src="/img/naruto1.webp" alt="naruto" className="imgnaruto1" />
        <img src="/img/manga1.webp" alt="konoha" className="imgmanga1" />
        <p>Манга выпускалась с 21 сентября 1999 года по 10 ноября 2014 года издательством Shueisha в журнале Weekly Shonen Jump.Объединена в 72 танкобона.</p>

        <p>
          По манге были созданы два аниме - сериала от компаний
          {' '}
          <a className="hover-underline-animation" href="https://www.aniplex.co.jp/">Aniplex</a>
          {' '}
          и
          {' '}
          <a className="hover-underline-animation" href="https://pierrot.jp/">Studio Pierrot</a>
          .
        </p>

        <p>
          Первый аниме - сериал, «Наруто», транслировался в Японии по каналу TV Tokyo с 3 октября 2002 года по 8 февраля 2007 года и закончился 220 - й серией.
          Второй аниме - сериал, «Наруто: Ураганные хроники» (яп.NARUTO - ナルト - 疾風伝 Наруто Сиппу:дэн), транслировался с 15 февраля 2007 года по 23 марта 2017 года и закончился 500 - й серией.
          С момента начала трансляции в эфир вышло свыше 700 серий.В аниме - адаптацию манги входят: два аниме - сериала, одиннадцать анимационных фильмов и восемь OVA.На основе манги и аниме были созданы также видеоигры, романы, ранобэ и коллекционная карточная игра.
        </p>
      </div>
      <hr />
      <br />
      <div className="flex-column movies text-end" style={{ margin: '30px 30px 0 30px' }}>

        {/* <img id="imgRama1" src="img/whiteRama.png" alt="rama 1" />
        <img id="imgNumber1" src="img/1-re.png" alt="number 1" /> */}

        <div id="mov1" className="col-5 text-end">
          <li className="l1">
            Наруто (1 сезон, 1-19 эпизоды)
            <li>Наруто OVA: Миссия: Защита Деревни Водопада! - 2003</li>
          </li>
        </div>

        {/* <img id="imgNumber2" src="img/2.png" alt="number 2" /> */}
        {/* <img id="imgRama2" src="img/whiteRama.png" alt="rama 2" /> */}

        <div id="mov2" className="col-12 ">
          <li className="l2">
            Наруто (1 сезон, 20-101 эпизоды)

            <li>Наруто Фильм: Столкновение Ниндзя в Стране Снега - п/ф, 2004</li>
          </li>
        </div>

        {/* <img id="imgNumber3" src="img/3.png" alt="number 3" /> */}
        {/* <img id="imgRama3" src="img/whiteRama.png" alt="rama 3" /> */}

        <div id="mov3" className="col-5">
          <li className="l3">
            Наруто (1 сезон, 102-147 эпизоды)

            <li>Наруто Фильм: Легенда о Камне Гелела - п/ф, 2005</li>
          </li>
        </div>

        {/* <img id="imgNumber4" src="img/4.png" alt="number 4" /> */}
        {/* <img id="imgRama4" src="img/whiteRama.png" alt="rama 4" /> */}

        <div id="mov4" className="col-12">
          <li className="l4">
            Наруто (1 сезон, 148-196 эпизоды)

            <li>Наруто Фильм: Защитники Королевства Полумесяца - п/ф, 2006</li>
          </li>
        </div>

        {/* <img id="imgNumber5" src="img/5.png" alt="number 5" /> */}
        {/* <img id="imgRama5" src="img/whiteRama.png" alt="rama 5" /> */}

        <div id="mov5" className=" col-5">
          <li className="l5">Наруто (1 сезон, 196-220 эпизоды)</li>
          <li className="l5">
            Наруто: Шиппууден (2 сезон, 1-32 эпизоды)

            <li>Наруто Шиппууден Фильм - п/ф, 2007</li>
          </li>
        </div>

        {/* <img id="imgNumber6" src="img/6.png" alt="number 6" /> */}
        {/* <img id="imgRama6" src="img/whiteRama.png" alt="rama 6" /> */}

        <div id="mov6" className=" col-12">
          <li className="l6">
            Наруто: Шиппууден (2 сезон, 33-53 эпизоды)

            <li>Наруто Шиппууден Фильм: Узы - п/ф, 2008</li>
          </li>
        </div>

        {/* <img id="imgNumber7" src="img/7.png" alt="number 7" /> */}
        {/* <img id="imgRama7" src="img/whiteRama.png" alt="rama 7" /> */}

        <div id="mov7" className="col-5">
          <li className="l7">
            Наруто: Шиппууден (2 сезон, 54-126 эпизоды)

            <li>Наруто Шиппууден Фильм: Воля Огня - п/ф, 2009</li>
          </li>
        </div>

        {/* <img id="imgNumber8" src="img/8.png" alt="number 8" /> */}
        {/* <img id="imgRama8" src="img/whiteRama.png" alt="rama 8" /> */}

        <div id="mov8" className=" col-12">
          <li className="l8">
            Наруто: Шиппууден (2 сезон, 127-175 эпизоды)

            <li>Наруто Шиппууден Фильм: Затерянная Башня - п/ф, 2010</li>
          </li>
        </div>

        {/* <img id="imgNumber9" src="img/9.png" alt="number 9" /> */}
        {/* <img id="imgRama9" src="img/whiteRama.png" alt="rama 9" /> */}

        <div id="mov9" className=" col-5">
          <li className="l9">
            Наруто: Шиппууден (2 сезон, 176-222 эпизоды)

            <li>Наруто Фильм: Кровавая Тюрьма - п/ф, 2011 </li>
          </li>
        </div>

        {/* <img id="imgNumber10" src="img/10.png" alt="number 10" /> */}
        {/* <img id="imgRama10" src="img/whiteRama.png" alt="rama 10" /> */}

        <div id="mov10" className=" col-12">
          <li className="l10">
            Наруто: Шиппууден (2 сезон, 311 эпизод), пролог к девятому фильму

            <li>Наруто Фильм: Путь Ниндзя - п/ф, 2012</li>
          </li>
        </div>

        {/* <img id="imgNumber12" src="img/11.png" alt="number 11" /> */}
        {/* <img id="imgRama11" src="img/whiteRama.png" alt="rama 11" /> */}

        <div id="mov11" className=" col-5">
          <li className="l11">Наруто: Шиппууден (2 сезон, 271 эпизод), дополнение к девятому фильму</li>
          <li className="l11">
            Наруто: Шиппууден (2 сезон, 223-493(без 271 и 311) эпизоды)
          </li>
        </div>

        {/* <img id="imgNumber12" src="img/12.png" alt="number 12" /> */}
        {/* <img id="imgRama12" src="img/whiteRama.png" alt="rama 12" /> */}

        <div id="mov12" className=" col-12">
          <li>Наруто: Последний Фильм - п/ф, 2014</li>
          <li className="l12">Наруто: Шиппууден (2 сезон, 494-500 эпизоды)</li>
        </div>

        {/* <img id="imgNumber13" src="img/13.png" alt="number 13" /> */}
        {/* <img id="imgRama13" src="img/whiteRama.png" alt="rama 13" /> */}

        <div id="mov13" className=" col-5">
          <li>Наруто OVA: День, Когда Наруто Стал Хокаге - 2017</li>
          <li>Боруто: Новое Поколение Наруто (3 сезон)</li>
        </div>
      </div>
    </>
  );
}
