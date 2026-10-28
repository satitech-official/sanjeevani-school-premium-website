'use client';
import Link from 'next/link';
import SchoolPhotos from './SchoolPhotos';
import PageHero from './PageHero';
import { ArrowRight, MapPin, Phone, Leaf } from 'lucide-react';
import { copy, school } from '../lib/content';
import { pageContent } from '../lib/pages';
import { SchoolHeader, SchoolFooter, useSchoolLanguage } from './SchoolLayout';

export default function SchoolPage({ page }) {
  const { lang, toggleLanguage } = useSchoolLanguage();
  const t = copy[lang];
  const content = pageContent[page][lang];

  return (
    <>
      <a className="skip" href="#main">{t.skip}</a>
      <div className="announcement" id="top"><span><Leaf size={14}/>{t.notice}</span><a href={`tel:${school.phone}`}>{t.talk}<ArrowRight size={14}/></a></div>
      <SchoolHeader t={t} lang={lang} toggleLanguage={toggleLanguage} active={`/${page}/`}/>
      <main id="main" className={`inner-page page-${page}`}>
        <PageHero page={page} content={content} lang={lang} homeLabel={t.nav[0]}/>
        <section className="wrap section page-content">
          <div className="page-section-heading">
            <h2>{content.section}</h2>
            <p>{content.body}</p>
          </div>
          {(page === 'gallery' || page === 'news-events') && <SchoolPhotos lang={lang}/>}
          {content.cards.length > 0 && <div className="detail-grid">{content.cards.map(([title, description], index) => <article className="detail-card" key={title}><span className="detail-number">{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{description}</p>{page === 'academics' && <Link href="/admissions/" className="text-link">{t.apply}<ArrowRight size={16}/></Link>}</article>)}</div>}
          {(page === 'contact' || page === 'admissions') && <div className="contact-panel"><div><MapPin aria-hidden="true"/><h3>{t.addressLabel}</h3><p>{t.address}</p><a className="text-link" href={school.maps}>{t.directions}<ArrowRight size={16}/></a></div><div><Phone aria-hidden="true"/><h3>{t.phoneTitle}</h3><a className="phone-number" href={`tel:${school.phone}`}>{school.phoneLabel}</a><p>{page === 'admissions' ? t.admissionNote : t.location}</p></div></div>}
          {page !== 'privacy-policy' && <div className="page-callout"><div><h3>{t.campusTitle}</h3><p>{t.campusText}</p></div><a href={`tel:${school.phone}`} className="button"><Phone size={17}/>{t.call}</a></div>}
        </section>
      </main>
      <SchoolFooter t={t} lang={lang}/>
    </>
  );
}
