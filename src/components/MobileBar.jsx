import React from 'react';
import { KINDERGARTEN as K } from '../data/site';

// Телефондағы төменгі жылдам панель: қоңырау шалу және картадан ашу
export default function MobileBar() {
  return (
    <div className="mbar">
      <a href={`tel:${K.phone.replace(/[^\d+]/g, '')}`} className="mbar-call">📞 Қоңырау шалу</a>
      <a href={K.mapUrl} target="_blank" rel="noreferrer" className="mbar-map">📍 Карта</a>
    </div>
  );
}
