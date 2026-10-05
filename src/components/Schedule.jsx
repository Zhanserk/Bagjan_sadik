import React, { useEffect, useState } from 'react';
import { SCHEDULE } from '../data/site';

const ICONS = ['👋', '🍳', '🎨', '🌳', '😴', '🧸'];
// Күн уақытына қарай аспан түсі: таң → түс → кеш
const SKY = [
  ['#ffd9a0', '#ffb27a'], ['#9fdcff', '#d8f1ff'], ['#7ccaff', '#c4ecff'],
  ['#4fb8f5', '#a5e0ff'], ['#8ec9ff', '#ffe0a8'], ['#ffb27a', '#c59bff'],
];
const n = SCHEDULE.length;
const pos = (k) => {
  const t = k / (n - 1);
  return { left: `${8 + 84 * t}%`, top: `${86 - Math.sin(Math.PI * t) * 62}%` };
};

// «Күн жолы»: күн күн тәртібі бойынша доғамен жүреді; басуға болады, өздігінен де ауысады.
export default function Schedule() {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return undefined;
    const t = setInterval(() => setI((v) => (v + 1) % n), 4200);
    return () => clearInterval(t);
  }, [auto]);

  const [time, title, text] = SCHEDULE[i];

  return (
    <section className="day" id="day">
      <div className="wrap">
        <div className="section-title reveal">
          <p className="kicker">Күн тәртібі</p>
          <h2>Балаңыздың бір күні — <em>күн жолымен</em></h2>
          <p>Күн аспанда жүрген сайын балаңыздың күні өтеді: ойын, тамақтану, ұйқы және серуен теңгерімді жоспарланған.</p>
        </div>

        <div
          className="sunpath reveal"
          style={{ '--sky-a': SKY[i][0], '--sky-b': SKY[i][1] }}
          onMouseEnter={() => setAuto(false)}
          onMouseLeave={() => setAuto(true)}
        >
          <svg className="sunpath-arc" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <path d="M8 86 Q50 -38 92 86" />
          </svg>
          <div className="sun-now" style={pos(i)} aria-hidden="true">☀️</div>
          {SCHEDULE.map(([t], k) => (
            <button
              key={t}
              type="button"
              className={`stop ${k === i ? 'on' : ''} ${k < i ? 'past' : ''}`}
              style={pos(k)}
              aria-label={`${t} — ${SCHEDULE[k][1]}`}
              onClick={() => { setAuto(false); setI(k); }}
            >
              {t}
            </button>
          ))}
          <div className="sunpath-ground" aria-hidden="true" />
        </div>

        <div className="day-card" key={i}>
          <span className="day-ic">{ICONS[i]}</span>
          <div>
            <small>{time}</small>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
          <div className="day-dots" aria-hidden="true">
            {SCHEDULE.map(([t], k) => <i key={t} className={k === i ? 'on' : ''} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
