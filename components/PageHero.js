import Image from 'next/image';
import Link from 'next/link';
import { Leaf } from 'lucide-react';
import { heroImages } from '../lib/hero-images';
import { imagePath } from '../lib/media';

export default function PageHero({ page, content, lang, homeLabel }) {
  const photo = heroImages[page];

  return (
    <section className="page-hero illustrated-hero">
      <div className="wrap">
        <nav className="breadcrumbs" aria-label={lang === 'hi' ? 'पृष्ठ पथ' : 'Breadcrumb'}>
          <Link href="/">{homeLabel}</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{content.eyebrow}</span>
        </nav>
        <div className="page-hero-grid">
          <div className="page-hero-copy">
            <p className="eyebrow">{content.eyebrow}</p>
            <h1>{content.title}</h1>
            <p className="page-intro">{content.intro}</p>
            <div className="page-hero-rule" aria-hidden="true"><span/><Leaf size={20}/></div>
          </div>
          <div className="page-hero-visual">
            <div className="page-hero-photo">
              <Image
                src={imagePath(`/images/heroes/${page}.webp`)}
                alt={photo[lang]}
                fill
                priority
                sizes="(max-width: 760px) 90vw, (max-width: 1100px) 45vw, 520px"
                style={{ objectFit: 'cover', objectPosition: photo.position }}
              />
            </div>
            <span className="page-photo-label"><Leaf size={16} aria-hidden="true"/>{content.eyebrow}</span>
          </div>
        </div>
      </div>
      <Leaf className="page-leaf" aria-hidden="true"/>
    </section>
  );
}
