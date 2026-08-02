import React, { useState } from 'react';

/* ---------- Ресми құжаттар (лицензия, санитарлық қорытынды және т.б.) ---------- */
const officialDocs = [
  {
    title: "Мемлекеттік қайта тіркеу анықтамасы",
    desc: "ЖШС «Бағыжан» балабақшасы, БИН 170640023876. Сарыағаш ауданы бойынша тіркелген. Басшысы: Нұрхожа Айбибі Нұрхожақызы.",
    icon: "📜",
    fileUrl: "/docs/restr_document.pdf",
  },
  {
    title: "Санитариялық қорытынды",
    desc: "№ X.08.X.KZ25VBS00130246. Сарыағаш аудандық басқармасы берген ресми қорытынды, санитарлық нормаларға 100% сай.",
    icon: "✅",
    fileUrl: "/docs/san_conclusion.pdf",
  },
  {
    title: "Медициналық лицензия",
    desc: "№ 22000552 (27.12.2022 ж.). Түркістан облысы бойынша медициналық және дәрігерге дейінгі көмек көрсетуге берілген ресми лицензия.",
    icon: "🩺",
    fileUrl: "/docs/med_license.pdf",
  },
];

/* ---------- Оқу-әдістемелік жоспарлар архиві (жылдар бойынша) ----------
   Файл атаулары public/docs ішіндегі нақты файл атауларына сәйкес болу керек.
   Скриншотта кейбір атаулар "..." түрінде қиылып қалған — сол жерлерді
   өз docs қалтаңдағы дәл атауларға ауыстыр (TODO белгісімен көрсетілген). */
const archive = [
  {
    year: "2025–2026",
    groups: [
      {
        name: "Кіші топ",
        items: [
          { label: "Жаз сауықтыру жоспары", file: "/docs/2025-2026 кіші топ жаз сауықтыру.pdf" },
          { label: "Преспективті-циклограммалық жоспар", file: "/docs/2025-2026 кіші топ прес,цик.pdf" },
        ],
      },
      {
        name: "Ортаңғы топ",
        items: [
          { label: "Жаз сауықтыру жоспары", file: "/docs/2025-2026 ортаңғы топ жаз сауықтыру.pdf" },
          { label: "Преспективті-циклограммалық жоспар", file: "/docs/2025-2026 ортаңғы топ прес,цик.pdf" },
        ],
      },
      {
        name: "Ересек топ",
        items: [
          { label: "Жаз сауықтыру жоспары", file: "/docs/2025-2026 ересек топ жаз сауықтыру.pdf" },
          { label: "Преспективті-циклограммалық жоспар", file: "/docs/2025-2026 ересек топ прес,цик.pdf" },
        ],
      },
      {
        name: "МА тобы",
        items: [
          { label: "Жаз сауықтыру жоспары", file: "/docs/2025-2026 MA топ жаз сауықтыру.pdf" },
        ],
      },
    ],
  },
  {
    year: "2024–2025",
    groups: [
      {
        name: "Кіші топ",
        items: [
          { label: "Жаз сауықтыру жоспары", file: "/docs/2024-2025 кіші топ жаз сауықтыру.pdf" },
        ],
      },
      {
        name: "Ортаңғы топ",
        items: [
          { label: "Преспективті-циклограммалық жоспар", file: "/docs/2024-2025 ортаңғы топ прес,цик.pdf" },
        ],
      },
    ],
  },
  {
    year: "2023–2024",
    groups: [
      {
        name: "Кіші топ",
        items: [
          // TODO: толық атауын тексер (скриншотта қиылған)
          { label: "Жаз сауықтыру жоспары", file: "/docs/2023_2024_кіші_топ_жаз_сауықтыру_2024.pdf" },
          { label: "Преспективті-циклограммалық жоспар", file: "/docs/2023-2024 кіші топ преспект,цик.pdf" },
        ],
      },
      {
        name: "Ортаңғы топ",
        items: [
          // TODO: толық атауын тексер (скриншотта қиылған)
          { label: "Жаз сауықтыру жоспары", file: "/docs/2023_2024_ортаңғы_жаз_сауықтыру.pdf" },
        ],
      },
      {
        name: "Ересек топ",
        items: [
          { label: "Жаз сауықтыру жоспары", file: "/docs/2023-2024 ересек топ жаз сауықтыру.pdf" },
          // TODO: толық атауын тексер (скриншотта қиылған)
          { label: "Преспективті-циклограммалық жоспар", file: "/docs/2023_2024_ересек_топ_преспектива_циклограммасы.pdf" },
        ],
      },
      {
        name: "МА тобы",
        items: [
          { label: "Жаз сауықтыру жоспары", file: "/docs/2023-2024 MA топ жаз сауықтыру.pdf" },
          { label: "Преспективті-циклограммалық жоспар", file: "/docs/2023-2024 MA топ прес,цик.pdf" },
        ],
      },
      {
        name: "Жалпы құжаттар",
        items: [
          // TODO: толық атауын тексер (скриншотта қиылған)
          { label: "Оқу жұмыс жоспарының циклограммасы", file: "/docs/2023_2024_оқу_жұмыс_жоспары_циклограммасы.pdf" },
          { label: "Медбикенің жұмыс жоспары", file: "/docs/2023-2024 медбике жұмыс жоспары.pdf" },
        ],
      },
    ],
  },
];

export default function TrustDocuments() {
  const [activeYear, setActiveYear] = useState(0);

  return (
    <section className="trust" id="trust">
      <div className="wrap">
        {/* ---- Ресми құжаттар ---- */}
        <div className="section-head">
          <div className="eyebrow">Сенімділік</div>
          <h2>Барлық құжаттар ресми расталған</h2>
          <p style={{ marginTop: '8px', color: 'var(--ink-soft)' }}>
            Біз заңды тұрғыда лицензияланған және мемлекеттік стандарттарға толық сай жұмыс істейміз.
          </p>
        </div>
        <div className="trust-grid">
          {officialDocs.map((doc, index) => (
            <div key={index} className="tcard doc-card">
              <div className="doc-card-top">
                <div className="ic">{doc.icon}</div>
                <div>
                  <h4>{doc.title}</h4>
                  <p>{doc.desc}</p>
                </div>
              </div>
              <a href={doc.fileUrl} target="_blank" rel="noreferrer" className="doc-open-btn">
                📄 Құжатты ашу
              </a>
            </div>
          ))}
        </div>

        {/* ---- Оқу-әдістемелік жоспарлар архиві ---- */}
        <div className="section-head" style={{ marginTop: '76px' }}>
          <div className="eyebrow">Оқу-әдістемелік жоспарлар</div>
          <h2>Топтар бойынша жылдық жоспарлар</h2>
          <p style={{ marginTop: '8px', color: 'var(--ink-soft)' }}>
            Әр оқу жылына арналған сауықтыру және циклограммалық жоспарлармен танысыңыз.
          </p>
        </div>

        <div className="year-tabs">
          {archive.map((block, i) => (
            <button
              key={block.year}
              className={`year-tab ${activeYear === i ? 'active' : ''}`}
              onClick={() => setActiveYear(i)}
              type="button"
            >
              {block.year}
            </button>
          ))}
        </div>

        <div className="doc-groups-grid">
          {archive[activeYear].groups.map((group) => (
            <div key={group.name} className="doc-group-card">
              <h4>{group.name}</h4>
              <ul className="doc-link-list">
                {group.items.map((item) => (
                  <li key={item.file}>
                    <a href={item.file} target="_blank" rel="noreferrer">
                      <span className="doc-link-ic">📄</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}