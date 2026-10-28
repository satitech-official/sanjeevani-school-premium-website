'use client';

import { useEffect, useRef, useState } from 'react';
import { BookOpen, Calculator, Sprout, RotateCcw, ArrowRight } from 'lucide-react';

const words = {
  en: {
    eyebrow: 'SMALL STEPS. LIFELONG LEARNING.', title: 'Every discovery starts with curiosity.',
    intro: 'Explore three simple ideas at the heart of learning. Choose a step and watch it come to life.',
    steps: ['Discover', 'Think', 'Grow'],
    headings: ['Open a book. Open a possibility.', 'A little thinking goes a long way.', 'Let knowledge take root.'],
    descriptions: ['A question, a story, a new word—there is always something waiting to be discovered.', 'Break a question into small parts. Try, check and learn from each step.', 'Knowledge grows through practice, patience and the values we carry with us.'],
    captions: ['A book opens into a path of discovery.', 'Two blocks plus three blocks make five.', 'A seed grows into a tree, one branch at a time.'],
    replay: 'Replay illustration', answer: 'Reveal the answer', solved: '2 + 3 = 5. Small steps, clear thinking!',
    labels: ['Knowledge', 'Discipline', 'Values'],
  },
  hi: {
    eyebrow: 'छोटे कदम। जीवन भर सीखना।', title: 'हर खोज की शुरुआत जिज्ञासा से।',
    intro: 'सीखने के तीन सरल विचारों को जानें। कोई कदम चुनें और उसे आकार लेते देखें।',
    steps: ['खोजें', 'सोचें', 'बढ़ें'],
    headings: ['किताब खोलें। नई संभावना देखें।', 'थोड़ा विचार, बेहतर समाधान।', 'ज्ञान की जड़ें मजबूत करें।'],
    descriptions: ['एक सवाल, एक कहानी, एक नया शब्द—सीखने के लिए हमेशा कुछ नया है।', 'सवाल को छोटे हिस्सों में बाँटें। कोशिश करें, जाँचें और हर कदम से सीखें।', 'अभ्यास, धैर्य और संस्कारों के साथ हमारा ज्ञान बढ़ता है।'],
    captions: ['खुलती किताब से खोज की राह निकलती है।', 'दो और तीन मिलकर पाँच होते हैं।', 'बीज से एक-एक शाखा के साथ पेड़ बढ़ता है।'],
    replay: 'चित्र फिर चलाएँ', answer: 'उत्तर देखें', solved: '2 + 3 = 5। छोटे कदम, स्पष्ट सोच!',
    labels: ['शिक्षा', 'अनुशासन', 'संस्कार'],
  },
};

