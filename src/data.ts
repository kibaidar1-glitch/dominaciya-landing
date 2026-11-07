export const downloadPath = '#print-download-unavailable';
export const communityUrl = 'https://t.me/+PE05hAAXgxpkYzli';
export const githubUrl = 'https://github.com/kibaidar1-glitch/Dominacia';

export function publicAsset(path: string) {
  return `/${path.split('/').map(encodeURIComponent).join('/')}`;
}

export const showcaseCards = [
  { name: 'Академия просвещения', kind: 'Принцип', path: 'optimized/card-academy.webp' },
  { name: 'Господство', kind: 'Принцип', path: 'optimized/card-dominion.webp' },
  { name: 'Парадокс', kind: 'Принцип', path: 'optimized/card-paradox.webp' },
  { name: 'Агрессия', kind: 'Способность', path: 'optimized/card-aggression.webp' },
  { name: 'Дар', kind: 'Способность', path: 'optimized/card-gift.webp' },
  { name: 'Подкуп', kind: 'Способность', path: 'optimized/card-bribery.webp' },
];

export const peoples = [
  { name: 'Ангелиды', path: 'optimized/people-angelids.webp' },
  { name: 'Демониды', path: 'optimized/people-demonids.webp' },
  { name: 'Квириты', path: 'optimized/people-kvirits.webp' },
  { name: 'Логиары', path: 'optimized/people-logiars.webp' },
  { name: 'Люмиры', path: 'optimized/people-lyumirs.webp' },
  { name: 'Парадоксы', path: 'optimized/people-paradoxes.webp' },
  { name: 'Соларии', path: 'optimized/people-solarii.webp' },
  { name: 'Титаниды', path: 'optimized/people-titanids.webp' },
  { name: 'Вольтиторы', path: 'optimized/people-voltiters.webp' },
];

export const gameSteps = [
  { title: 'Выбери свою сторону', text: 'Возглавь один из народов со своими уникальными преимуществами и стратегией.' },
  { title: 'Меняй правила мира', text: 'Выкладывай принципы, определяющие ход игры и приносящие влияние.' },
  { title: 'Переиграй соперников', text: 'Используй способности, заключай союзы и мешай планам противников.' },
  { title: 'Добейся победы', text: 'Набери очки влияния и удержи лидерство, чтобы одержать победу.' },
];

export const contents = [
  ['Карты Народов', '9 шт.'],
  ['Принципы', '56 шт.'],
  ['Способности', '24 шт.'],
  ['Жетоны Влияния', '110 шт.'],
  ['Правила игры', 'в комплекте'],
];

export const faqs = [
  { question: 'Сколько длится партия?', answer: 'Ориентировочное время партии — 20–40 минут.' },
  { question: 'Сколько игроков могут играть?', answer: 'Игра рассчитана на 2–9 игроков.' },
  { question: 'Что такое Print & Play?', answer: 'Это PDF с материалами игры: скачайте его, распечатайте компоненты и подготовьте набор к игре.' },
  { question: 'Сколько стоит игра?', answer: 'Print & Play распространяется бесплатно.' },
];
