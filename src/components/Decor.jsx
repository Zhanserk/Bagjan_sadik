// Декор: «Бағыжан» — бақ (бау-бақша): алма, жапырақ, бұтақ, көбелек, қызыл қоңыз және гүлдер

export function Apple({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <path d="M50 28c-10-8-34-6-34 22 0 22 14 40 26 40 5 0 6-3 8-3s3 3 8 3c12 0 26-18 26-40 0-28-24-30-34-22z" fill="#ff5a5f" />
      <path d="M50 28c0-10 4-18 12-22" stroke="#7a4a1d" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M60 14c10-6 22-2 24 8-10 4-22 2-24-8z" fill="#34b36b" />
      <ellipse cx="33" cy="47" rx="5" ry="10" fill="#fff" fillOpacity=".35" transform="rotate(20 33 47)" />
      <circle cx="42" cy="62" r="3.5" fill="#5a1d1d" />
      <circle cx="62" cy="62" r="3.5" fill="#5a1d1d" />
      <path d="M44 72c4 5 10 5 14 0" stroke="#5a1d1d" strokeWidth="3.5" strokeLinecap="round" fill="none" />
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

export function Butterfly({ className = '', color = '#ff8fb1' }) {
  return (
    <svg className={className} viewBox="0 0 80 60" aria-hidden="true">
      <g className="bwing">
        <path d="M40 30C28 2 2 6 6 26c3 14 22 16 34 4z" fill={color} />
        <path d="M40 32C30 44 14 56 24 52c10-4 16-10 16-20z" fill="#ffc425" />
      </g>
      <g className="bwing bwing-r">
        <path d="M40 30C52 2 78 6 74 26c-3 14-22 16-34 4z" fill={color} />
        <path d="M40 32C50 44 66 56 56 52c-10-4-16-10-16-20z" fill="#ffc425" />
      </g>
      <rect x="38" y="16" width="4" height="28" rx="2" fill="#5a3a1d" />
    </svg>
  );
}

export function Ladybug({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 60 50" aria-hidden="true">
      <circle cx="46" cy="25" r="9" fill="#2a2540" />
      <ellipse cx="26" cy="25" rx="22" ry="19" fill="#ff5a5f" />
      <path d="M26 6v38" stroke="#2a2540" strokeWidth="3" />
      <circle cx="18" cy="18" r="4" fill="#2a2540" />
      <circle cx="18" cy="33" r="4" fill="#2a2540" />
      <circle cx="33" cy="16" r="3.5" fill="#2a2540" />
      <circle cx="33" cy="35" r="3.5" fill="#2a2540" />
      <path d="M52 15l6-6M52 35l6 6" stroke="#2a2540" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function Flower({ className = '', style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 70" aria-hidden="true">
      <path d="M20 34v36" stroke="#2f9a5b" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M20 56c-8-2-12-8-12-12 8 0 12 5 12 12z" fill="#34b36b" />
      {Array.from({ length: 5 }, (_, i) => (
        <ellipse key={i} cx="20" cy="12" rx="6" ry="10" fill="currentColor" transform={`rotate(${i * 72} 20 24)`} />
      ))}
      <circle cx="20" cy="24" r="6" fill="#ffc425" />
    </svg>
  );
}

// Алма ағашының бұтағы: бұтаққа суретті рамкалар аспа арқанмен ілінеді
export function Branch({ className = '' }) {
  const leaves = [[470, 24, -20], [400, 42, 30], [330, 62, -10], [260, 56, 35], [190, 70, -25], [120, 92, 20], [60, 104, -30], [500, 14, 40]];
  const apples = [[430, 62], [290, 78], [150, 96]];
  return (
    <svg className={className} viewBox="0 0 560 140" aria-hidden="true">
      <path d="M560 12C470 20 420 50 330 56S150 52 60 100" stroke="#8a5a2b" strokeWidth="16" strokeLinecap="round" fill="none" />
      <path d="M330 56c-10 20-30 34-58 40" stroke="#8a5a2b" strokeWidth="8" strokeLinecap="round" fill="none" />
      {leaves.map(([x, y, r], i) => (
        <ellipse key={i} cx={x} cy={y} rx="22" ry="10" fill={i % 2 ? '#34b36b' : '#52c77f'} transform={`rotate(${r} ${x} ${y})`} />
      ))}
      {apples.map(([x, y]) => (
        <g key={x}>
          <path d={`M${x} ${y - 10}v-8`} stroke="#7a4a1d" strokeWidth="3" strokeLinecap="round" />
          <circle cx={x} cy={y} r="13" fill="#ff5a5f" />
          <circle cx={x - 4} cy={y - 4} r="3.5" fill="#fff" fillOpacity=".5" />
        </g>
      ))}
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
