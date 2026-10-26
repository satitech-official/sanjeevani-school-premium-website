'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUp, Languages, Phone, Instagram, Facebook, Menu, X } from 'lucide-react';
import { school } from '../lib/content';

const routes = ['/', '/about/', '/academics/', '/admissions/', '/facilities/', '/gallery/', '/news-events/', '/contact/'];
const labels = {
  en: ['Home', 'About Us', 'Academics', 'Admissions', 'Facilities', 'Gallery', 'News & Events', 'Contact'],
  hi: ['होम', 'हमारे बारे में', 'शैक्षणिक जानकारी', 'प्रवेश', 'सुविधाएँ', 'गैलरी', 'समाचार एवं आयोजन', 'संपर्क'],
};

export function useSchoolLanguage() {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    try { if (localStorage.getItem('sanjeevani-language') === 'hi') setLang('hi'); } catch {}
  }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  function toggleLanguage() {
    const next = lang === 'en' ? 'hi' : 'en';
    setLang(next);
    try { localStorage.setItem('sanjeevani-language', next); } catch {}
  }
  return { lang, toggleLanguage };
}

export function SchoolHeader({ t, lang, toggleLanguage, active = '/' }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function onKey(event) {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        document.getElementById('menu-toggle')?.focus();
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
  return (
    <header>
      <div className="brand-row wrap">
        <Link href="/" className="brand">
          <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/sanjeevani-logo.jpg`} alt={lang === 'hi' ? 'संजीवनी विद्यालय का लोगो' : 'Sanjeevani school logo'} width={76} height={76} priority />
          <span><strong>{t.name}</strong><b>{t.sub}</b><small>{t.motto}</small></span>
        </Link>
        <div className="header-contact">
          <Phone size={15}/><a href={`tel:${school.phone}`}>{school.phoneLabel}</a>
          <span className="divider"/>
          <a href={school.instagram} aria-label="Instagram"><Instagram size={19}/></a>
          <a href={school.facebook} aria-label="Facebook"><Facebook size={18}/></a>
        </div>
        <button className="language" onClick={toggleLanguage} aria-label={lang === 'en' ? 'हिंदी में देखें' : 'View in English'}><Languages size={17}/>{lang === 'en' ? 'हिंदी' : 'English'}</button>
        <button id="menu-toggle" className="menu-toggle" aria-label={open ? t.close : t.menu} aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </div>
      <nav id="navigation" className={`wrap nav ${open ? 'is-open' : ''}`} aria-label={lang === 'en' ? 'Main navigation' : 'मुख्य मेनू'}>
        {routes.map((route, index) => <Link key={route} href={route} aria-current={active === route ? 'page' : undefined} onClick={() => setOpen(false)}>{labels[lang][index]}</Link>)}
        <Link className="button" href="/admissions/" onClick={() => setOpen(false)}>{t.apply}<ArrowRight size={17}/></Link>
      </nav>
    </header>
  );
}

export function SchoolFooter({ t, lang }) {
  return (
    <footer>
      <div className="wrap footer-top">
        <Link className="brand" href="/"><Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/sanjeevani-logo.jpg`} alt="" width={58} height={58}/><span><strong>{t.name}</strong><b>{t.sub}</b></span></Link>
        <p>{t.footer}</p>
        <Link href="/privacy-policy/" className="text-link">{lang === 'hi' ? 'गोपनीयता' : 'Privacy'}</Link>
        <a className="top-link" href="#top">{t.top}<ArrowUp size={18}/></a>
      </div>
      <div className="wrap footer-bottom"><span>© {new Date().getFullYear()} {t.name}. {t.rights}</span><span>{t.location}</span></div>
    </footer>
  );
}
