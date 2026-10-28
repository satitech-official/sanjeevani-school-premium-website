'use client';

import { useEffect, useRef } from 'react';

const revealTargets = [
  '.page-section-heading',
  '.detail-card',
  '.school-photo',
  '.contact-panel',
  '.page-callout',
  '.contact-item',
  '.school-moments .life-heading',
].join(', ');

export default function MotionMain({ children, className = '' }) {
  const mainRef = useRef(null);

  useEffect(() => {
    const root = mainRef.current;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer;

    function observeSections() {
      observer?.disconnect();
      if (preference.matches || !('IntersectionObserver' in window)) return;

      const targets = Array.from(root.querySelectorAll(revealTargets));
      observer = new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return;
          target.dataset.revealed = 'true';
          observer.unobserve(target);
        });
      }, { threshold: 0.08 });

      targets.forEach((target, index) => {
        target.style.setProperty('--reveal-delay', `${(index % 3) * 65}ms`);
        if (!target.dataset.revealed) observer.observe(target);
      });
    }

    observeSections();
    preference.addEventListener('change', observeSections);
    return () => {
      observer?.disconnect();
      preference.removeEventListener('change', observeSections);
    };
  }, [className]);

  return <main id="main" className={`motion-main ${className}`} ref={mainRef}>{children}</main>;
}
