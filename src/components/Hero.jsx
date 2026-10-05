import React from 'react';
import { HERO_PHOTOS, KINDERGARTEN as K, DOCS_TOTAL } from '../data/site';
import { Cloud, Hills, Star, Sun } from './Decor';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <Sun className="hero-sun" />
      <Cloud className="cloud cloud-a" />
      <Cloud className="cloud cloud-b" />
      <Cloud className="cloud cloud-c" />

      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="badge"><Star className="badge-star" /> {K.since} жылдан бері сенімді балабақша</p>
          <h1>Балаңыздың күні <em>күлкіге</em> толы өтетін мекен</h1>
          <p className="lead">
            «{K.short}» бөбекжай балабақшасы — жарық, жайлы бөлмелер, жеке ойын алаңдары және мейірімді тәрбиешілер.
            Санитарлық нормаларға толық сай, лицензияланған медициналық қызмет.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-orange">Экскурсияға жазылу</a>
            <a href="#gallery" className="btn btn-white">Суреттерді көру →</a>
          </div>
          <ul className="hero-stats">
            <li><b>{K.since}</b><span>жылдан бері жұмыс істейді</span></li>
            <li><b>2</b><span>жеке жабдықталған топ</span></li>
            <li><b>{DOCS_TOTAL}</b><span>ашық құжат</span></li>
          </ul>
        </div>

        <div className="hero-photos">
          {HERO_PHOTOS.map((ph, i) => (
            <figure key={ph.src} className={`polaroid pl-${i + 1}`}>
              <img src={ph.src} alt={ph.caption} />
              <figcaption>{ph.caption}</figcaption>
            </figure>
          ))}
          <Star className="spark spark-a" />
          <Star className="spark spark-b" />
        </div>
      </div>
      <Hills className="hero-hills" />
    </section>
  );
}
