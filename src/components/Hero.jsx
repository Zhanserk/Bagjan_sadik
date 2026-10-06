import React, { useRef } from 'react';
import { DOCS_TOTAL, HERO_PHOTOS, KINDERGARTEN as K } from '../data/site';
import {
  Cloud, Dombyra, Eagle, Hills, Kovyl, Mountains, OrnamentBeam, Rider, Sun, Tu,
} from './Decor';

// Цифрлар — «алтын медальдар»: көк, қызыл және алтын жиек
const STATS = [
  [K.since, 'жылдан бері жұмыс істейді', 'blue'],
  ['2', 'жеке жабдықталған топ', 'red'],
  [String(DOCS_TOTAL), 'ашық құжат', 'gold'],
];
const TONES = ['#fff6d6', '#f3e6a8', '#ffffff', '#ffe9b0'];
const GRASS = Array.from({ length: 26 }, (_, i) => ({
  left: `${1 + i * 3.9}%`,
  size: 22 + ((i * 7) % 5) * 5,
  color: TONES[i % TONES.length],
  delay: (i % 6) * 0.35,
}));
const SPECKS = Array.from({ length: 14 }, (_, i) => ({ left: `${(i * 71) % 94 + 3}%`, top: `${(i * 37) % 60 + 8}%`, delay: (i % 7) * 1.1 }));

export default function Hero() {
  const ref = useRef(null);

  // Тышқан қозғалса, күн, таулар мен рамкалар сәл жылжиды (параллакс)
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', (((e.clientX - r.left) / r.width - 0.5) * 2).toFixed(3));
    el.style.setProperty('--my', (((e.clientY - r.top) / r.height - 0.5) * 2).toFixed(3));
  };
  const onLeave = () => {
    ref.current?.style.setProperty('--mx', '0');
    ref.current?.style.setProperty('--my', '0');
  };

  return (
    <section className="hero" id="top" ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="beams" aria-hidden="true" />
      <Sun className="sun" />
      <Cloud className="cloud cloud-a" />
      <Cloud className="cloud cloud-b" />
      <Eagle className="eagle eagle-a" />
      <Eagle className="eagle eagle-b" color="#b8730a" />
      <Eagle className="eagle eagle-c" />
      <Mountains className="mtn" />
      <div className="specks" aria-hidden="true">
        {SPECKS.map((s, i) => <i key={i} style={{ left: s.left, top: s.top, animationDelay: `${s.delay}s` }} />)}
      </div>

      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="badge"><span className="badge-mark">🐎</span> {K.since} жылдан бері сенімді балабақша</p>
          <h1>Кішкентай <em>батырлар</em> өсетін мекен</h1>
          <p className="lead">
            «{K.short}» бөбекжай балабақшасы — жарық, жайлы бөлмелер, жеке ойын алаңдары және мейірімді тәрбиешілер.
            Санитарлық нормаларға толық сай, лицензияланған медициналық қызмет.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-leaf">Экскурсияға жазылу</a>
            <a href="#gallery" className="btn btn-white">Суреттерді көру →</a>
          </div>
          <ul className="medals">
            {STATS.map(([big, label, tone]) => (
              <li key={label} className={`medal-stat ${tone}`}>
                <span className="medal"><b>{big}</b></span>
                <small>{label}</small>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-photos">
          <OrnamentBeam className="beam" />
          {HERO_PHOTOS.map((ph, i) => (
            <figure key={ph.src} className={`frame fr-${i + 1}`}>
              <img src={ph.src} alt={ph.caption} />
              <figcaption>{ph.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="meadow" aria-hidden="true">
        {GRASS.map((g, i) => (
          <Kovyl key={i} className="bloom" style={{ left: g.left, width: g.size, color: g.color, animationDelay: `${g.delay}s` }} />
        ))}
      </div>
      <Tu className="tu" />
      <Dombyra className="dombyra" />
      <div className="rider" aria-hidden="true">
        <i className="dust dust-a" />
        <i className="dust dust-b" />
        <i className="dust dust-c" />
        <Rider className="rider-svg" />
      </div>
      <Hills className="hero-hills" />
      <div className="ornament-strip" aria-hidden="true" />
    </section>
  );
}
