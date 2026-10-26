import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { imagePath, schoolPhotos } from '../lib/media';

export default function SchoolPhotos({ lang }) {
  return (
    <div className="school-photo-grid">
      {schoolPhotos.map((photo) => (
        <figure className="school-photo" key={photo.id}>
          <div className="school-photo-frame">
            <Image
              src={imagePath(photo.src)}
              alt={photo[lang].alt}
              width={1200}
              height={1200}
              sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 30vw"
            />
          </div>
          <figcaption>
            <h3>{photo[lang].title}</h3>
            <a className="text-link" href={photo.source} target="_blank" rel="noopener noreferrer">
              {lang === 'hi' ? 'Facebook पर मूल फोटो' : 'Original photo on Facebook'}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
