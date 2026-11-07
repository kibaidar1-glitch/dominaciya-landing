import { SiteHeader } from './components/SiteHeader';
import { Hero } from './components/Hero';
import { AboutSection, CardGallery, ComponentsSection, FAQSection, HowToPlaySection, PeoplesSection, PrintAndPlaySection, SiteFooter } from './components/Sections';

export default function App() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">К основному содержанию</a>
      <div className="page-shell">
        <SiteHeader />
        <main id="main">
          <Hero />
          <AboutSection />
          <HowToPlaySection />
          <CardGallery />
          <PeoplesSection />
          <ComponentsSection />
          <PrintAndPlaySection />
          <FAQSection />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
import { useEffect } from 'react';
