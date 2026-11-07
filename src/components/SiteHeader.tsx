const links = [
  ['Об игре', '#about'],
  ['Как играть', '#how-to-play'],
  ['Карты', '#cards'],
  ['Print & Play', '#print-and-play'],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="ДОМИНАЦИЯ — в начало">
        <span>ДОМИНАЦИЯ</span>
      </a>
      <nav className="main-nav" aria-label="Основная навигация">
        {links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
      </nav>
      <div className="header-actions">
        <a className="header-social" href="https://t.me/+PE05hAAXgxpkYzli" target="_blank" rel="noreferrer" aria-label="Обсуждение в Telegram" title="Telegram">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 3.2 18.3 20c-.2 1.2-.9 1.5-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.3L5.7 13.5.8 12c-1.1-.3-1.1-1.1.2-1.6L20.2 3c.9-.3 1.7.2 1.4.2Z" /></svg>
        </a>
        <a className="header-social" href="https://github.com/kibaidar1-glitch/Dominacia" target="_blank" rel="noreferrer" aria-label="Исходные материалы на GitHub" title="GitHub">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.4a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.3-2.2-.3-4.6-1.1-4.6-5A3.9 3.9 0 0 1 7 8.8c-.1-.3-.5-1.3.1-2.7 0 0 .8-.2 2.7 1A9.2 9.2 0 0 1 12 6.8c.8 0 1.5.1 2.2.3 1.9-1.3 2.7-1 2.7-1 .6 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1.1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.7V21c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.4Z" /></svg>
        </a>
        <a className="header-download" href="#print-and-play">Скачать игру <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  );
}
