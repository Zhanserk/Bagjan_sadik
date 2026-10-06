// Декор: «Бағыжан» — батыр мен тұлпар: күн, бүркіт, тау, ту, домбыра, ою-өрнек, қау

const rays = Array.from({ length: 32 }, (_, i) => i * 11.25);

// Қазақ туындағыдай 32 сәулелі күн
export function Sun({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden="true">
      <g className="sun-rays">
        {rays.map((r) => (
          <path key={r} d="M100 4L107 30H93z" fill="#ffc425" transform={`rotate(${r} 100 100)`} />
        ))}
      </g>
      <circle cx="100" cy="100" r="46" fill="#ffd23f" />
      <circle cx="100" cy="100" r="36" fill="none" stroke="#ff9d00" strokeWidth="3" strokeDasharray="2 8" strokeLinecap="round" />
      <circle cx="100" cy="100" r="24" fill="#fff0a0" />
    </svg>
  );
}

// Логотип: шағын күн
export function SunMark({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      {Array.from({ length: 12 }, (_, i) => (
        <path key={i} d="M50 4L56 24H44z" fill="#ff9d00" transform={`rotate(${i * 30} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="28" fill="#ffc425" />
      <circle cx="50" cy="50" r="19" fill="#1c88c7" />
      <path d="M50 38l8 12-8 12-8-12z" fill="#ffc425" />
    </svg>
  );
}

export function Leaf({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <path d="M8 92C8 42 40 8 94 8c0 54-34 84-86 84z" fill="currentColor" />
      <path d="M12 88C38 62 60 40 84 18" stroke="#fff" strokeOpacity=".45" strokeWidth="3" strokeLinecap="round" fill="none" />
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

// Бүркіт: қанаттары қағылады
export function Eagle({ className = '', color = '#1d3f6b' }) {
  return (
    <svg className={className} viewBox="0 0 120 64" aria-hidden="true">
      <g className="ewing">
        <path d="M60 32C42 8 14 8 0 22c16-2 28 4 38 16 8 2 16 0 22-6z" fill={color} />
        <path d="M60 32C78 8 106 8 120 22c-16-2-28 4-38 16-8 2-16 0-22-6z" fill={color} />
      </g>
      <path d="M52 36L60 62l8-26z" fill={color} />
      <ellipse cx="60" cy="34" rx="8" ry="6" fill={color} />
      <circle cx="60" cy="25" r="5.5" fill={color} />
      <path d="M62 24l7 3-7 2z" fill="#ffc425" />
    </svg>
  );
}

// Қар басқан таулар (екі қабат)
export function Mountains({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 1440 260" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 260V170L120 90l70 40L300 36l120 104 100-40 120 70 120-110 120 90 120-60 120 70 140-90 100 60 40-30V260z" fill="#9cc9ec" />
      <path d="M300 36l-40 46 22-8 18 18 18-18 22 8zM760 60l-36 40 20-6 16 14 16-14 20 6zM1260 70l-34 38 20-6 14 12 14-12 20 6zM120 90l-28 32 16-4 12 10 12-10 14 4z" fill="#fff" />
      <path d="M0 260V200L180 140l140 50 200-60 180 70 200-50 200 55 200-65 140 50V260z" fill="#7fb8d8" />
      <path d="M520 130l-26 28 16-4 10 8 10-8 16 4zM1300 140l-24 26 14-4 10 8 10-8 14 4z" fill="#e8f5ff" />
    </svg>
  );
}

// Шалғын төбелері — hero астында
export function Hills({ className = '' }) {
  return (
    <svg className={`hills ${className}`} viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 90C160 20 320 20 480 80s320 70 480 10 320-70 480-10V160H0z" fill="#8fdba0" />
      <path d="M0 120C200 70 360 80 560 120s360 40 520 0 260-30 360 10V160H0z" fill="currentColor" />
    </svg>
  );
}

// Қау (ақ селеу) — дала өсімдігі
export function Kovyl({ className = '', style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 30 90" aria-hidden="true">
      <path d="M15 90C14 58 15 32 24 8" stroke="#a9a85a" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <path d="M15 90c-6-16-10-30-12-44M15 90c8-14 12-26 12-38" stroke="#9db05a" strokeWidth="2" strokeLinecap="round" fill="none" />
      <ellipse cx="21" cy="26" rx="5" ry="24" transform="rotate(16 21 26)" fill="currentColor" />
      <path d="M24 6c-4 12-6 24-6 40M20 12c-2 10-3 20-3 30" stroke="#fff" strokeOpacity=".7" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

// Ту: найза ұшы, көк ту және алтын күн
export function Tu({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 100 210" aria-hidden="true">
      <rect x="18" y="26" width="6" height="184" rx="3" fill="#7a4a1d" />
      <path d="M21 0l-7 28h14z" fill="#ffc425" />
      <circle cx="21" cy="30" r="5" fill="#ff9d00" />
      <g className="tu-cloth">
        <path d="M24 34h70l-16 20 16 20H24z" fill="#35b6f2" />
        <path d="M24 34h70l-16 20 16 20H24z" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="54" cy="54" r="9" fill="#ffc425" />
        {rays.filter((_, i) => i % 2 === 0).map((r) => (
          <path key={r} d="M54 41l2 5h-4z" fill="#ffc425" transform={`rotate(${r} 54 54)`} />
        ))}
      </g>
    </svg>
  );
}

export function Dombyra({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 60 170" aria-hidden="true">
      <rect x="26" y="14" width="8" height="90" rx="3" fill="#7a4a1d" />
      <path d="M22 0h16l-2 18H24z" fill="#5d3a22" />
      <path d="M30 94C6 94 4 130 14 150c6 12 26 12 32 0 10-20 8-56-16-56z" fill="#d9a066" />
      <path d="M30 94C6 94 4 130 14 150c6 12 26 12 32 0 10-20 8-56-16-56z" fill="none" stroke="#a8723a" strokeWidth="3" />
      <circle cx="30" cy="126" r="8" fill="#3b2410" />
      <path d="M28 18v118M32 18v118" stroke="#fff" strokeOpacity=".85" strokeWidth="1" />
      <path d="M16 112h28M14 142h32" stroke="#ffc425" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

// Тұлпарға мінген кішкентай батыр (сол жақтан оңға шабады)
const LEG = 'M-12 -6H12L8 36H-8zM-7 34H7L5 66l4 8H-9l4-8z';
export function Rider({ className = '' }) {
  return (
    <svg className={className} viewBox="0 -64 344 270" aria-hidden="true">
      {/* артқы (алыс) аяқтар */}
      <g transform="translate(112 128)"><path className="leg leg-rb" d={LEG} fill="#b97b34" /></g>
      <g transform="translate(224 124)"><path className="leg leg-ff" d={LEG} fill="#b97b34" /></g>
      {/* құйрық */}
      <path className="tail" d="M70 92C46 82 22 92 10 118c16-10 28-8 38-2-10 8-14 22-10 36 14-16 24-30 38-40z" fill="#4a2c12" />
      {/* дене, мойын, бас */}
      <path d="M64 100C60 80 90 70 130 70c42 0 84-2 112 8 22 10 26 38 8 54-26 18-100 20-146 14-28-4-38-24-40-46z" fill="#e0a050" />
      <path d="M100 140c50 12 124 10 148-10-8 14-34 26-98 26-30 0-46-6-50-16z" fill="#c27f34" />
      <path d="M226 80C240 56 258 34 284 22l22 20c-14 16-24 38-30 62-6 22-24 30-38 20z" fill="#e0a050" />
      <path d="M278 24c14-12 40-6 56 18 6 10 2 20-8 20-10 0-18-6-28-8-12-2-20-14-20-30z" fill="#e0a050" />
      <path d="M282 20L286 0l12 16z" fill="#c27f34" />
      <circle cx="300" cy="32" r="3.2" fill="#2a1a10" />
      <circle cx="331" cy="52" r="2.2" fill="#2a1a10" />
      {/* жал, кекіл */}
      <path className="mane" d="M284 18C262 28 240 50 222 82l10 6c8-16 18-26 30-34-4 12-10 22-14 34l10 2c4-12 12-24 22-34-2 10-4 20-6 28l10-2c2-16 8-30 14-44z" fill="#4a2c12" />
      <path d="M290 14c10-4 16 4 14 14-6-4-12-6-14-14z" fill="#4a2c12" />
      {/* ауыздық пен тізгін */}
      <path d="M296 56l16-24M326 57C300 70 236 62 214 48" stroke="#d93c3c" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <circle cx="304" cy="44" r="3" fill="#ffc425" />
      {/* тоқым мен ер */}
      <path d="M118 68C140 58 190 58 212 68l-4 30C190 104 140 104 122 98z" fill="#d93c3c" />
      <path d="M124 82h82" stroke="#ffc425" strokeWidth="4" />
      {[140, 160, 180, 200].map((x) => <path key={x} d={`M${x} 90l5 6-5 6-5-6z`} fill="#ffc425" />)}
      <path d="M138 62C150 50 184 50 196 62l-2 8h-54z" fill="#7a3b1b" />
      {/* батыр: шапан */}
      <g className="batyr">
        <path d="M144 62C140 34 154 14 172 14c18 2 24 26 20 48z" fill="#1c88c7" />
        <path d="M172 16l2 46M142 50h50" stroke="#ffc425" strokeWidth="5" />
        <path d="M150 58c20 8 26 26 18 50l-12-2c2-14-4-28-12-40z" fill="#1a4a8a" />
        <path d="M150 104l20 4 6 14h-24z" fill="#5a2a12" />
        {/* қол мен ту */}
        <path d="M184 26L210 44" stroke="#1c88c7" strokeWidth="11" strokeLinecap="round" />
        <path d="M210 44L238 -40" stroke="#7a4a1d" strokeWidth="4" strokeLinecap="round" />
        <path d="M238 -40l-6 14h12z" fill="#ffc425" />
        <circle cx="210" cy="44" r="6.5" fill="#ffd2a6" />
        <g className="rflag">
          <path d="M236 -38C214 -44 200 -32 176 -38V-4c24 6 38-6 60 0z" fill="#35b6f2" />
          <circle cx="206" cy="-21" r="6.5" fill="#ffc425" />
          {Array.from({ length: 12 }, (_, i) => (
            <path key={i} d="M206 -31.5l1.6 4h-3.2z" fill="#ffc425" transform={`rotate(${i * 30} 206 -21)`} />
          ))}
          <path d="M180 -9h50" stroke="#ffc425" strokeWidth="2" strokeLinecap="round" />
        </g>
        {/* бас пен бөрік */}
        <circle cx="172" cy="-2" r="13" fill="#ffd2a6" />
        <circle cx="181" cy="3" r="3" fill="#ff9e9e" fillOpacity=".8" />
        <circle cx="179" cy="-5" r="2" fill="#2a1a10" />
        <path d="M177 4q4 3 8 0" stroke="#7a2a2a" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <path d="M157 -4C157 -24 187 -24 187 -4z" fill="#ffc425" />
        <path d="M155 -4h34" stroke="#d98f00" strokeWidth="4" strokeLinecap="round" />
        <path d="M172 -22V-30" stroke="#ff9d00" strokeWidth="3" strokeLinecap="round" />
        <path className="plume" d="M172 -30C160 -42 148 -36 150 -22" stroke="#ff5a5f" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      </g>
      {/* алдыңғы (жақын) аяқтар */}
      <g transform="translate(92 130)"><path className="leg leg-rf" d={LEG} fill="#e0a050" /></g>
      <g transform="translate(236 128)"><path className="leg leg-fb" d={LEG} fill="#e0a050" /></g>
    </svg>
  );
}

// Қошқар мүйіз өрнекті ағаш арқалық: суреттер осыған ілінеді
export function OrnamentBeam({ className = '' }) {
  return (
    <svg className={className} viewBox="0 -70 640 150" aria-hidden="true">
      <path d="M20 22L320 -64M620 22L320 -64" stroke="#8a5a2b" strokeWidth="3" strokeLinecap="round" />
      <circle cx="320" cy="-66" r="7" fill="none" stroke="#ffc425" strokeWidth="4" />
      <rect x="6" y="16" width="628" height="28" rx="14" fill="#8a4b1f" />
      <rect x="6" y="16" width="628" height="8" rx="4" fill="#a8622b" />
      {Array.from({ length: 14 }, (_, i) => {
        const x = 52 + i * 41;
        return (
          <g key={i} fill="#ffc425">
            <path d={`M${x} 30l9-8 9 8-9 8z`} />
            <circle cx={x + 20.5} cy="30" r="2.8" fill="#fff3c9" />
          </g>
        );
      })}
      <circle cx="20" cy="30" r="17" fill="#ffc425" />
      <circle cx="20" cy="30" r="9" fill="#d93c3c" />
      <circle cx="620" cy="30" r="17" fill="#ffc425" />
      <circle cx="620" cy="30" r="9" fill="#d93c3c" />
      <path d="M20 46v22M12 46v16M28 46v16M620 46v22M612 46v16M628 46v16" stroke="#d93c3c" strokeWidth="3" strokeLinecap="round" />
      <circle cx="20" cy="70" r="4" fill="#d93c3c" />
      <circle cx="620" cy="70" r="4" fill="#d93c3c" />
    </svg>
  );
}
