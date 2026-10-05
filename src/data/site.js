// Бағыжан: барлық мәтін мен дерек осы файлда.
// Суреттер — public/photos, құжаттар — public/docs (docs.js build_bagjan.py арқылы жиналған).
import { DOC_CATEGORIES as GENERATED } from './docs';

export const KINDERGARTEN = {
  short: 'Бағыжан',
  legal: '«Бағыжан» бөбекжай балабақшасы',
  since: '2017',
  bin: '170640023876',
  director: 'Нұрхожа Айбибі Нұрхожақызы',
  address: 'Түркістан облысы, Сарыағаш ауданы, Жартытөбе ауыл округі, Достық елді мекені, Ы. Алтынсарин көшесі № 18',
  phone: '+7 (776) 046-72-12',
  email: 'bagyzhan_bb_@mail.ru',
  hours: 'Дүйсенбі – Жұма, 08:00 – 18:00',
  mapUrl: `https://2gis.kz/search/${encodeURIComponent('Сарыагашский район, село Достык, улица Алтынсарина, 18')}`,
};

export const NAV = [
  ['#about', 'Біз туралы'],
  ['#groups', 'Топтар'],
  ['#day', 'Күн тәртібі'],
  ['#gallery', 'Галерея'],
  ['#docs', 'Құжаттар'],
  ['#contact', 'Байланыс'],
];

export const ABOUT_FACTS = [
  { ic: '🛏️', title: 'Жеке кереует', text: 'әр балаға жеке стационарлық кереует' },
  { ic: '🧴', title: 'Санитарлық норма', text: 'тексеруден толық өтті' },
  { ic: '🔥', title: 'Жылы едендер', text: 'барлық бөлмелерде' },
  { ic: '🪟', title: 'Табиғи жарық', text: 'күннен қорғау жүйесімен' },
];

export const GROUPS = [
  {
    tag: 'Бірінші топ', title: 'Кіші топ', tone: 'sun',
    text: 'Киім шешетін бөлме — 18 м², ойын бөлмесі — 34,3 м², жуынатын бөлме — 16,3 м².',
    items: ['Жеке киім шкафтары', 'Жеке ойын алаңы', 'Жарық, жылы еден'],
  },
  {
    tag: 'Екінші топ', title: 'Үлкен топ', tone: 'leaf',
    text: 'Киім шешетін бөлме — 15,3 м², ойын-жатын бөлмесі — 60,8 м², жуынатын бөлме — 16,8 м².',
    items: ['Кең ойын-жатын кеңістігі', 'Жеке стационарлық кереуеттер', 'Медбике бөлмесі — 15 м²'],
  },
  {
    tag: 'Қосымша', title: 'Басқару және медицина', tone: 'sky',
    text: 'Меңгеруші бөлмесі — 22,7 м². Балалардың денсаулығы мен қауіпсіздігі үнемі бақылауда.',
    items: ['Дәрігерлік бақылау', 'Лицензияланған медициналық қызмет', 'Күнделікті денсаулық тексеруі'],
  },
];

export const ADVANTAGES = [
  { ic: '🛡️', title: 'Қауіпсіздік', text: 'Терезелер мен жарықтандыру құралдарында арнайы қоршау жүйелері орнатылған.' },
  { ic: '🎨', title: 'Дамыту ортасы', text: 'Әр бөлме ойын, шығармашылық және демалуға арналған аймақтарға бөлінген.' },
  { ic: '👩‍⚕️', title: 'Медициналық бақылау', text: 'Арнайы медбике бөлмесі және лицензияланған медициналық көмек көрсету.' },
  { ic: '🧼', title: 'Тазалық пен гигиена', text: 'Барлық үй-жайлар санитарлық қағидаларға толық сәйкес ұсталады.' },
];

export const SCHEDULE = [
  ['08:00', 'Қабылдау', 'Балаларды жылы қарсы алу, таңғы жаттығу'],
  ['09:00', 'Таңғы ас', 'Дәмді әрі пайдалы таңғы ас'],
  ['09:30', 'Сабақ пен ойын', 'Дамыту сабақтары, шығармашылық жұмыстар'],
  ['11:30', 'Серуен', 'Ашық аулада белсенді қозғалыс ойындары'],
  ['13:00', 'Түскі ас пен ұйқы', 'Жеке кереуеттерде тыныш демалыс уақыты'],
  ['16:00', 'Бесін ас, еркін ойын', 'Ата-аналарды күту, үйге қайту'],
];

