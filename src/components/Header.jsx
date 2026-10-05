import React, { useEffect, useState } from 'react';
import { KINDERGARTEN, NAV } from '../data/site';
import { Sun } from './Decor';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`bar ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="wrap bar-in">
        <a href="#top" className="brand" onClick={close}>
          <Sun className="brand-sun" />
          <b>{KINDERGARTEN.short}</b>
        </a>

        <nav className="bar-nav" aria-label="Негізгі мәзір">
          {NAV.map(([href, label]) => (
            <a key={href} href={href} onClick={close}>{label}</a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-orange btn-sm bar-cta">Өтінім қалдыру</a>

        <button className="burger" aria-label="Мәзірді ашу" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
