import React from 'react';
import { KINDERGARTEN as K } from '../data/site';
import { Leaf } from './Decor';

export default function Contact() {
  const tel = `tel:${K.phone.replace(/[^\d+]/g, '')}`;
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="contact-card reveal">
          <Leaf className="contact-leaf" />
          <div className="contact-copy">
            <p className="kicker">Байланыс</p>
            <h2>Балаңызды бүгін «{K.short}» балабақшасымен таныстырыңыз</h2>
            <p>Орын саны шектеулі — экскурсияға алдын ала жазылыңыз.</p>
            <div className="contact-actions">
              <a className="btn btn-white" href={tel}>Қоңырау шалу</a>
              <a className="btn btn-line" href={K.mapUrl} target="_blank" rel="noreferrer">Картадан ашу ↗</a>
            </div>
          </div>
          <dl className="contact-list">
            <div><dt>📍 Мекенжай</dt><dd><a href={K.mapUrl} target="_blank" rel="noreferrer">{K.address}</a></dd></div>
            <div><dt>📞 Телефон</dt><dd><a href={tel}>{K.phone}</a></dd></div>
            <div><dt>✉️ Email</dt><dd><a href={`mailto:${K.email}`}>{K.email}</a></dd></div>
            <div><dt>🕗 Жұмыс уақыты</dt><dd>{K.hours}</dd></div>
            <div><dt>Басшысы</dt><dd>{K.director} · БСН {K.bin}</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
