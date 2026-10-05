import React, { useRef } from 'react';
import { DOCS_TOTAL, HERO_PHOTOS, KINDERGARTEN as K } from '../data/site';
import {
  Basket, Birdhouse, Branch, Butterfly, Cloud, Flower, Hedgehog, Hills, Ladybug, Leaf, Mushroom, Signpost, TreeBg,
} from './Decor';

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
const SPECKS = Array.from({ length: 14 }, (_, i) => ({ left: `${(i * 71) % 94 + 3}%`, top: `${(i * 37) % 60 + 8}%`, delay: (i % 7) * 1.1 }));
const LEAVES = Array.from({ length: 9 }, (_, i) => ({ left: `${(i * 59) % 96 + 2}%`, delay: (i % 5) * 2.8, dur: 13 + (i % 4) * 3 }));

export default function Hero() {
  const ref = useRef(null);

  // Тышқан қозғалса, рамкалар мен көбелектер сәл жылжиды (параллакс)
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
      <div className="rainbow" aria-hidden="true" />
      <Cloud className="cloud cloud-a" />
      <Cloud className="cloud cloud-b" />
      <TreeBg className="tree tree-r" />
      <Leaf className="lf lf-a" />
      <Leaf className="lf lf-b" />
      <div className="specks" aria-hidden="true">
        {SPECKS.map((s, i) => <i key={i} style={{ left: s.left, top: s.top, animationDelay: `${s.delay}s` }} />)}
      </div>
      <div className="leaves" aria-hidden="true">
        {LEAVES.map((l, i) => <i key={i} style={{ left: l.left, animationDelay: `${l.delay}s`, animationDuration: `${l.dur}s` }} />)}
      </div>

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
          <span className="fall-apple" aria-hidden="true" />
          <Birdhouse className="birdhouse" />
          <span className="chirp" aria-hidden="true">Сәлем! 🎵</span>
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
      <Signpost className="sign" />
      <Basket className="basket" />
      <Mushroom className="shroom shroom-a" />
      <Mushroom className="shroom shroom-b" />
      <Hedgehog className="hedgehog" />
      <Ladybug className="ladybug" />
      <Hills className="hero-hills" />
    </section>
  );
}
