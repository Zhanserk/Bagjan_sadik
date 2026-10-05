import React, { useMemo, useState } from 'react';
import { DOC_CATEGORIES } from '../data/docs';

const ALL = 'all';
const ext = (file) => file.split('.').pop().toUpperCase();

const FLAT = DOC_CATEGORIES.flatMap((c) =>
  c.docs.map((d) => ({ ...d, url: `/docs/${d.file}`, cat: c.key, catShort: c.short })),
);
const YEARS = [...new Set(FLAT.map((d) => d.kind).filter((k) => /^20\d\d(–20\d\d)?$/.test(k)))].sort().reverse();

export default function Documents() {
  const [cat, setCat] = useState(ALL);
  const [year, setYear] = useState(ALL);
  const [query, setQuery] = useState('');

  const q = query.trim().toLowerCase();
  const shown = useMemo(
    () =>
      FLAT.filter(
        (d) =>
          (cat === ALL || d.cat === cat) &&
          (year === ALL || d.kind === year) &&
          (!q || `${d.title} ${d.kind} ${d.catShort}`.toLowerCase().includes(q)),
      ),
    [cat, year, q],
  );
  const note = DOC_CATEGORIES.find((c) => c.key === cat)?.note;

  return (
    <div className="dx">
      <h3 className="dx-title">Құжаттар мұрағаты <span>{FLAT.length}</span></h3>

      <div className="dx-tabs" role="tablist" aria-label="Құжат санаттары">
        <button role="tab" aria-selected={cat === ALL} className={`dx-tab ${cat === ALL ? 'on' : ''}`} onClick={() => setCat(ALL)}>
          Барлығы <span>{FLAT.length}</span>
        </button>
        {DOC_CATEGORIES.map((c) => (
          <button key={c.key} role="tab" aria-selected={cat === c.key} className={`dx-tab ${cat === c.key ? 'on' : ''}`} onClick={() => setCat(c.key)}>
            {c.title} <span>{c.docs.length}</span>
          </button>
        ))}
      </div>

      <div className="dx-tools">
        <input
          type="search"
          className="dx-search"
          placeholder="Құжатты іздеу…"
          aria-label="Құжатты іздеу"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="dx-years" aria-label="Оқу жылы">
          <button className={`dx-year ${year === ALL ? 'on' : ''}`} onClick={() => setYear(ALL)}>Барлық жыл</button>
          {YEARS.map((y) => (
            <button key={y} className={`dx-year ${year === y ? 'on' : ''}`} onClick={() => setYear(y)}>{y}</button>
          ))}
        </div>
      </div>

      {note && <p className="dx-note">{note}</p>}

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
                  <small>{d.kind}{cat === ALL ? ` · ${d.catShort}` : ''} · {d.size}</small>
                </span>
                <span className="dx-open">Ашу ↗</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
