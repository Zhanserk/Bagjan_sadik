import React from 'react';
import { DOOR_PHOTOS, GROUPS } from '../data/site';

export default function Groups() {
  return (
    <section className="groups" id="groups">
      <div className="wrap">
        <div className="section-title reveal">
          <p className="kicker">Топтар мен бөлмелер</p>
          <h2>Қосымша ғимаратта екі <em>жайлы топ</em></h2>
          <p>Әр топта киім шешетін, ойын-жатын және санитарлық бөлмелер бөлек жоспарланған.</p>
        </div>

        <div className="group-cards">
          {GROUPS.map((g, i) => (
            <article key={g.title} className={`gcard tone-${g.tone} reveal`} style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="gcard-tag">{g.tag}</span>
              <h3>{g.title}</h3>
              <p>{g.text}</p>
              <ul>{g.items.map((it) => <li key={it}>{it}</li>)}</ul>
            </article>
          ))}
        </div>

        <div className="doors reveal">
          <h3>Біздің топтар</h3>
          <div className="doors-row">
            {DOOR_PHOTOS.map((d) => (
              <figure key={d.src} className="door">
                <img src={d.src} alt={d.name} loading="lazy" />
                <figcaption>{d.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
