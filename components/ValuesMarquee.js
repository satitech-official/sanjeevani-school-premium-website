'use client';
import { useState } from 'react';
import { Pause, Play, Sparkles } from 'lucide-react';
export default function ValuesMarquee({ items, lang }) {
  const [paused, setPaused] = useState(false);
  const label = lang === 'hi' ? 'हमारी पहचान' : 'The Sanjeevani way';
  return <section className={`values-marquee ${paused ? 'is-paused' : ''}`} aria-label={label}>
    <div className="wrap marquee-heading"><span>{label}</span><button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label={lang === 'hi' ? 'स्क्रॉलिंग रोकें' : 'Pause scrolling'}>{paused ? <Play size={14}/> : <Pause size={14}/>}<span>{lang === 'hi' ? (paused ? 'चलाएँ' : 'रोकें') : (paused ? 'Play' : 'Pause')}</span></button></div>
    <div className="marquee-window"><div className="marquee-track">{[0,1].map(group => <ul className="marquee-group" key={group} aria-hidden={group === 1 ? true : undefined}>{items.map((item,i) => <li className="value-tag" key={item}><Sparkles size={15} aria-hidden="true"/><span>{item}</span><span className="tag-dot" aria-hidden="true"/></li>)}</ul>)}</div></div>
  </section>;
}