// ---- Суреттер ----
const p = (name) => `/photos/${name}.jpg`;
export const PHOTO_CATS = [
  {
    key: 'yard', title: 'Аула мен ғимарат',
    items: [
      { src: p('facade'), caption: 'Балабақша ғимараты' },
      { src: p('yard-swing'), caption: 'Ойын алаңы' },
      { src: p('yard-patio'), caption: 'Жабық алаң' },
      { src: p('terrace-lesson'), caption: 'Ашық ауадағы сабақ' },
      { src: p('terrace'), caption: 'Жабық веранда' },
    ],
  },
  {
    key: 'rooms', title: 'Топ бөлмелері',
    items: [
      { src: p('room-play'), caption: 'Ойын бөлмесі' },
      { src: p('room-winnie'), caption: 'Топ бөлмесі' },
      { src: p('room-carpet'), caption: 'Жол кілемі бар бөлме' },
      { src: p('hall-blue'), caption: 'Киім ілу бөлмесі' },
      { src: p('hall-palm'), caption: 'Дәліз бен шкафтар' },
      { src: p('lockers'), caption: 'Жеке шкафтар' },
      { src: p('door-balausa'), caption: '«Балауса» тобы' },
      { src: p('door-baldyrgan'), caption: '«Балдырған» тобы' },
    ],
  },
  {
    key: 'care', title: 'Ұйықтау және жуыну',
    items: [
      { src: p('bedroom'), caption: 'Ұйықтау бөлмесі' },
      { src: p('washroom-1'), caption: 'Жуыну бөлмесі' },
      { src: p('washroom-2'), caption: 'Жуыну бөлмесі' },
    ],
  },
  {
    key: 'cabinets', title: 'Кабинеттер',
    items: [
      { src: p('nurse-door'), caption: 'Медбике кабинеті' },
      { src: p('nurse-office'), caption: 'Медбике жұмыс орны' },
      { src: p('nurse-procedure'), caption: 'Процедура бұрышы' },
      { src: p('nurse-bed'), caption: 'Оқшаулау бөлмесі' },
      { src: p('office'), caption: 'Әкімшілік кабинеті' },
    ],
  },
];
export const ALL_PHOTOS = PHOTO_CATS.flatMap((c) => c.items.map((i) => ({ ...i, cat: c.key })));
export const HERO_PHOTOS = [
  { src: p('yard-swing'), caption: 'Ойын алаңы' },
  { src: p('room-play'), caption: 'Топ бөлмесі' },
  { src: p('terrace-lesson'), caption: 'Ашық ауадағы сабақ' },
];
export const ABOUT_PHOTOS = [p('room-carpet'), p('facade'), p('lockers')];
export const DOOR_PHOTOS = [
  { src: p('door-balausa'), name: '«Балауса» тобы' },
  { src: p('door-baldyrgan'), name: '«Балдырған» тобы' },
];

// ---- Құжаттар ----
const withUrl = (d) => ({ ...d, url: `/docs/${d.file}` });
const OFFICIAL = [
  { title: 'Заңды тұлғаны мемлекеттік қайта тіркеу анықтамасы', kind: 'Тіркеу · БСН 170640023876', file: 'restr_document.pdf', size: '413 КБ' },
  { title: 'Санитариялық қорытынды', kind: 'СЭС · № X.08.X.KZ25VBS00130246', file: 'san_conclusion.pdf', size: '164 КБ' },
  { title: 'Медициналық лицензия № 22000552', kind: 'Лицензия · 27.12.2022', file: 'med_license.pdf', size: '293 КБ' },
];
const ICONS = { admin: '🗂️', plans: '📘', nurse: '🩺' };

export const DOC_CATEGORIES = [
  { key: 'official', short: 'Ресми', icon: '📜', title: 'Ресми құжаттар', note: 'Тіркеу, санитариялық қорытынды және лицензия.', docs: OFFICIAL.map(withUrl) },
  ...GENERATED.map((c) => ({ ...c, icon: ICONS[c.key] || '📄', docs: c.docs.map(withUrl) })),
];
export const DOCS_TOTAL = DOC_CATEGORIES.reduce((s, c) => s + c.docs.length, 0);
