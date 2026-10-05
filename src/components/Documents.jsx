import React, { useMemo, useState } from 'react';
import { DOCS_TOTAL, DOC_CATEGORIES } from '../data/site';

const ALL = 'all';
const ext = (file) => file.split('.').pop().toUpperCase();
const yearOf = (d) => (`${d.kind} ${d.title}`.match(/20\d\d(?:–20\d\d)?/) || [null])[0];

const FLAT = DOC_CATEGORIES.flatMap((c) => c.docs.map((d) => ({ ...d, cat: c.key, short: c.short, year: yearOf(d) })));
const YEARS = [...new Set(FLAT.map((d) => d.year).filter(Boolean))].sort().reverse();

export default function Documents() {
  const [cat, setCat] = useState(DOC_CATEGORIES[0].key);
  const [year, setYear] = useState(ALL);
  const [query, setQuery] = useState('');

  const q = query.trim().toLowerCase();
  const shown = useMemo(
    () =>
      FLAT.filter(
        (d) =>
          (cat === ALL || d.cat === cat) &&
          (year === ALL || d.year === year) &&
          (!q || `${d.title} ${d.kind} ${d.short}`.toLowerCase().includes(q)),
      ),
    [cat, year, q],
  );
  const current = DOC_CATEGORIES.find((c) => c.key === cat);

  return (
    <section className="docs" id="docs">
      <div className="wrap">
        <div className="section-title reveal">
          <p className="kicker">Сенімділік</p>
          <h2>Құжаттар <em>мұрағаты</em></h2>
          <p>Барлығы {DOCS_TOTAL} құжат, санаттар бойынша реттелген. Санатты таңдаңыз немесе іздеңіз — файл жаңа бетте ашылады.</p>
        </div>

        <div className="dx-tabs" role="tablist" aria-label="Құжат санаттары">
          <button type="button" role="tab" aria-selected={cat === ALL} className={`dx-tab ${cat === ALL ? 'on' : ''}`} onClick={() => setCat(ALL)}>
            📁 Барлығы <span>{DOCS_TOTAL}</span>
          </button>
          {DOC_CATEGORIES.map((c) => (
            <button type="button" key={c.key} role="tab" aria-selected={cat === c.key} className={`dx-tab ${cat === c.key ? 'on' : ''}`} onClick={() => setCat(c.key)}>
              {c.icon} {c.title} <span>{c.docs.length}</span>
            </button>
          ))}
        </div>

        <div className="dx-tools">
          <input type="search" className="dx-search" placeholder="Құжатты іздеу…" aria-label="Құжатты іздеу" value={query} onChange={(e) => setQuery(e.target.value)} />
          <div className="dx-years" aria-label="Оқу жылы">
            <button type="button" className={`dx-year ${year === ALL ? 'on' : ''}`} onClick={() => setYear(ALL)}>Барлық жыл</button>
            {YEARS.map((y) => (
              <button type="button" key={y} className={`dx-year ${year === y ? 'on' : ''}`} onClick={() => setYear(y)}>{y}</button>
            ))}
          </div>
        </div>

        {current && <p className="dx-note">{current.note}</p>}

        {shown.length === 0 ? (
          <p className="dx-empty">Ештеңе табылмады. Іздеуді немесе сүзгіні өзгертіп көріңіз.</p>
        ) : (
          <ul className="dx-list">
            {shown.map((d) => (
              <li key={d.file}>
                <a className="dx-file" href={d.url} target="_blank" rel="noreferrer">
                  <span className="dx-ext">{ext(d.file)}</span>
                  <span className="dx-main">
                    <b>{d.title}</b>
                    <small>{d.kind}{cat === ALL && d.kind !== d.short ? ` · ${d.short}` : ''} · {d.size}</small>
                  </span>
                  <span className="dx-open">Ашу ↗</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
