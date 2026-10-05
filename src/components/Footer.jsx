import React from 'react';
import { KINDERGARTEN as K, NAV } from '../data/site';
import { Apple } from './Decor';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-in">
        <div>
          <div className="foot-logo"><Apple className="brand-apple" /> <b>{K.short}</b></div>
          <p>{K.legal}. Балаңыздың жарқын болашағы, сапалы тәрбиесі мен қауіпсіз дамуы үшін.</p>
        </div>
        <nav className="foot-nav" aria-label="Төменгі мәзір">
          {NAV.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>
      </div>
      <p className="wrap foot-copy">© {new Date().getFullYear()} {K.legal}. Барлық құқықтар қорғалған.</p>
    </footer>
  );
}
