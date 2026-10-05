import React from 'react';
import { ADVANTAGES } from '../data/site';

export default function Advantages() {
  return (
    <section className="adv-sec" id="why">
      <div className="wrap">
        <div className="section-title light reveal">
          <p className="kicker">Неге бізді таңдайды</p>
          <h2>Ата-аналар сенетін <em>төрт себеп</em></h2>
        </div>
        <div className="adv-grid">
          {ADVANTAGES.map((a, i) => (
            <div className="adv reveal" key={a.title} style={{ transitionDelay: `${i * 70}ms` }}>
              <span className="adv-ic">{a.ic}</span>
              <h4>{a.title}</h4>
              <p>{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
