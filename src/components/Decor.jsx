// Декор: күн, бұлт, шалғын және жұлдызша — «Бағыжан» балабақшасының күн нұрлы бейнесі

export function Sun({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden="true">
      <g className="sun-rays" stroke="#ffb400" strokeWidth="9" strokeLinecap="round">
        {Array.from({ length: 14 }, (_, i) => (
          <line key={i} x1="100" y1="12" x2="100" y2="32" transform={`rotate(${i * (360 / 14)} 100 100)`} />
        ))}
      </g>
      <circle cx="100" cy="100" r="54" fill="#ffc425" />
      <circle cx="100" cy="100" r="54" fill="url(#sun-g)" />
      <defs>
        <radialGradient id="sun-g" cx="35%" cy="30%" r="80%">
          <stop offset="0" stopColor="#fff4b0" />
          <stop offset="1" stopColor="#ff9d00" stopOpacity=".55" />
        </radialGradient>
      </defs>
      <circle cx="82" cy="94" r="5" fill="#7a3b00" />
      <circle cx="118" cy="94" r="5" fill="#7a3b00" />
      <path d="M80 114c8 12 32 12 40 0" stroke="#7a3b00" strokeWidth="5" strokeLinecap="round" fill="none" />
      <circle cx="70" cy="112" r="7" fill="#ff7a3d" opacity=".5" />
      <circle cx="130" cy="112" r="7" fill="#ff7a3d" opacity=".5" />
    </svg>
  );
}

export function Cloud({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 200 100" aria-hidden="true">
      <path d="M40 90a28 28 0 0 1 2-56 38 38 0 0 1 72-8 32 32 0 0 1 48 28 24 24 0 0 1-4 36z" fill="#fff" />
    </svg>
  );
}

export function Star({ className = '', style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" aria-hidden="true">
      <path d="M20 2l5.2 11.2 12.3 1.4-9.1 8.4 2.5 12.1L20 28.8 9.1 35.1l2.5-12.1-9.1-8.4 12.3-1.4z" fill="currentColor" />
    </svg>
  );
}

// Шалғын (екі қабатты төбе) — hero астында
export function Hills({ className = '' }) {
  return (
    <svg className={`hills ${className}`} viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 90C160 20 320 20 480 80s320 70 480 10 320-70 480-10V160H0z" fill="#7fd9a2" />
      <path d="M0 120C200 70 360 80 560 120s360 40 520 0 260-30 360 10V160H0z" fill="currentColor" />
    </svg>
  );
}
