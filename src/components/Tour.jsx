import React, { useState } from 'react';
import { TOUR } from '../data/site';

// Виртуалды тур: бөлмені таңдайсыз — суреттері, ауданы және сипаттамасы бірден ашылады.
export default function Tour() {
  const [r, setR] = useState(0);
  const [i, setI] = useState(0);
  const room = TOUR[r];
  const n = room.photos.length;
  const pick = (k) => { setR(k); setI(0); };
  const go = (d) => setI((i + d + n) % n);

  return (
    <section className="tour" id="tour">
      <div className="wrap">
        <div className="section-title light reveal">
          <p className="kicker">Виртуалды тур</p>
          <h2>Балабақшаны <em>аралап көріңіз</em></h2>
          <p>Бөлмені таңдаңыз — нақты суреттері мен ауданы көрсетіледі. Барлығы құжаттар бойынша.</p>
        </div>

        <div className="tour-box reveal">
          <ul className="tour-list" role="tablist" aria-label="Бөлмелер">
            {TOUR.map((t, k) => (
              <li key={t.key}>
                <button type="button" role="tab" aria-selected={k === r} className={k === r ? 'on' : ''} onClick={() => pick(k)}>
                  <span className="tour-ic">{t.icon}</span>
                  <span className="tour-name"><b>{t.title}</b><small>{t.area}</small></span>
                </button>
              </li>
            ))}
          </ul>

          <div className="tour-stage">
            <div className="tour-photo">
              <img key={room.photos[i]} src={room.photos[i]} alt={room.title} />
              <span className="tour-count">{i + 1} / {n}</span>
              {n > 1 && (
                <>
                  <button type="button" className="tour-nav tour-prev" aria-label="Алдыңғы сурет" onClick={() => go(-1)}>‹</button>
                  <button type="button" className="tour-nav tour-next" aria-label="Келесі сурет" onClick={() => go(1)}>›</button>
                </>
              )}
            </div>
            <div className="tour-info">
              <h3><span>{room.icon}</span> {room.title}</h3>
              <span className="tour-area">{room.area}</span>
              <p>{room.text}</p>
            </div>
            {n > 1 && (
              <div className="tour-thumbs">
                {room.photos.map((src, k) => (
                  <button type="button" key={src} className={k === i ? 'on' : ''} aria-label={`${k + 1}-сурет`} onClick={() => setI(k)}>
                    <img src={src} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
