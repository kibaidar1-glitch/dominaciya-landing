import { communityUrl, contents, downloadPath, faqs, gameSteps, githubUrl, peoples, publicAsset, showcaseCards } from '../data';

export function AboutSection() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title" data-reveal>
      <div className="section-kicker"><span>Ⅰ</span><span>Замысел игры</span></div>
      <div className="about__body">
        <h2 id="about-title">Мир меняется.<br /><em>Кто задаст ему порядок?</em></h2>
        <div className="about__text">
          <p>Народы борются за господство, меняя устройство мира и влияя на ход игры. Выкладывайте Принципы, сочетайте Аспекты, накапливайте Влияние и вмешивайтесь в планы соперников.</p>
          <p>Путь к победе зависит от решений, которые вы принимаете за свой народ.</p>
          <a className="text-link" href="#how-to-play">Узнать, как играть <span aria-hidden="true">↘</span></a>
        </div>
      </div>
      <div className="about__quote"><span aria-hidden="true">“</span><p>Создай новый мир.<br />Возвысь свой народ.</p><span className="quote-rule" /></div>
    </section>
  );
}

export function HowToPlaySection() {
  return (
    <section className="section how-to-play" id="how-to-play" aria-labelledby="how-title" data-reveal>
      <div className="how-to-play__scene" aria-hidden="true">
        <img src={publicAsset('optimized/city-panorama.webp')} alt="" loading="lazy" />
      </div>
      <div className="section-kicker"><span>Ⅱ</span><span>Ход партии</span></div>
      <div className="section-heading">
        <h2 id="how-title">Четыре шага<br /><em>к доминации</em></h2>
        <p>Меняйте правила мира, читайте планы соперников и ищите путь к лидерству.</p>
      </div>
      <ul className="steps-list">
        {gameSteps.map((step) => (
          <li key={step.title}>
            <div><h3>{step.title}</h3><p>{step.text}</p></div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function CardGallery() {
  return (
    <section className="section cards-section" id="cards" aria-labelledby="cards-title" data-reveal>
      <div className="section-kicker"><span>Ⅲ</span><span>Инструменты влияния</span></div>
      <div className="section-heading section-heading--split">
        <h2 id="cards-title">Принципы меняют мир.<br /><em>Способности — ход игры.</em></h2>
        <p>Реальные карты из набора: Принципы меняют общий мир, а Способности открывают способы действовать.</p>
      </div>
      <div className="card-gallery">
        {showcaseCards.map((card) => (
            <figure className={`game-card${card.kind === 'Принцип' ? ' game-card--principle' : ''}`} key={card.name}>
            <img src={publicAsset(card.path)} alt={`Карта «${card.name}»`} loading="lazy" />
            <figcaption><span>{card.kind}</span><strong>{card.name}</strong></figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function PeoplesSection() {
  return (
    <section className="section peoples-section" aria-labelledby="peoples-title" data-reveal>
      <div className="section-kicker"><span>Ⅳ</span><span>Народы</span></div>
      <div className="section-heading section-heading--split">
        <h2 id="peoples-title">Девять народов.<br /><em>Девять взглядов на мир.</em></h2>
        <p>Выберите народ и вступите в борьбу за Влияние. У каждого — свои Аспекты и способности.</p>
      </div>
      <div className="peoples-grid">
        {peoples.map((people) => (
          <figure className="people-tile" key={people.name}>
            <img src={publicAsset(people.path)} alt={`Иллюстрация народа ${people.name}`} loading="lazy" />
            <figcaption>{people.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function ComponentsSection() {
  return (
    <section className="section components-section" aria-labelledby="components-title" data-reveal>
      <div className="section-kicker"><span>Ⅴ</span><span>Состав набора</span></div>
      <div className="components-layout">
        <div>
          <h2 id="components-title">Всё необходимое<br /><em>для нового мира</em></h2>
        </div>
        <ul className="contents-list">
          {contents.map(([name, count]) => <li key={name}><span>{name}</span><strong>{count}</strong></li>)}
        </ul>
      </div>
      <figure className="components-scene" aria-hidden="true">
        <img src={publicAsset('optimized/game-components.webp')} alt="" loading="lazy" />
      </figure>
    </section>
  );
}

export function PrintAndPlaySection() {
  return (
    <section className="print-section" id="print-and-play" aria-labelledby="print-title" data-reveal>
      <img className="print-section__scene" src={publicAsset('optimized/final-banner.webp')} alt="Античный город и колонны на закате" loading="lazy" />
      <div className="print-section__copy">
        <p className="eyebrow">Бесплатное издание · Print &amp; Play</p>
        <h2 id="print-title">Соберите игру.<br /><em>Начните историю.</em></h2>
        <p>В PDF собраны карты народов, принципы, способности, жетоны Влияния и правила игры.</p>
        <a className="button button--light" href={downloadPath}>
          Скачать Print & Play <span aria-hidden="true">↓</span>
        </a>
        <span className="file-note">PDF · версия 1.0.0</span>
      </div>
    </section>
  );
}

export function FAQSection() {
  return (
    <section className="section faq-section" aria-labelledby="faq-title" data-reveal>
      <div className="section-kicker"><span>Ⅵ</span><span>Перед первой партией</span></div>
      <div className="faq-layout">
        <h2 id="faq-title">Коротко<br /><em>о главном</em></h2>
        <div className="faq-list">
          {faqs.map(({ question, answer }) => (
            <details key={question}>
              <summary>{question}<span aria-hidden="true">＋</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <a className="wordmark wordmark--footer" href="#top"><span>ДОМИНАЦИЯ</span></a>
      <span>Создай новый мир. Возвысь свой народ.</span>
      <div className="footer-links">
        <a href={downloadPath}>Скачать игру</a>
        <a className="social-link" href={communityUrl} target="_blank" rel="noreferrer" aria-label="Обсуждение в Telegram" title="Telegram">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 3.2 18.3 20c-.2 1.2-.9 1.5-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.3L5.7 13.5.8 12c-1.1-.3-1.1-1.1.2-1.6L20.2 3c.9-.3 1.7.2 1.4.2Z" /></svg>
          <span className="sr-only">Telegram</span>
        </a>
        <a className="social-link" href={githubUrl} target="_blank" rel="noreferrer" aria-label="Исходные материалы на GitHub" title="GitHub">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.4a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.3-2.2-.3-4.6-1.1-4.6-5A3.9 3.9 0 0 1 7 8.8c-.1-.3-.5-1.3.1-2.7 0 0 .8-.2 2.7 1A9.2 9.2 0 0 1 12 6.8c.8 0 1.5.1 2.2.3 1.9-1.3 2.7-1 2.7-1 .6 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1.1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.7V21c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.4Z" /></svg>
          <span className="sr-only">GitHub</span>
        </a>
      </div>
    </footer>
  );
}
