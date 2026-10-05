import React from 'react';
import { SCHEDULE } from '../data/site';

const TONES = ['sun', 'leaf', 'sky', 'coral', 'sun', 'leaf'];

export default function Schedule() {
  return (
    <section className="day" id="day">
      <div className="wrap day-grid">
        <div className="day-head reveal">
          <p className="kicker">Күн тәртібі</p>
          <h2>Балаңыздың бір күні <em>қалай өтеді</em></h2>
          <p>Ойын, тамақтану, ұйқы және дене шынықтыру — барлығы теңгерімді жоспарланған.</p>
        </div>
        <ol className="timeline">
          {SCHEDULE.map(([time, title, text], i) => (
            <li key={time} className={`titem tone-${TONES[i]} reveal`} style={{ transitionDelay: `${i * 60}ms` }}>
              <span className="time">{time}</span>
              <div><b>{title}</b><p>{text}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
