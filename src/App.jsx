import React from 'react';
import Header from './components/Header';
import TrustDocuments from './components/TrustDocuments';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow"><span className="dot"></span>2017 жылдан бері сенімді балабақша</div>
            <h1>Балаңыздың күні <span className="crayon" style={{ color: 'var(--coral-dark)' }}>күлкіге</span> толы өтетін мекен</h1>
            <p className="lead">«Бағыжан» бөбекжай балабақшасы — жарық, жайлы бөлмелер, жеке ойын алаңдары және мейірімді тәрбиешілер. Санитарлық нормаларға толық сай, лицензияланған медициналық қызмет.</p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">Экскурсияға жазылу</a>
              <a href="#about" className="btn btn-ghost">Толығырақ білу</a>
            </div>
            <div className="hero-stats">
              <div className="stat"><b>2017</b><span>жылдан бері жұмыс істейді</span></div>
              <div className="stat"><b>2</b><span>жеке жабдықталған топ</span></div>
              <div className="stat"><b>100%</b><span>санитарлық нормаларға сай</span></div>
            </div>
          </div>
          <div className="hero-art">
            <div className="blob blob-1"></div>
            <div className="hero-photo">
              <div className="ph" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587616211892-b3b7e63a6da4?q=80&w=800&auto=format&fit=crop')" }}></div>
            </div>
            <div className="float-card fc-1"><div className="ic">🧸</div>Жеке шкафшалар</div>
            <div className="float-card fc-2"><div className="ic">☀️</div>Жарық, жылы бөлмелер</div>
            <div className="float-card fc-3"><div className="ic">🌳</div>Ашық ауада серуен</div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about" id="about">
        <div className="wrap about-grid">
          <div className="about-photo-grid">
            <div className="ph tall" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=800&auto=format&fit=crop')" }}></div>
            <div className="ph" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop')" }}></div>
            <div className="ph" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=800&auto=format&fit=crop')" }}></div>
          </div>
          <div className="about-text">
            <div className="eyebrow" style={{ background: 'var(--cream)' }}>Біз туралы</div>
            <h2>Әрбір бөлме — балаға арналған кішкентай әлем</h2>
            <p>«Бағыжан» бөбекжай балабақшасы Түркістан облысы, Сарыағаш ауданы, Жартытөбе ауыл округі, Достық (Қызылжар) елді мекенінде орналасқан. Әрбір жас тобына арнайы бөлінген киім шешетін бөлме, ойын бөлмесі, жатын бөлмесі және дәретхана бар — әр топ бір-бірінен оқшауланған.</p>
            <p>Едендер заманауи жылыту жүйесімен (теплый пол) жабдықталған, терезелер қауіпсіздік құрылғыларымен қамтамасыз етілген. Барлық жиһаз бен жабдық балалардың бой-жас ерекшеліктеріне сай таңдалған.</p>
            <div className="about-facts">
              <div className="fact"><div className="ic">🛏️</div><div><b>Жеке кереует</b><span>әр балаға жеке стационарлық кереует</span></div></div>
              <div className="fact"><div className="ic">🧴</div><div><b>Санитарлық норма</b><span>тексеруден толық өтті</span></div></div>
              <div className="fact"><div className="ic">🔥</div><div><b>Жылы едендер</b><span>барлық бөлмелерде</span></div></div>
              <div className="fact"><div className="ic">🪟</div><div><b>Табиғи жарық</b><span>күннен қорғау жүйесімен</span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* GROUPS SECTION */}
      <section className="groups" id="groups">
        <div className="wrap">
          <div className="section-head center" style={{ margin: '0 auto 52px' }}>
            <div className="eyebrow" style={{ margin: '0 auto 16px', display: 'inline-flex' }}>Топтар мен бөлмелер</div>
            <h2>Қосымша ғимаратта екі жайлы топ</h2>
            <p>Әр топта киім шешетін, ойын-жатын және санитарлық бөлмелер бөлек жоспарланған.</p>
          </div>
          <div className="group-cards">
            <div className="gcard">
              <div className="num">Бірінші топ</div>
              <h3>Кіші топ</h3>
              <p>Киім шешетін бөлме — 18 м², ойын бөлмесі — 34,3 м², жуынатын бөлме — 16,3 м².</p>
              <ul>
                <li>Жеке киім шкафтары</li>
                <li>Жеке ойын алаңы</li>
                <li>Жарық, жылы еден</li>
              </ul>
            </div>
            <div className="gcard">
              <div className="num">Екінші топ</div>
              <h3>Үлкен топ</h3>
              <p>Киім шешетін бөлме — 15,3 м², ойын-жатын бөлмесі — 60,8 м², жуынатын бөлме — 16,8 м².</p>
              <ul>
                <li>Кең ойын-жатын кеңістігі</li>
                <li>Жеке стационарлық кереуеттер</li>
                <li>Медбике бөлмесі — 15 м²</li>
              </ul>
            </div>
            <div className="gcard">
              <div className="num">Қосымша</div>
              <h3>Басқару және медицина</h3>
              <p>Меңгеруші бөлмесі — 22,7 м². Балалардың денсаулығы мен қауіпсіздігі үнемі бақылауда.</p>
              <ul>
                <li>Дәрігерлік бақылау</li>
                <li>Лицензияланған медициналық қызмет</li>
                <li>Күнделікті денсаулық тексеруі</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES SECTION */}
      <section className="adv-sec">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Неге бізді таңдайды</div>
            <h2>Ата-аналар сенетін төрт себеп</h2>
          </div>
          <div className="adv-grid">
            <div className="adv"><div className="ic">🛡️</div><h4>Қауіпсіздік</h4><p>Терезелер мен жарықтандыру құралдарында арнайы қоршау жүйелері орнатылған.</p></div>
            <div className="adv"><div className="ic">🎨</div><h4>Дамыту ортасы</h4><p>Әр бөлме ойын, шығармашылық және демалуға арналған аймақтарға бөліген.</p></div>
            <div className="adv"><div className="ic">👩‍⚕️</div><h4>Медициналық бақылау</h4><p>Арнайы медбике бөлмесі және лицензияланған медициналық көмек көрсету.</p></div>
            <div className="adv"><div className="ic">🧼</div><h4>Тазалық пен гигиена</h4><p>Барлық үй-жайлар санитарлық қағидаларға толық сәйкес ұсталады.</p></div>
          </div>
        </div>
      </section>

      {/* TIMELINE / DAY SCHEDULE */}
      <section className="day" id="day">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '60px', alignItems: 'flex-start' }}>
          <div className="section-head" style={{ marginBottom: 0 }}>
            <div className="eyebrow">Күн тәртібі</div>
            <h2>Балаңыздың бір күні қалай өтеді</h2>
            <p>Ойын, тамақтану, ұйқы және дене шынықтыру — барлығы теңгерімді жоспарланған.</p>
          </div>
          <div className="timeline">
            <div className="titem"><b className="time">08:00 — Қабылдау</b><p>Балаларды жылы қарсы алу, таңғы жаттығу</p></div>
            <div className="titem"><b className="time">09:00 — Таңғы ас</b><p>Дәмді әрі пайдалы таңғы ас</p></div>
            <div className="titem"><b className="time">09:30 — Сабақ пен ойын</b><p>Дамыту сабақтары, шығармашылық жұмыстар</p></div>
            <div className="titem"><b className="time">11:30 — Серуен</b><p>Ашық аулада белсенді қозғалыс ойындары</p></div>
            <div className="titem"><b className="time">13:00 — Түскі ас пен ұйқы</b><p>Жеке кереуеттерде тыныш демалыс уақыты</p></div>
            <div className="titem"><b className="time">16:00 — Бесін ас, еркін ойын</b><p>Ата-аналарды күту, үйге қайту</p></div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="gallery" id="gallery">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Галерея</div>
            <h2>Балабақшамыздың ішінен</h2>
            <p>Жарық ойын бөлмелерінен бастап ашық ауадағы алаңға дейін.</p>
          </div>
          <div className="gal-grid">
            <div className="g-item g-wide" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587616211892-b3b7e63a6da4?q=80&w=900&auto=format&fit=crop')" }}><span>Ойын бөлмесі</span></div>
            <div className="g-item g-tall" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=700&auto=format&fit=crop')" }}><span>Жатын бөлмесі</span></div>
            <div className="g-item" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541692641319-981cc79ee10a?q=80&w=700&auto=format&fit=crop')" }}><span>Санитарлық бөлме</span></div>
            <div className="g-item" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560785496-3c9d27877182?q=80&w=700&auto=format&fit=crop')" }}><span>Аула</span></div>
            <div className="g-item g-wide" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560932684-5e552e2372da?q=80&w=900&auto=format&fit=crop')" }}><span>Ойын алаңы</span></div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testi">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Ата-аналар пікірі</div>
            <h2>Отбасылар не дейді</h2>
          </div>
          <div className="testi-grid">
            <div className="tsc"><p>«Балам әрбір таңда балабақшаға зор ықыласпен барады. Тәрбиешілер өте мейірімді.»</p><div className="who"><div className="avatar">А</div><div><b>Айгүл М.</b><span>ата-ана</span></div></div></div>
            <div className="tsc"><p>«Бөлмелер жарық әрі жылы, гигиена деңгейі жоғары. Көңіліміз толады.»</p><div className="who"><div className="avatar">Б</div><div><b>Бекзат Т.</b><span>ата-ана</span></div></div></div>
            <div className="tsc"><p>«Медбике бөлмесінің болуы бізге қосымша сенімділік береді.»</p><div className="who"><div className="avatar">Ж</div><div><b>Жанар С.</b><span>ата-ана</span></div></div></div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section>
        <div className="wrap">
          <div className="cta">
            <h2>Балаңызды бүгін «Бағыжанмен» таныстырыңыз</h2>
            <p>Орын саны шектеулі — экскурсияға алдын ала жазылыңыз.</p>
            <a href="#contact" className="btn btn-ghost" style={{ color: 'var(--coral-dark)' }}>Байланысу</a>
          </div>
        </div>
      </section>

      {/* CONTACTS & MAP */}
      <section className="contact" id="contact">
        <div className="wrap contact-grid">
          <div className="ccard">
            <div className="eyebrow" style={{ background: 'var(--cream)' }}>Байланыс</div>
            <h2 style={{ margin: '16px 0 24px', fontSize: '28px' }}>Бізбен хабарласыңыз</h2>
            <div className="crow"><div className="ic">📍</div><div><b>Мекенжай</b><span>Түркістан облысы, Сарыағаш ауданы, Жартытөбе ауыл округі, Достық (Қызылжар) елді мекені, Ы.Алтынсарин көшесі, 37-ғимарат</span></div></div>
            <div className="crow"><div className="ic">📞</div><div><b>Телефон</b><br /><a href="tel:+77781881547">+7 (778) 188-15-47</a></div></div>
            <div className="crow"><div className="ic">✉️</div><div><b>Email</b><br /><a href="mailto:nurbak-2016.16@mail.ru">nurbak-2016.16@mail.ru</a></div></div>
            <div className="crow"><div className="ic">🕗</div><div><b>Жұмыс уақыты</b><span>Дүйсенбі – Жұма, 08:00 – 18:00</span></div></div>
          </div>
          <div className="map-box">
            <div>🗺️<br /><br />Достық (Қызылжар) елді мекені, <br />Ы.Алтынсарин көшесі, 37-ғимарат<br /><br /><span style={{ fontWeight: 900 }}>Карта осы жерге енгізіледі</span></div>
          </div>
        </div>
      </section>

      <TrustDocuments />
      <Footer />
    </>
  );
}