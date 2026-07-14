import React from 'react';

export default function TrustDocuments() {
  const docs = [
    {
      title: "Мемлекеттік қайта тіркеу анықтамасы",
      desc: "ЖШС «Бағыжан» балабақшасы, БИН 170640023876. Сарыағаш ауданы бойынша тіркелген. Басшысы: Нұрхожа Айбибі Нұрхожақызы.",
      icon: "📜",
      fileUrl: "/docs/restr_document.pdf"
    },
    {
      title: "Санитариялық қорытынды",
      desc: "№ X.08.X.KZ25VBS00130246. Сарыағаш аудандық басқармасы берген ресми қорытынды, санитарлық нормаларға 100% сай.",
      icon: "✅",
      fileUrl: "/docs/san_conclusion.pdf"
    },
    {
      title: "Медициналық лицензия",
      desc: "№ 22000552 (27.12.2022 ж.). Түркістан облысы бойынша медициналық және дәрігерге дейінгі көмек көрсетуге берілген ресми лицензия.",
      icon: "🩺",
      fileUrl: "/docs/med_license.pdf"
    }
  ];

  return (
    <section className="trust" id="trust">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Сенімділік</div>
          <h2>Барлық құжаттар ресми расталған</h2>
          <p style={{ marginTop: '8px', color: 'var(--ink-soft)' }}>
            Біз заңды тұрғыда лицензияланған және мемлекеттік стандарттарға толық сай жұмыс істейміз.
          </p>
        </div>
        <div className="trust-grid">
          {docs.map((doc, index) => (
            <div key={index} className="tcard" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div className="ic">{doc.icon}</div>
                <div>
                  <h4>{doc.title}</h4>
                  <p>{doc.desc}</p>
                </div>
              </div>
              <a href={doc.fileUrl} target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ marginTop: '16px', fontSize: '13px', padding: '8px 16px', width: 'fit-content' }}>
                📄 Құжатты ашу
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}