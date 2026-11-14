import { downloadPath, communityUrl, githubUrl } from './data';

export default function GamePage() {
  return (
    <main className="game-page" id="main">
      <header className="game-page__header">
        <a className="wordmark" href="/" aria-label="ДОМИНАЦИЯ — на главную"><span>ДОМИНАЦИЯ</span></a>
        <a className="text-link" href="/">На главную <span aria-hidden="true">↗</span></a>
      </header>
      <section className="game-page__hero" aria-labelledby="game-title">
        <p className="eyebrow">Бесплатное издание · Print &amp; Play · Версия 1.0.0</p>
        <h1 id="game-title">Создай новый мир.<br /><em>Возвысь свой народ.</em></h1>
        <p className="hero__lead">ДОМИНАЦИЯ — авторская настольная карточная игра о народах, принципах и борьбе за влияние. Скачайте PDF, подготовьте компоненты и сыграйте первую партию.</p>
        <a className="button button--primary" href={downloadPath}>Скачать игру (PDF) <span aria-hidden="true">↓</span></a>
        <ul className="game-facts" aria-label="Характеристики игры">
          <li><strong>2–9</strong><span>игроков</span></li>
          <li><strong>20–40</strong><span>минут</span></li>
          <li><strong>12+</strong><span>лет</span></li>
        </ul>
      </section>
      <section className="game-page__details" aria-labelledby="prepare-title">
        <h2 id="prepare-title">Как подготовить игру</h2>
        <ol>
          <li>Скачайте PDF с материалами и правилами.</li>
          <li>Распечатайте карты и жетоны; для прочности используйте плотную бумагу или картон.</li>
          <li>Вырежьте компоненты по контурам, подготовьте их по правилам и начинайте партию.</li>
        </ol>
        <p>Состав набора: 9 карт Народов, 56 Принципов, 24 Способности, 110 жетонов Влияния и правила игры.</p>
      </section>
      <footer className="game-page__footer">
        <a href={communityUrl} target="_blank" rel="noreferrer">Обсуждение и отзывы в Telegram</a>
        <a href={githubUrl} target="_blank" rel="noreferrer">Материалы игры на GitHub</a>
      </footer>
    </main>
  );
}
