import React from 'react';
import { DOCS_TOTAL, HERO_PHOTOS, KINDERGARTEN as K } from '../data/site';
import { Branch, Butterfly, Flower, Hills, Ladybug, Leaf } from './Decor';

// Цифрлар — «алмалар»: қызыл, жасыл және алтын
const STATS = [
  [K.since, 'жылдан бері жұмыс істейді', 'red'],
  ['2', 'жеке жабдықталған топ', 'green'],
  [String(DOCS_TOTAL), 'ашық құжат', 'gold'],
];
const COLORS = ['#ff7a9c', '#ffc425', '#ffffff', '#ff9d3d', '#c59bff', '#ff5a5f'];
const MEADOW = Array.from({ length: 24 }, (_, i) => ({
  left: `${2 + i * 4.1}%`,
  size: 20 + ((i * 7) % 5) * 5,
  color: COLORS[i % COLORS.length],
  delay: (i % 6) * 0.35,
}));

export default function Hero() {
  return (
    <section className="hero" id="top">
      <Leaf className="lf lf-a" />
      <Leaf className="lf lf-b" />

      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="badge"><span className="badge-apple">🍎</span> {K.since} жылдан бері сенімді балабақша</p>
          <h1>Балаңыздың күні <em>күлкіге</em> толы өтетін мекен</h1>
          <p className="lead">
            «{K.short}» бөбекжай балабақшасы — жарық, жайлы бөлмелер, жеке ойын алаңдары және мейірімді тәрбиешілер.
            Санитарлық нормаларға толық сай, лицензияланған медициналық қызмет.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-leaf">Экскурсияға жазылу</a>
            <a href="#gallery" className="btn btn-white">Суреттерді көру →</a>
          </div>
          <ul className="apples">
            {STATS.map(([big, label, tone]) => (
              <li key={label} className={`apple-stat ${tone}`}>
                <span className="apple-body"><b>{big}</b></span>
                <small>{label}</small>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-photos">
          <Branch className="branch" />
          {HERO_PHOTOS.map((ph, i) => (
            <figure key={ph.src} className={`frame fr-${i + 1}`}>
              <img src={ph.src} alt={ph.caption} />
              <figcaption>{ph.caption}</figcaption>
            </figure>
          ))}
          <Butterfly className="bfly bf-a" />
          <Butterfly className="bfly bf-b" color="#c59bff" />
          <Butterfly className="bfly bf-c" color="#ffc425" />
        </div>
      </div>

      <div className="meadow" aria-hidden="true">
        {MEADOW.map((f, i) => (
          <Flower key={i} className="bloom" style={{ left: f.left, width: f.size, color: f.color, animationDelay: `${f.delay}s` }} />
        ))}
      </div>
      <Ladybug className="ladybug" />
      <Hills className="hero-hills" />
    </section>
  );
}
