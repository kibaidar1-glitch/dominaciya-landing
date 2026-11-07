import { downloadPath, publicAsset } from '../data';

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title" data-reveal>
      <img className="hero__art" src={publicAsset('optimized/hero-main.webp')} alt="Античная статуя и храмовый город" fetchPriority="high" />
      <div className="hero__content">
        <div className="hero__copy">
          <p className="eyebrow">Авторская настольная карточная игра</p>
          <h1 id="hero-title">Создай новый мир.<br /><em>Возвысь свой народ.</em></h1>
          <p className="hero__lead">Изменяйте мир. Переигрывайте соперников. Создавайте комбинации принципов и боритесь за доминирование.</p>
          <div className="hero__actions">
            <a className="button button--primary" href={downloadPath} download>
              Скачать Print &amp; Play <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="#how-to-play">Как играть <span aria-hidden="true">↘</span></a>
          </div>
          <ul className="game-facts" aria-label="Характеристики игры">
            <li><strong>2–9</strong><span>игроков</span></li>
            <li><strong>20–40</strong><span>минут</span></li>
            <li><strong>12+</strong><span>лет</span></li>
          </ul>
        </div>
      </div>
      <div className="hero__index" aria-hidden="true">ИГРА О СТРАТЕГИИ, ВЛИЯНИИ, БОРЬБЕ</div>
    </section>
  );
}
