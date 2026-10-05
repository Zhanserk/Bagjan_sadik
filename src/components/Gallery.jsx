import React, { useMemo, useState } from 'react';
import { ALL_PHOTOS, PHOTO_CATS } from '../data/site';
import Lightbox from './Lightbox';

const ALL = 'all';

export default function Gallery() {
  const [cat, setCat] = useState(ALL);
  const [open, setOpen] = useState(null);
  const shown = useMemo(() => (cat === ALL ? ALL_PHOTOS : ALL_PHOTOS.filter((p) => p.cat === cat)), [cat]);

  return (
    <section className="gallery" id="gallery">
      <div className="wrap">
        <div className="section-title light reveal">
          <p className="kicker">Галерея</p>
          <h2>Балабақшамыздың <em>ішінен</em></h2>
          <p>Жарық ойын бөлмелерінен бастап ашық ауадағы алаңға дейін. Суретті басыңыз — үлкен көрініс ашылады.</p>
        </div>

        <div className="chips" role="tablist" aria-label="Сурет санаттары">
          <button type="button" role="tab" aria-selected={cat === ALL} className={`chip ${cat === ALL ? 'on' : ''}`} onClick={() => setCat(ALL)}>
            Барлығы <span>{ALL_PHOTOS.length}</span>
          </button>
          {PHOTO_CATS.map((c) => (
            <button type="button" key={c.key} role="tab" aria-selected={cat === c.key} className={`chip ${cat === c.key ? 'on' : ''}`} onClick={() => setCat(c.key)}>
              {c.title} <span>{c.items.length}</span>
            </button>
          ))}
        </div>

        <div className="masonry">
          {shown.map((p, i) => (
            <button type="button" key={p.src} className="shot" aria-label={p.caption} onClick={() => setOpen(i)}>
              <img src={p.src} alt={p.caption} loading="lazy" />
              <span>{p.caption}</span>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <Lightbox title="Бағыжан галереясы" items={shown} index={open} onChange={setOpen} onClose={() => setOpen(null)} />
      )}
    </section>
  );
}
