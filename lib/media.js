// Replace these local files and captions when the school supplies original photography.
// Keep the source permalink with each image so its provenance stays clear.
export const schoolPhotos = [
  {
    id: 'campus-celebration',
    src: '/images/school-life/campus-celebration.webp',
    source: 'https://www.facebook.com/photo.php?fbid=1831307908002567&set=pb.100033701251670.-2207520000&type=3',
    en: { title: 'Celebrating together', alt: 'Students performing Garba in front of the blue and yellow Sanjeevani school building.' },
    hi: { title: 'मिलकर मनाएँ उत्सव', alt: 'संजीवनी विद्यालय की नीली और पीली इमारत के सामने गरबा करते विद्यार्थी।' },
  },
  {
    id: 'garba-dance',
    src: '/images/school-life/garba-dance.webp',
    source: 'https://www.facebook.com/photo.php?fbid=1831307931335898&set=pb.100033701251670.-2207520000&type=3',
    en: { title: 'Colour, rhythm & tradition', alt: 'Children in colourful traditional dress taking part in a school Garba celebration.' },
    hi: { title: 'रंग, लय और परंपरा', alt: 'रंग-बिरंगी पारंपरिक पोशाक में विद्यालय के गरबा उत्सव में भाग लेते बच्चे।' },
  },
  {
    id: 'courtyard-garba',
    src: '/images/school-life/courtyard-garba.webp',
    source: 'https://www.facebook.com/photo/?fbid=1831307901335901&set=pb.100033701251670.-2207520000',
    en: { title: 'Memories in the courtyard', alt: 'A group Garba dance in the tree-lined courtyard at Sanjeevani school.' },
    hi: { title: 'विद्यालय के आँगन की यादें', alt: 'संजीवनी विद्यालय के पेड़ों वाले आँगन में सामूहिक गरबा नृत्य।' },
  },
];

export function imagePath(path) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;
}