function JourneyDrawing({ step, solved }) {
  return (
    <svg className={`journey-drawing drawing-${step}`} viewBox="0 0 500 330" fill="none" aria-hidden="true">
      <path d="M35 290H465" stroke="#c9dcd3" strokeWidth="2"/>
      {step === 0 && <>
        <path className="book-left" d="M250 125Q170 88 70 120V258Q170 224 250 265Z" fill="#fff" stroke="#123b66" strokeWidth="3"/>
        <path className="book-right" d="M250 125Q330 88 430 120V258Q330 224 250 265Z" fill="#f2f8ee" stroke="#123b66" strokeWidth="3"/>
        <path d="M250 125V265" stroke="#187a4b" strokeWidth="3"/>
        {[0,1,2,3].map(i=><path key={i} className="chalk-stroke" style={{animationDelay:`${.3+i*.12}s`}} d={`M105 ${145+i*22}Q165 ${127+i*22} 215 ${148+i*22}`} stroke="#91b7a5" strokeWidth="3" pathLength="1"/>)}
        <path className="chalk-stroke" d="M287 164Q320 122 355 166T410 140M287 211H392" stroke="#187a4b" strokeWidth="3" strokeLinecap="round" pathLength="1"/>
        <path className="discovery-trail" d="M250 105C170 55 320 20 350 76" stroke="#be9b48" strokeWidth="2" strokeDasharray="5 8"/>
        <g className="journey-star" stroke="#be9b48" strokeWidth="3"><path d="M350 52V92M330 72H370M337 59L363 85M337 85L363 59"/></g>
      </>}
      {step === 1 && <>
        <path d="M125 285L150 244M375 285L350 244" stroke="#123b66" strokeWidth="8" strokeLinecap="round"/>
        <rect x="65" y="45" width="370" height="210" rx="14" fill="#173f38" stroke="#bda06a" strokeWidth="10"/>
        <path d="M90 222H410" stroke="#6d9580" strokeWidth="2"/>
        <text x="250" y="125" textAnchor="middle" fill="#fff" fontSize="48" fontFamily="Georgia, serif">2 + 3 = {solved ? '5' : '?'}</text>
        {[0,1,2,3,4].map(i=><rect className="number-block" style={{animationDelay:`${i*.12}s`}} key={i} x={126+i*51} y="165" width="34" height="34" rx="6" fill={i<2?'#b9d9ee':'#c7d792'}/>)}
        <path d="M305 240H345" stroke="#fff" strokeWidth="6" strokeLinecap="round"/>
      </>}
      {step === 2 && <>
        <path className="tree-trunk" d="M250 285V130M250 220L178 170M250 192L320 139M250 162L215 117" stroke="#187a4b" strokeWidth="7" strokeLinecap="round" pathLength="1"/>
        {[[162,151,-35],[331,117,35],[199,98,-30],[257,97,0],[295,178,40]].map(([x,y,angle],i)=><g key={i} transform={`translate(${x} ${y}) rotate(${angle})`}><ellipse className="growing-leaf" style={{animationDelay:`${.3+i*.14}s`,transformOrigin:'0px 0px'}} cx="0" cy="0" rx="22" ry="35" fill={i%2?'#91ba74':'#187a4b'}/></g>)}
        <path className="chalk-stroke" d="M250 278L225 297M250 278L270 299" stroke="#bda06a" strokeWidth="3" pathLength="1"/>
        <circle cx="372" cy="65" r="23" fill="#eee2ae"/>
      </>}
    </svg>
  );
}

export default function LearningJourney({ lang }) {
  const [step, setStep] = useState(0);
  const [replay, setReplay] = useState(0);
  const [solved, setSolved] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setReplay(value => value + 1);
      observer.disconnect();
    }, { threshold: 0.2 });
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  const t = words[lang];
  const icons = [BookOpen, Calculator, Sprout];

  function chooseStep(index) {
    setStep(index);
    setSolved(false);
    setReplay(value => value + 1);
  }

  return (
    <section ref={sectionRef} className="learning-journey wrap section" aria-labelledby="journey-heading">
      <div className="journey-heading"><p className="eyebrow">{t.eyebrow}</p><h2 id="journey-heading">{t.title}</h2><p>{t.intro}</p></div>
      <div className="journey-steps" role="group" aria-label={lang === 'hi' ? 'सीखने के कदम' : 'Learning steps'}>
        {t.steps.map((label,index)=>{const Icon=icons[index];return <button key={index} type="button" aria-pressed={step===index} aria-controls="journey-panel" onClick={()=>chooseStep(index)}><span className="journey-step-number">0{index+1}</span><Icon size={21} aria-hidden="true"/><span>{label}</span></button>;})}
      </div>
      <div className="journey-panel" id="journey-panel">
        <div className="journey-art" key={`${step}-${replay}`}><JourneyDrawing step={step} solved={solved}/><span className="journey-caption">{t.captions[step]}</span></div>
        <div className="journey-copy">
          <span className="journey-chapter">0{step+1} / 03</span>
          <h3>{t.headings[step]}</h3><p>{t.descriptions[step]}</p>
          {step===1 && <div className="journey-answer"><button className="button" type="button" disabled={solved} onClick={()=>setSolved(true)}>{t.answer}<ArrowRight size={16}/></button><p role="status">{solved ? t.solved : '\u00a0'}</p></div>}
          {step===2 && <div className="journey-values">{t.labels.map(label=><span key={label}>{label}</span>)}</div>}
          <button className="journey-replay" type="button" onClick={()=>{setReplay(value=>value+1);setSolved(false);}}><RotateCcw size={15} aria-hidden="true"/>{t.replay}</button>
        </div>
      </div>
    </section>
  );
}
