'use client';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUp, BookOpen, GraduationCap, Languages, Leaf, Phone, MapPin, Instagram, Facebook, Menu, X, FlaskConical, ChartNoAxesCombined, Sprout, HeartHandshake, ShieldCheck, Calculator } from 'lucide-react';
import { copy, school } from '../lib/content';
import SchoolPhotos from './SchoolPhotos';
import { imagePath, schoolPhotos } from '../lib/media';
import ValuesMarquee from './ValuesMarquee';
import Link from 'next/link';
import { SchoolHeader, SchoolFooter, useSchoolLanguage } from './SchoolLayout';
const highlightIcons = [GraduationCap, Languages, BookOpen, HeartHandshake, Sprout];
function Reveal({children, className=''}) { const reduced = useReducedMotion(); return <motion.div className={className} initial={reduced ? false : {opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.12}} transition={{duration:0.5}}>{children}</motion.div>; }
function ArrowLink({children, href, className=''}) { return <Link className={`button ${className}`} href={href}>{children}<ArrowRight size={17} aria-hidden="true"/></Link>; }
export default function SchoolHome() {
 const { lang, toggleLanguage } = useSchoolLanguage();
 const t = copy[lang];
 return <>
 <a className="skip" href="#main">{t.skip}</a>
 <div id="top" className="announcement"><span><Leaf size={14}/>{t.notice}</span><a href={`tel:${school.phone}`}>{t.talk}<ArrowRight size={14}/></a></div>
 <SchoolHeader t={t} lang={lang} toggleLanguage={toggleLanguage}/>
 <main id="main"><section id="home" className="hero"><div className="hero-halo"/><div className="wrap hero-grid"><div className="hero-copy"><div className="eyebrow"><span/>{t.welcome}</div><h1>{t.hero}<em>{t.heroAccent}</em></h1><p>{t.intro}</p><div className="actions"><ArrowLink href="/about/">{t.explore}</ArrowLink><a className="text-link" href="#admissions">{t.apply}<ArrowRight size={16}/></a></div><div className="hero-note"><span className="mini-line"/>{t.since}</div></div><div className="hero-art"><Leaf className="leaf leaf-one"/><Leaf className="leaf leaf-two"/><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="crest-panel">{school.campusImage?<Image src={imagePath(school.campusImage)} alt={schoolPhotos[0][lang].alt} fill sizes="(max-width: 760px) 90vw, 45vw" style={{objectFit:'cover'}} priority/>:<><div className="crest-kicker">{t.location}</div><Image className="hero-logo" src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/sanjeevani-logo.jpg`} alt="" width={190} height={190} priority/><div className="crest-title">{t.name}</div><p>{t.crest}</p><span className="crest-rule"/></>}</div><div className="floating-note"><Sprout size={29}/><span>{t.motto}</span></div></div></div><svg className="wave" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true"><path fill="#fff" d="M0,25 C300,130 630,-40 970,32 C1200,80 1330,62 1440,0 L1440,90 L0,90 Z"/></svg></section>
 <div className="wrap highlights">{t.highlights.map((text,i)=>{const Icon=highlightIcons[i];return <div key={text}><Icon size={27}/><span>{text}</span></div>;})}</div>
 <ValuesMarquee items={[...t.highlights, ...t.pillars]} lang={lang}/>
 <section id="about" className="section wrap about-grid"><Reveal><p className="eyebrow">{t.aboutLabel}</p><h2>{t.aboutTitle}<em>{t.aboutAccent}</em></h2><p>{t.about}</p><p>{t.about2}</p><ArrowLink className="outline" href="/about/">{t.storyLink}</ArrowLink></Reveal><Reveal className="legacy"><div className="legacy-top"><span>{t.legacy}</span><strong>1999</strong><p>{t.legacyText}</p><small>{t.founder}</small></div><div className="pillars">{t.pillars.map((p,i)=><div key={p}><span>0{i+1}</span><div><h3>{p}</h3><p>{t.pillarText[i]}</p></div></div>)}</div></Reveal></section>
 <section id="academics" className="academic-section">
   <div className="wrap">
     <Reveal className="center">
       <p className="eyebrow">{t.academicLabel}</p>
       <h2>{t.academicTitle}</h2>
       <p className="section-intro">{t.academicIntro}</p>
     </Reveal>
     <div className="stream-grid">
       {t.streams.map((stream, index) => {
         const Icon = [FlaskConical, Calculator, ChartNoAxesCombined, Sprout][index];

         return (
           <Reveal key={stream}>
             <a
               className="stream-card"
               href={`tel:${school.phone}`}
               aria-label={`${stream}: ${t.streamLink}`}
             >
               <div className="stream-top">
                 <Icon size={34} />
                 <span>{String(index + 1).padStart(2, '0')}</span>
               </div>
               <p>{t.streamTags[index]}</p>
               <h3>{stream}</h3>
               <div className="stream-bottom">
                 {t.streamLink}
                 <ArrowRight size={19} />
               </div>
             </a>
           </Reveal>
         );
       })}
     </div>
   </div>
 </section>
 <section id="school-life" className="section wrap"><Reveal className="life-heading"><div><p className="eyebrow">{t.lifeLabel}</p><h2>{t.lifeTitle}</h2></div><p>{t.lifeIntro}</p></Reveal><div className="life-grid">{t.lifeCards.map((title,i)=>{const Icon=[HeartHandshake,ShieldCheck,Leaf][i];return <Reveal className="life-card" key={title}><Icon size={30}/><h3>{title}</h3><p>{t.lifeTexts[i]}</p></Reveal>;})}</div><Reveal className="campus-strip"><div className="campus-icon"><GraduationCap size={40}/></div><div><h3>{t.campusTitle}</h3><p>{t.campusText}</p></div><ArrowLink className="outline" href={`tel:${school.phone}`}>{t.campusLink}</ArrowLink></Reveal></section>
 <section className="section wrap school-moments">
   <div className="life-heading">
     <div><p className="eyebrow">{lang === 'hi' ? 'विद्यालय की झलकियाँ' : 'LIFE AT SANJEEVANI'}</p><h2>{lang === 'hi' ? 'साथ मिलकर बनती यादें।' : 'Moments that bring us together.'}</h2></div>
     <Link className="text-link" href="/gallery/">{lang === 'hi' ? 'पूरी गैलरी देखें' : 'Explore the gallery'}<ArrowRight size={17}/></Link>
   </div>
   <SchoolPhotos lang={lang}/>
 </section>
 <section id="admissions" className="wrap admissions"><div className="admission-decoration" aria-hidden="true"><Sprout/></div><Reveal><p className="eyebrow">{t.admissionLabel}</p><h2>{t.admissionTitle}</h2><p>{t.admissionText}</p><a className="button white" href={`tel:${school.phone}`}><Phone size={17}/>{t.call}<ArrowRight size={17}/></a><small>{t.admissionNote}</small></Reveal></section>
 <section id="contact" className="section wrap contact-grid"><div><p className="eyebrow">{t.contactLabel}</p><h2>{t.contactTitle}</h2><p>{t.location}</p></div><div className="contact-item"><MapPin/><h3>{t.addressLabel}</h3><p>{t.address}</p><a className="text-link" href={school.maps}>{t.directions}<ArrowRight size={16}/></a></div><div className="contact-item"><Phone/><h3>{t.phoneTitle}</h3><a href={`tel:${school.phone}`}>{school.phoneLabel}</a><h3 className="social-title">{t.social}</h3><div className="social-links"><a href={school.instagram} aria-label="Instagram"><Instagram/></a><a href={school.facebook} aria-label="Facebook"><Facebook/></a></div></div></section>
 </main><SchoolFooter t={t} lang={lang}/>
 </>;
}
