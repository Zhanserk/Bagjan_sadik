import { useEffect, useRef } from 'react';

// Толық көру терезесі: үлкен сурет, көрсеткілер, миниатюралар, клавиатура және сырғыту (swipe).
export default function Lightbox({ title, items, index, onChange, onClose }) {
  const n = items.length;
  const startX = useRef(null);
  const item = items[index];

  useEffect(() => {
    const go = (d) => onChange((index + d + n) % n);
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [index, n, onChange, onClose]);

  const go = (d) => onChange((index + d + n) % n);
  const onTouchEnd = (e) => {
    if (startX.current === null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    startX.current = null;
  };

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
      <div className="lb-box" onClick={(e) => e.stopPropagation()}>
        <div className="lb-head">
          <div>
            <b>{title}</b>
            <small>{index + 1} / {n}{item.caption ? ` · ${item.caption}` : ''}</small>
          </div>
          <button type="button" className="lb-close" aria-label="Жабу" onClick={onClose}>✕</button>
        </div>

        <div
          className="lb-stage"
          onTouchStart={(e) => { startX.current = e.touches[0].clientX; }}
          onTouchEnd={onTouchEnd}
        >
          {n > 1 && <button type="button" className="lb-nav lb-prev" aria-label="Алдыңғы сурет" onClick={() => go(-1)}>‹</button>}
          <img src={item.src} alt={item.caption || title} />
          {n > 1 && <button type="button" className="lb-nav lb-next" aria-label="Келесі сурет" onClick={() => go(1)}>›</button>}
        </div>

        {n > 1 && (
          <div className="lb-thumbs">
            {items.map((p, k) => (
              <button
                key={p.src}
                type="button"
                className={k === index ? 'on' : ''}
                aria-label={`${k + 1}-сурет`}
                onClick={() => onChange(k)}
              >
                <img src={p.src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
